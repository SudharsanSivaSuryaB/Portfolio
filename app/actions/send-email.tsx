"use server"

import { Resend } from "resend"

const resend = new Resend("re_dNFDyV1a_8RsfZw1t9bc6XczSSdezjGWo")

export async function sendEmail(formData: FormData): Promise<{ success: boolean; error?: string }> {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  console.log("[v0] sendEmail called with:", { name, email, messageLength: message?.length })

  if (!name || !email || !message) {
    console.log("[v0] Validation failed: missing fields")
    return { success: false, error: "All fields are required" }
  }

  console.log("[v0] Sending contact form email", { name, email })

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "sudharsansivasurya19@gmail.com",
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #1e40af; margin-bottom: 5px; }
              .value { background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">New Contact Form Message</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone reached out through your portfolio</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">From:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${message}</div>
                </div>
                <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
                  Sent from your portfolio contact form at ${new Date().toLocaleString()}
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("[v0] Resend API error:", error)
      return { success: false, error: error.message }
    }

    console.log("[v0] Contact form email sent successfully", data)
    return { success: true }
  } catch (error) {
    console.error("[v0] Exception in sendEmail:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    }
  }
}
