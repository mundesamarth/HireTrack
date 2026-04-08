import { prisma } from "@/app/lib/prisma";
import syncEmail from "@/app/lib/services/sync";
import { auth } from "@/auth";

export async function POST() {
  const session = await auth();

  if (!session) {
    return new Response("Session Expired", {
      status: 401,
    });
  }
  try {
    const sessionUser = session.user.id;

    await syncEmail(sessionUser);

    return Response.json("Syncing done");
  } catch (error) {
    console.log(error);
    return new Response(`Something went wrong`, {
      status: 500,
    });
  }
}

export async function GET() {
  const session = await auth();
  if (!session) {
    return new Response("Session Expired", {
      status: 401,
    });
  }

  const user = await prisma.user.findUnique({
    where:{id: session.user.id},
  })

  return Response.json({
    lastSyncedAt: user?.lastSyncedAt,
  })
}
