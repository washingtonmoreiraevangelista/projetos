import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"
import { User } from '../model/schema'

export const sendResetPasswordEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: "1h" })

    const resetLink = `http://localhost:3000/reset-password/${token}`

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Redefinição de Senha",
      text: `Clique no link para redefinir sua senha: ${resetLink}`,
    })

    return res.status(200).json({ message: "E-mail enviado com sucesso" })
  } catch (error) {
    return res.status(500).json({ message: "Erro ao enviar e-mail" })
  }
}
