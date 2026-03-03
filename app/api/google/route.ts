import { auth } from "@/auth";
import getGmailClient from "@/app/lib/gmail";

export async function GET() {
  const session = await auth();
  if (!session) {
    return new Response("Session expired", {
      status: 401,
    });
  }

  const userId = session.user.id;
  const gmailClient = await getGmailClient(userId);

  const listResposne  = await gmailClient.users.messages.list({
    userId: "me",
    maxResults: 5,
    q: "in:inbox"
  });
  const messages = listResposne.data.messages || [];
  const emails = []

  for(const message of messages){
    const fullMessage = await gmailClient.users.messages.get({
        userId: "me",
        id: message.id!,
        format: "metadata"
    });
    
    const headers = fullMessage.data.payload?.headers || []
    const subject = headers.find(h => h.name === "Subject")?.value ||  "";
    const from = headers.find(h=> h.name === "From")?.value || "";

    emails.push({
        id: fullMessage.data.id,
        snippet: fullMessage.data.snippet,
        subject,
        from,
        internalDate: fullMessage.data.internalDate,
    })
  }


  return Response.json(emails);
}
