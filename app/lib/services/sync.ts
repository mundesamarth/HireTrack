import getGmailClient from "@/app/lib/gmail";
import { prisma } from "@/app/lib/prisma";
import { extractJobDetails } from "../ai/extractor";

export default async function syncEmail(userId: string) {
  const gmailClient = await getGmailClient(userId);

  const listResposne = await gmailClient.users.messages.list({
    userId: "me",
    maxResults: 5,
    q: "in:inbox",
  });
  const messages = listResposne.data.messages || [];

  for (const message of messages) {
    const fullMessage = await gmailClient.users.messages.get({
      userId: "me",
      id: message.id!,
      format: "full",
    });

    const headers = fullMessage.data.payload?.headers || [];
    const subject = headers.find((h) => h.name === "Subject")?.value || "";
    const from = headers.find((h) => h.name === "From")?.value || "";
    const date = new Date(Number(fullMessage.data.internalDate));

    // Encoding and Decoding Body of the email
    const encodedBase64 =
      fullMessage.data.payload?.parts?.find((p) => p.mimeType === "text/plain")
        ?.body?.data || "";
    const decodedBase64 = Buffer.from(encodedBase64, "base64").toString(
      "utf-8",
    );

    // Upserting RAW data into emailData schema
    const emailUpsert = await prisma.emailData.upsert({
      where: { gmailId: fullMessage.data.id! },
      update: {
        snippet: decodedBase64 || "",
        subject: subject,
        from: from,
        date: date,
      },
      create: {
        gmailId: fullMessage.data.id!,
        snippet: decodedBase64 || "",
        subject: subject,
        from: from,
        date: date,
        user: {
          connect: { id: userId },
        },
      },
    });

    // Passing the Decoded body into the AI Extractor
    const gmailExtractor = await extractJobDetails(decodedBase64);

    // Upserting the output from the AI in Application schema
    if (gmailExtractor && gmailExtractor.company && gmailExtractor.role) {
      // Setting up the date
      const interviewDate = gmailExtractor.interview?.date
        ? new Date(
            `${gmailExtractor.interview.date}T${gmailExtractor.interview.time || "00:00"}:00`,
          )
        : null;

      await prisma.application.upsert({
        where: { emailId: fullMessage.data.id! },
        update: {
          companyName: gmailExtractor.company,
          positionTitle: gmailExtractor.role,
          interviewDate: interviewDate,
          status: gmailExtractor.status,
          location: gmailExtractor.location,
          interviewType: gmailExtractor.interview?.type
        },
        create: {
          emailId: fullMessage.data.id!,

          companyName: gmailExtractor.company,
          positionTitle: gmailExtractor.role,
          interviewDate: interviewDate,
          status: gmailExtractor.status,
          location: gmailExtractor.location,
          interviewType: gmailExtractor.interview?.type,
          user: {
            connect: { id: userId },
          },
        },
      });
    }
  }
}
