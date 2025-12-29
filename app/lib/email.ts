import nodemailer from 'nodemailer';

interface InquiryNotificationData {
  name: string;
  phone: string;
  desiredLocation: string;
  createdAt: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendInquiryNotification(data: InquiryNotificationData): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const notificationEmail = process.env.NOTIFICATION_EMAIL;
  const smtpUser = process.env.SMTP_USER;

  if (!notificationEmail || !smtpUser) {
    console.error('Email configuration missing');
    return { success: false, error: 'Email configuration missing' };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const formattedDate = new Date(data.createdAt).toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  const mailOptions = {
    from: `"아뜰랑 맨즈헤어" <${smtpUser}>`,
    to: notificationEmail,
    subject: `[신규 가맹문의] ${data.name}님의 문의가 접수되었습니다`,
    html: `
      <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #26D07C 0%, #1a9d5c 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">
                신규 가맹 문의
              </h1>
              <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 14px;">
                아뜰랑 맨즈헤어 프랜차이즈
              </p>
            </div>

            <!-- Content -->
            <div style="padding: 30px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333; width: 120px;">성함</td>
                  <td style="padding: 15px 0; border-bottom: 1px solid #eee; color: #555;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">연락처</td>
                  <td style="padding: 15px 0; border-bottom: 1px solid #eee; color: #555;">${data.phone}</td>
                </tr>
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">희망 지역</td>
                  <td style="padding: 15px 0; border-bottom: 1px solid #eee; color: #555;">${data.desiredLocation}</td>
                </tr>
                <tr>
                  <td style="padding: 15px 0; font-weight: 600; color: #333;">접수 시간</td>
                  <td style="padding: 15px 0; color: #555;">${formattedDate}</td>
                </tr>
              </table>

              <!-- CTA Button -->
              <div style="margin-top: 30px; text-align: center;">
                <a href="${siteUrl}/admin/dashboard/inquiries"
                   style="display: inline-block; background-color: #26D07C; color: #000; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 14px;">
                  관리자 페이지에서 확인하기
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eee;">
              <p style="margin: 0; color: #888; font-size: 12px;">
                본 메일은 아뜰랑 맨즈헤어 가맹 문의 시스템에서 자동 발송되었습니다.
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
