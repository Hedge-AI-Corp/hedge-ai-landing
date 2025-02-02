// app/api/send-general-inquiry/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, company, email, phone, inquiryType, message } = body

    const { data: emailResponse } = await resend.emails.send({
      from: 'HedgeAI Contact <hedgeai@aydinjoshi.com>',
      to: ['aydin@aydinjoshi.com'],
      subject: `📫 New Inquiry: ${inquiryType} from ${firstName}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New General Inquiry</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f9fafb;
      color: #1f2937;
      line-height: 1.5;
    }
  </style>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background-color: #f9fafb; color: #1f2937; line-height: 1.5;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin: 0; padding: 0; width: 100%; background-color: #f9fafb;">
    <tr>
      <td align="center" style="padding: 24px;">
        <table class="container" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin: 0 auto; padding: 0; width: 100%; max-width: 600px;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 32px; border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="margin: 0; color: white; font-size: 24px; font-weight: 600;">New General Inquiry</h1>
              <p style="margin: 8px 0 0 0; color: #e5e7eb;">Type: ${inquiryType}</p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="background-color: white; padding: 32px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
              <!-- Contact Information -->
              <table width="100%" style="margin-bottom: 24px;">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 16px 0; color: #374151; font-size: 18px; font-weight: 600;">📇 Contact Information</h2>
                    <p style="margin: 0 0 8px 0;">
                      <strong style="color: #4b5563;">Name:</strong> ${firstName} ${lastName}
                    </p>
                    ${company ? `
                    <p style="margin: 0 0 8px 0;">
                      <strong style="color: #4b5563;">Company:</strong> ${company}
                    </p>
                    ` : ''}
                    <p style="margin: 0 0 8px 0;">
                      <strong style="color: #4b5563;">Email:</strong> 
                      <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                    </p>
                    ${phone ? `
                    <p style="margin: 0;">
                      <strong style="color: #4b5563;">Phone:</strong> ${phone}
                    </p>
                    ` : ''}
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <table width="100%" style="margin-bottom: 24px;">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 16px 0; color: #374151; font-size: 18px; font-weight: 600;">💬 Message</h2>
                    <div style="background-color: #f3f4f6; padding: 16px; border-radius: 4px;">
                      <p style="margin: 0; white-space: pre-wrap;">${message}</p>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Action Box -->
              <table width="100%" style="background-color: #f0f9ff; border-left: 4px solid #2563eb; padding: 16px; border-radius: 4px;">
                <tr>
                  <td style="text-align: center;">
                    <p style="margin: 0; color: #1e40af; font-size: 14px;">
                      Reply directly to this email to respond to ${firstName}.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px; text-align: center;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                © ${new Date().getFullYear()} HedgeAI. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    })

    return NextResponse.json({ success: true, data: emailResponse })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    )
  }
}