import { Router } from 'express'
import { deleteUser, login, register, updateUser } from '../controllers/authController'

export const authRouter = Router()

//  cadastra usuario 
authRouter.post('/register', register)

// Login
authRouter.post('/login', login)

//  Atualizar dados em qualquer coleção
authRouter.put('/:id', updateUser)

//  Deletar dados de qualquer coleção
authRouter.delete('/:id', deleteUser)

