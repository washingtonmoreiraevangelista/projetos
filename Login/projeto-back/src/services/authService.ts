import bcrypt from "bcryptjs"
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

  // criptografar a senha do usuário 
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const newUser = { email, password: hashedPassword }
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

  const isMatch = await bcrypt.compare(password, user.password)
console.log("Senha fornecida:", password)  // Log a senha fornecida
console.log("Senha armazenada no banco:", user.password)  // Log a senha armazenada no banco

if (!isMatch) {
  throw new Error("Credenciais inválidas")
}
  if (!isMatch) {
    throw new Error("Credenciais inválidas")
  }

  return { message: "Login bem-sucedido", }
}
