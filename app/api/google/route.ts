import syncEmail from "@/app/lib/services/sync";
import { auth } from "@/auth";
import { prisma } from "@/app/lib/prisma";


export async function GET() {
  const session = await auth();
  if (!session) {
    return new Response("Session expired", {
      status: 401,
    });
  }

  const syncGmail = await syncEmail(session.user.id);

  const user = await prisma.emailData.findMany({
    where:{userId: session.user.id},
    select: {subject: true, snippet: true},
    orderBy: {date: 'desc'}

  })  
  return Response.json(user);
}
