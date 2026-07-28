import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.RESEND_TO_EMAIL ?? "longnhatminh.info@gmail.com";

export async function POST(req: Request) {
  try {
    const { name, phone, email, service, message } = await req.json();

    // Validation cơ bản
    if (!name || !phone) {
      return NextResponse.json({ error: "Thiếu thông tin bắt buộc" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Long Nhật Minh Website <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject: `[Yêu cầu tư vấn] ${name} — ${service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
          <div style="background: #142566; padding: 24px 32px;">
            <h2 style="color: #fde685; margin: 0; font-size: 20px;">Yêu cầu tư vấn mới</h2>
            <p style="color: #bcd3ff; margin: 6px 0 0; font-size: 13px;">Từ website longnhatminh.com.vn</p>
          </div>
          <div style="padding: 32px; background: #fff;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 10px 0; color: #6b7280; width: 140px; vertical-align: top;">Họ và tên</td>
                <td style="padding: 10px 0; color: #111827; font-weight: 600;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Số điện thoại</td>
                <td style="padding: 10px 0; color: #111827; font-weight: 600;">${phone}</td>
              </tr>
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; color: #111827;">${email || "—"}</td>
              </tr>
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Dịch vụ</td>
                <td style="padding: 10px 0; color: #1f52ef; font-weight: 600;">${service}</td>
              </tr>
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Nội dung</td>
                <td style="padding: 10px 0; color: #111827;">${message || "—"}</td>
              </tr>
            </table>
          </div>
          <div style="background: #f9fafb; padding: 16px 32px; font-size: 12px; color: #9ca3af;">
            Email này được gửi tự động từ form liên hệ trên website.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Gửi email thất bại" }, { status: 500 });
  }
}
