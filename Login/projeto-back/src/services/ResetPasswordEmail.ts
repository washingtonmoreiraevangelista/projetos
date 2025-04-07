import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import { User } from '../model/schema'
import { Resend } from 'resend'


const resend = new Resend(process.env.RESEND_API_KEY)

export const sendResetPasswordEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado" })
      return
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: "1h" })

    const resetLink = `http://localhost:3000/reset-password/${token}`

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Redefinição de Senha',
      html: `<p>Olá,</p>
             <p>Para redefinir sua senha, clique no link abaixo:</p>
             <p><a href="${resetLink}">Redefinir Senha</a></p>
             <p>Este link expira em 1 hora.</p>`
    })

    res.status(200).json({ message: "E-mail enviado com sucesso" })
  } catch (error) {
    res.status(500).json({ message: "Erro ao enviar e-mail" })
  }
}