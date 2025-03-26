import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export  const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.split(" ")[1]

  if(!token) {
    return res.status(401).json({ message: "Acesso negado, token ausente" })
  }

  try {
    const jwtSecret = process.env.JWT_SECRET
    if (!jwtSecret) {
      throw new Error("JWT_SECRET não definido")
    }

    const decod = jwt.verify(token,jwtSecret) as {id: string; email: string}
    req.user = decod
    next()

  } catch (error) {
    res.status(403).json({ message: "Token inválido" })
  }
}