import { prisma } from "@/app/lib/prisma";
import { auth } from "@/auth";
import * as z from "zod";

const formSchema = z.object({
  companyName: z.string().min(4),
  position: z.string().min(4),
  location: z.string(),
  workMode: z.string(),
  stage: z.string(),
  interviewDate: z.string(),
});

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
      where: { userId: sessionUserId },
      orderBy: { updatedAt: "desc" },
    });

    return Response.json({
      applications: applications,
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
}

export async function POST(req: Request) {
  const session = await auth();
  const body = await req.json();
  const validatedData = formSchema.parse(body);

  if (!session) {
    return new Response("Session Expired", {
      status: 401,
    });
  }

  try {
    const sessionUserId = session.user.id;

    const applicationCreate = await prisma.application.create({
      data: {
        companyName: validatedData.companyName,
        positionTitle: validatedData.position,
        location: validatedData.location,
        status: validatedData.stage.toUpperCase(),
        interviewDate: validatedData.interviewDate,
        interviewType: validatedData.workMode,
        source: "MANUAL",
        user: {
          connect: { id: sessionUserId },
        },
      },
    });
    return Response.json({
      message: "Created new application ",
      applicationCreate: applicationCreate,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { message: "Invalid form data", errors: error.flatten() },
        { status: 400 },
      );
    }

    return new Response("Something went wrong", { status: 500 });
  }
}
