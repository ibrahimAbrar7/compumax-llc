import { Resend } from "resend";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, subject, message } = await req.json();

    // Validate required environment variables
    if (!process.env.EMAIL_TO) {
      throw new Error("EMAIL_TO environment variable is not set");
    }
    if (!process.env.EMAIL_FROM) {
      throw new Error("EMAIL_FROM environment variable is not set");
    }

    const recipients = process.env.EMAIL_TO.split(",").map((email) => email.trim());

    // Build HTML email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #00194b;">📩 New Contact Form Submission — Compumax LLC</h2>
        <p>You’ve received a new message from your website contact form.</p>
        <hr style="border: none; border-top: 1px solid #ddd;" />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
        <hr style="border: none; border-top: 1px solid #ddd;" />
        <p style="font-size: 14px; color: #555;">
          This message was automatically sent from the Compumax LLC contact form.
        </p>
      </div>
    `;

    // Send email through Resend API
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: recipients,
      subject: `New Contact Form Submission — ${subject || "Compumax LLC"}`,
      html: emailContent,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return new Response(
        JSON.stringify({
          success: false,
          error: error.message || "An error occurred while sending the email.",
        }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "✅ Email sent successfully!",
        data,
      }),
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error sending email:", error.message);
      return new Response(
        JSON.stringify({
          success: false,
          error: error.message,
        }),
        { status: 500 }
      );
    }

    console.error("Unknown error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "An unexpected error occurred while sending the email.",
      }),
      { status: 500 }
    );
  }
}
