import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    console.log("body:", body);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `<${process.env.SMTP_USER}>`,
      to: `${process.env.SMTP_USER}`,
      replyTo: email,
      subject: "New message received",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr />
        <p><strong>IP:</strong> ${request.headers.get("x-forwarded-for") || request.headers.get("remote-addr")}</p>
        <p><strong>User Agent:</strong> ${request.headers.get("user-agent")}</p>
        <p><strong>Referrer:</strong> ${request.headers.get("referer")}</p>
        <p><strong>Request URL:</strong> ${request.url}</p>
        <p><strong>Request Method:</strong> ${request.method}</p>
        <p><strong>Request Headers:</strong><pre>${JSON.stringify(Object.fromEntries(request.headers.entries()), null, 2)}</pre></p>
        <p><strong>Request Body:</strong><pre>${JSON.stringify(body, null, 2)}</pre></p>
        <p><strong>Request Time:</strong> ${new Date().toISOString()}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent:", info.messageId);

    return new Response(JSON.stringify({ message: "Message sent", info }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
