import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json()

  // Configura el transporte SMTP (puedes usar Gmail, Outlook, etc.)
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: `"Formulario FUNMECO" <${process.env.EMAIL_USER}>`,
    replyTo: email, // 👈 esto hace que al responder, vaya al usuario
    to: process.env.EMAIL_USER, // correo de los dueños del sitio
    subject: `📩 Nuevo mensaje de contacto de ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f7f9fb; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
          <h2 style="color: #0d6efd; text-align: center;">Nuevo Mensaje de Contacto</h2>
          <p style="font-size: 16px; color: #333;">Has recibido un nuevo mensaje desde el formulario de contacto de <strong>FUNMECO</strong>.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">👤 Nombre:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">📧 Correo Electrónico:</td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">📞 Teléfono:</td>
              <td style="padding: 8px 0;">${phone || "No proporcionado"}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 16px; color: #333; margin-bottom: 10px;"><strong>📝 Mensaje:</strong></p>
          <blockquote style="background-color: #f1f3f5; padding: 15px; border-left: 4px solid #0d6efd; color: #555; border-radius: 4px;">
            ${message}
          </blockquote>
          <p style="font-size: 13px; color: #777; text-align: center; margin-top: 30px;">
            Este mensaje fue enviado automáticamente desde el formulario de contacto de FUNMECO.
          </p>
        </div>
      </div>
    `,
    text: `
  Nuevo mensaje de contacto de ${name}

  Correo: ${email}
  Teléfono: ${phone || "No proporcionado"}

  Mensaje:
  ${message}
    `,
  };


  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error enviando correo:", error)
    return NextResponse.json({ success: false, error })
  }
}
