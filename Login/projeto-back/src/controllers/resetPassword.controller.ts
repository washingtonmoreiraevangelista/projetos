import { Request, Response } from "express"
import { resetPasswordService } from '../services'
export const resetPassword = async (req: Request, res: Response) => {
  const { token, password } = req.body

  try {
    const result = await resetPasswordService(token, password)
    res.status(200).json(result)
  } catch (error: any) {
    res.status(400).json({ message: error.message })
  }
}
