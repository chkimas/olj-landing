import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validated = contactFormSchema.parse(body);

    // If production, send email here using validated data
    // await sendEmail({ to: process.env.ADMIN_EMAIL, ...validated });

    return NextResponse.json({ ok: true, message: "Received" });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 },
    );
  }
}
