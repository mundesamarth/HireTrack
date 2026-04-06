import { google } from "googleapis";
import { prisma } from "./prisma";

export default async function getGmailClient(userId: string) {
  const account = await prisma.account.findFirst({
    where: { userId: userId, provider: "google" },
  });

  if (!account || !account.access_token) {
    throw new Error("No google account found for this account");
  }

  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
  );
  auth.setCredentials({
    access_token: account.access_token,
    refresh_token: account.refresh_token,
  });

  const currentDate = Math.floor(Date.now() / 1000);

  if (!account?.expires_at || account?.expires_at - currentDate < 60) {
    const { credentials } = await auth.refreshAccessToken();

    await prisma.account.update({
      where: { id: account.id },
      data: {
        access_token: credentials.access_token ?? account.access_token,
        expires_at: credentials.expiry_date
          ? Math.floor(credentials.expiry_date / 1000)
          : account.expires_at,
        refresh_token: credentials.refresh_token ?? account.refresh_token,
      },
    });
    auth.setCredentials({
        access_token:credentials.access_token ?? account.access_token ?? undefined,
        refresh_token: credentials.refresh_token ?? account.refresh_token
    })
  }

  return google.gmail({ version: "v1", auth });
}
