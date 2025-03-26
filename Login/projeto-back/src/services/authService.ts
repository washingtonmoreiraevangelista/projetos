import jwt from "jsonwebtoken"
import { service } from './services'


export const registerUser = async (email: string, password: string) => {

  if (!email || !password) {
    throw new Error("E-mail e senha são obrigatórios")
  }

  const users = await service.getCollection('users')

  const existingUser = users.find((user: any) => user.email === email)

  if (existingUser) {
    throw new Error("Usuário já cadastrado")
  }

  const newUser = { email, password }
  await service.create("users", newUser)

  return { message: "Usuário criado com sucesso" }
}

export const loginUser = async (email: string, password: string) => {
  if (!email || !password) {
    throw new Error("E-mail e senha são obrigatórios")
  }

  const users = await service.getCollection("users")
  const user = users.find((user: any) => user.email === email)

  if (!user) {
    throw new Error("Usuario não exite!")
  }

  if (user.password !== password) {
    throw new Error("Credenciais inválidas")
  }

    // Criar o token JWT
    const jwtSecret = process.env.JWT_SECRET
    if (!jwtSecret) {
      throw new Error("JWT_SECRET não definido")
    }

    const token = jwt.sign(
      { id: user._id, email: user.email},
      jwtSecret,
      { expiresIn: "90s" } 
    )

  return { message: "Login bem-sucedido", token }
}
