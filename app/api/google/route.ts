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

  const user = await prisma.application.findMany({
    where:{userId: session.user.id},
    select: {companyName:true,
          positionTitle:true,
          interviewDate: true,
          status: true,
          location: true,
          interviewType: true},
    orderBy: {interviewDate: 'desc'}

  })  
  return Response.json(user);
}
