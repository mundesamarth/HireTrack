import { prisma } from "@/app/lib/prisma";
import { auth } from "@/auth";

export async function GET() {
  const session = await auth();
  if (!session) {
    return new Response("Session Expired", {
      status: 440,
    });
  }

  try {
    const sessionUserId = session.user.id;

    const applications = await prisma.application.findMany({
        where:{userId:sessionUserId},
        orderBy: {updatedAt: "desc"}
    })

    return Response.json({
        applications: applications
    })
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
}
