import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  normalizePhone,
  type ContactFormData,
  validateContactForm,
} from "@/lib/contactValidation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactFormData>;
    const formData: ContactFormData = {
      name: body.name ?? "",
      email: body.email ?? "",
      countryCode: body.countryCode ?? "",
      phone: body.phone ?? "",
      message: body.message ?? "",
    };

    const fieldErrors = validateContactForm(formData);
    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        {
          error: "Validation failed.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const phoneWithCode = `${formData.countryCode} ${normalizePhone(formData.phone)}`;

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["suryajaya4899@gmail.com"],
      subject: `New message from ${formData.name}`,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${phoneWithCode}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });

  } catch {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
