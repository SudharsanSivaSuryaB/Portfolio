"use server"

import { Resend } from "resend"

const resend = new Resend("re_dNFDyV1a_8RsfZw1t9bc6XczSSdezjGWo")

export async function trackResumeDownload({
  name,
  company,
  website,
}: {
  name: string
  company: string
  website: string
}): Promise<{ success: boolean; error?: string }> {
  console.log("[v0] Tracking resume download", { name, company, website })

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Resume Tracker <onboarding@resend.dev>",
      to: "sudharsansivasurya19@gmail.com",
      subject: `Resume Downloaded by ${name} from ${company}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #059669; margin-bottom: 5px; }
              .value { background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; }
              .badge { display: inline-block; background: #d1fae5; color: #065f46; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">🎯 Resume Downloaded!</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone downloaded your resume</p>
              </div>
              <div class="content">
                <div style="margin-bottom: 20px;">
                  <span class="badge">NEW DOWNLOAD</span>
                </div>
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${company}</div>
                </div>
                <div class="field">
                  <div class="label">Website:</div>
                  <div class="value"><a href="${website}" style="color: #10b981; text-decoration: none;">${website}</a></div>
                </div>
                <div class="field">
                  <div class="label">Downloaded At:</div>
                  <div class="value">${new Date().toLocaleString()}</div>
                </div>
                <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
                  This notification was sent automatically when someone downloaded your resume from your portfolio website.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("[v0] Error sending resume download notification:", error)
      return { success: false, error: error.message }
    }

    console.log("[v0] Resume download notification sent successfully", data)
    return { success: true }
  } catch (error) {
    console.error("[v0] Error sending resume download notification:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send notification",
    }
  }
}
