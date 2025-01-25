import nodemailer from 'nodemailer'

export async function POST (req) {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_RECEIVER) {
      return new Response(
        JSON.stringify({ error: 'Email environment variables are missing' }),
        { status: 500 }
      )
    }

    const body = await req.json()
    const { name, email, message } = body

    // Validasi input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Semua field wajib diisi' }),
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Format email tidak valid' }),
        { status: 400 }
      )
    }

    // Konfigurasi transporter Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Ganti dengan email di variabel lingkungan
        pass: process.env.EMAIL_PASS // Ganti dengan password aplikasi di variabel lingkungan
      }
    })

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER, // Email penerima
      subject: `Pesan Baru dari ${name}`,
      text: `Pesan Baru dari Email: ${email}\n\n${message}\n\n`,
      replyTo: email // Pastikan balasan diarahkan ke email pengguna
    }

    await transporter.sendMail(mailOptions)

    return new Response(JSON.stringify({ message: 'Email berhasil dikirim' }), {
      status: 200
    })
  } catch (error) {
    console.error('Error:', error)
    return new Response(JSON.stringify({ error: 'Gagal mengirim email' }), {
      status: 500
    })
  }
}
