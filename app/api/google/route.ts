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

  const profile = await gmailClient.users.getProfile({
    userId: "me",
  });

  return Response.json(profile.data);
}
