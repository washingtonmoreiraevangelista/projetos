import { Request, Response } from "express"
import { resetPasswordService } from "../services/resetPassword.service"

export const sendResetPassword = async (req: Request, res: Response) => {
  const { token, password } = req.body

  try {
    const result = await resetPasswordService(token, password)
    res.status(200).json(result)
  } catch (err: any) {
    console.error("Erro ao redefinir senha:", err)
    res.status(400).json({ message: err.message })
  }
}
