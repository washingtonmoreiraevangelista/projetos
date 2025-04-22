import { Request, Response } from "express"
import { connectDB } from "../config/mongoClient"
import jwt from "jsonwebtoken"
import { Resend } from "resend"
import dotenv from "dotenv"

dotenv.config()

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendResetPasswordEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.body
    console.log("Email recebido:", email)

    const db = await connectDB()
    const user = await db.collection("users").findOne({ email })

    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado" })
      return
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: "1h" })
    const resetLink = `http://localhost:5173/reset-password/${token}`
    console.log("Link de redefinição:", resetLink)

    const emailResponse = await resend.emails.send({
      from: 'Meu App <onboarding@resend.dev>',
      to: email,
      subject: 'Redefinição de Senha',
      html: `<p>Olá,</p>
             <p>Para redefinir sua senha, clique no link abaixo:</p>
             <p><a href="${resetLink}">Redefinir Senha</a></p>
             <p>Este link expira em 1 hora.</p>`
    })

    console.log("Resposta do Resend:", emailResponse)

    res.status(200).json({ message: "E-mail enviado com sucesso" })

  } catch (error) {
    console.error("Erro ao enviar e-mail:", error)
    res.status(500).json({ message: "Erro ao enviar e-mail" })
  }
}

