import { Request, Response } from "express"
import bcrypt from "bcryptjs"
import { registerUser, loginUser } from "../services/authService"
import { service } from '../services/services'


export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body
    const result = await registerUser(email, password)
    res.status(201).json(result)
  } catch (error: any) {
    res.status(400).json({ message: error.message })
  }
}

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body
    const result = await loginUser(email, password)
    res.status(200).json(result)
  } catch (error: any) {
    res.status(401).json({ message: error.message })
  }
}
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const { email, password } = req.body


    // Buscar o usuário no banco de dados usando ObjectId
    const users = await service.getCollection("users")
    const user = users.find((user: any) => user._id.toString() === id)

    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado" })
      return
    }

    const updatedData: any = {}
    if (email) updatedData.email = email
    if (password) {
      const salt = await bcrypt.genSalt(10)
      updatedData.password = await bcrypt.hash(password, salt)
    }

    await service.update("users", id, updatedData)
    res.status(200).json({ message: "Usuário atualizado com sucesso" })
  } catch (error: any) {
    res.status(500).json({ message: `Erro no servidor: ${error.message}` })
  }
}

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params

    // Buscar o usuário no banco de dados usando ObjectId
    const users = await service.getCollection("users")
    const user = users.find((user: any) => user._id.toString() === id)

    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado" })
      return
    }

    await service.delete("users", id)
    res.status(200).json({ message: "Usuário excluído com sucesso" })
  } catch (error: any) {
    res.status(500).json({ message: `Erro no servidor: ${error.message}` })
  }
}

