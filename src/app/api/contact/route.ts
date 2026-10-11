import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// In-memory rate limiting map: IP -> timestamp array
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Clean up old rate limit entries every 15 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of rateLimitMap.entries()) {
    const valid = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);
    if (valid.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, valid);
    }
  }
}, 15 * 60 * 1000);

// Basic HTML sanitizer for text to avoid HTML injection in forwarded emails
function sanitizeText(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    // 1. IP extraction & Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "unknown-ip";

    const now = Date.now();
    const timestamps = rateLimitMap.get(ip) || [];
    const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);

    if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please wait a few minutes or reach out directly via WhatsApp.",
        },
        { status: 429 }
      );
    }

    recent.push(now);
    rateLimitMap.set(ip, recent);

    // 2. Body parsing
    const body = await request.json();
    const { firstName, lastName, email, phone, course, subject, message, honeypot } = body;

    // 3. Honeypot Anti-Spam Check
    if (honeypot) {
      // Silently pretend success for bots
      return NextResponse.json({ success: true, message: "Message received." });
    }

    // 4. Input validation
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill out all required fields (Name, Email, Message)." },
        { status: 400 }
      );
    }

    if (
      firstName.length > 100 ||
      (lastName && lastName.length > 100) ||
      email.length > 150 ||
      (phone && phone.length > 50) ||
      (subject && subject.length > 200) ||
      message.length > 4000
    ) {
      return NextResponse.json(
        { success: false, error: "Input exceeds allowed character limits." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 5. Sanitize inputs
    const cleanFirst = sanitizeText(firstName);
    const cleanLast = lastName ? sanitizeText(lastName) : "";
    const cleanEmail = sanitizeText(email);
    const cleanPhone = phone ? sanitizeText(phone) : "Not provided";
    const cleanCourse = course ? sanitizeText(course) : "General Inquiry";
    const cleanSubject = subject ? sanitizeText(subject) : "New Inquiry";
    const cleanMessage = sanitizeText(message);

    const recipient = process.env.CONTACT_RECEIVER_EMAIL || "quranfolderequran@gmail.com";
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);

    // 6. Send Email if SMTP is configured
    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"${cleanFirst} ${cleanLast}" <${smtpUser}>`,
        replyTo: email,
        to: recipient,
        subject: `[Islamic Session Inquiry] ${cleanSubject}`,
        text: `New Inquiry from Islamic Session:\n\nName: ${cleanFirst} ${cleanLast}\nEmail: ${email}\nPhone: ${cleanPhone}\nCourse: ${cleanCourse}\nSubject: ${cleanSubject}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E6A656; border-radius: 12px; overflow: hidden; background: #160E14; color: #FAF6F0;">
            <div style="background-color: #0B070A; border-bottom: 2px solid #E6A656; padding: 24px; text-align: center;">
              <h2 style="margin: 0; color: #F7CA8B; font-family: Georgia, serif; font-size: 22px;">Islamic Session</h2>
              <p style="margin: 6px 0 0 0; color: #C7B8BA; font-size: 13px;">Al-Andalus Alhambra Online Quran Academy</p>
            </div>
            <div style="padding: 24px; background-color: #160E14; line-height: 1.6;">
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #F7CA8B;">Name:</td>
                  <td style="padding: 8px 0; color: #FAF6F0;">${cleanFirst} ${cleanLast}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #F7CA8B;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${cleanEmail}" style="color: #F7CA8B;">${cleanEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #F7CA8B;">Phone / WA:</td>
                  <td style="padding: 8px 0; color: #FAF6F0;">${cleanPhone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #F7CA8B;">Course:</td>
                  <td style="padding: 8px 0; color: #FAF6F0;">${cleanCourse}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #F7CA8B;">Subject:</td>
                  <td style="padding: 8px 0; color: #FAF6F0;">${cleanSubject}</td>
                </tr>
              </table>
              <div style="background-color: #0B070A; border-left: 4px solid #E6A656; padding: 16px; border-radius: 6px;">
                <p style="margin: 0 0 8px 0; font-weight: bold; color: #F7CA8B;">Message / Details:</p>
                <p style="margin: 0; color: #FAF6F0; white-space: pre-wrap;">${cleanMessage}</p>
              </div>
            </div>
            <div style="background-color: #0B070A; color: #C7B8BA; padding: 12px; text-align: center; font-size: 12px; border-top: 1px solid rgba(230,166,86,0.2);">
              Sent via quranfolder.com automated secure contact handler
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log(`[Contact Form] Secure email sent from ${email} to ${recipient}`);
    } else {
      console.log("--------------------------------------------------");
      console.log("[Contact Form Received - SMTP credentials not set in .env.local yet]");
      console.log(`From: ${cleanFirst} ${cleanLast} <${cleanEmail}>`);
      console.log(`Phone: ${cleanPhone}`);
      console.log(`Course: ${cleanCourse}`);
      console.log(`Subject: ${cleanSubject}`);
      console.log(`Message: ${cleanMessage}`);
      console.log("To configure live SMTP delivery, see human-job.md");
      console.log("--------------------------------------------------");
    }

    return NextResponse.json({
      success: true,
      message: "Message received successfully. JazakAllah Khair!",
    });
  } catch (error: unknown) {
    const err = error as Error;
    console.error("[Contact API Error]:", err.message);
    return NextResponse.json(
      {
        success: false,
        error: "An internal server error occurred. Please contact us via WhatsApp directly.",
      },
      { status: 500 }
    );
  }
}
