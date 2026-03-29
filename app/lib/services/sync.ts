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

    console.log(fullMessage)
    const headers = fullMessage.data.payload?.headers || [];
    const subject = headers.find((h) => h.name === "Subject")?.value || "";
    const from = headers.find((h) => h.name === "From")?.value || "";
    const date = new Date(Number(fullMessage.data.internalDate));

    const emailUpsert = await prisma.emailData.upsert({
      where: { gmailId: fullMessage.data.id! },
      update: {
        snippet: fullMessage.data.snippet || "",
        subject: subject,
        from: from,
        date: date,
      },
      create: {
        gmailId: fullMessage.data.id!,
        snippet: fullMessage.data.snippet || "",
        subject: subject,
        from: from,
        date: date,
        user: {
          connect: { id: userId },
        },
      },
    });
    // Getting the base64-encoded and converting it into UTF-8
    const encodedBase64 = fullMessage.data.payload?.parts?.find(p => p.mimeType === 'text/plain')?.body?.data || ""
    const decodedBase64 = Buffer.from(encodedBase64, 'base64').toString('utf-8')

    // connecting the extractor.ts
    const aiData = await extractJobDetails(decodedBase64);
    console.log("-----------------------------------");
    console.log(`📧 Processing: ${subject}`);
    console.log("🤖 AI Extraction:", JSON.stringify(aiData, null, 2));
    console.log("-----------------------------------");
    console.log(encodedBase64) 
    console.log("---------------------")
    console.log(decodedBase64)
  }
}
