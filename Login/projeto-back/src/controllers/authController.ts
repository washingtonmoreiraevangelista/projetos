import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '../model/schema'

export const Login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      res.status(400).json({ message: 'E-mail e senha são obrigatórios' })
      return
    }

    console.log('🔍 Buscando usuário no banco:', email)

    // Tente buscar o usuário no MongoDB
    const user = await User.findOne({ email })

    if (!user) {
      console.log('⚠️ Usuário não encontrado:', email)
      res.status(401).json({ message: 'Credenciais inválidas' })
      return
    }

    console.log('Usuário encontrado:', user)

    // Verifica se a senha está correta
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      console.log(' Senha inválida para:', email)
      res.status(401).json({ message: 'Credenciais inválidas' })
      return
    }

    const jwtSecret = process.env.JWT_SECRET
    if (!jwtSecret) {
      console.error(' JWT_SECRET não está definido nas variáveis de ambiente')
      throw new Error('JWT_SECRET não está definido')
    }

    // Gerar token JWT
    const token = jwt.sign({ id: user._id, email: user.email }, jwtSecret, {
      expiresIn: '1h',
    })

    console.log('🔑 Token gerado:', token)

    res.status(200).json({ message: 'Login bem-sucedido', token })
  } catch (error:any) {
    console.error(' Erro no login:', error)
    res.status(500).json({ message: `Erro interno no servidor: ${error.message}` })
  }
}
