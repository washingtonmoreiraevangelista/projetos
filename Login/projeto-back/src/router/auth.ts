import { Router } from 'express'
import { deleteUser, login, register, updateUser } from '../controllers/auth.Controller'

export const authRouter = Router()

authRouter.post('/auth/register', register)

authRouter.post('/auth/login', login)

authRouter.put('/auth/:id', updateUser)

authRouter.delete('/auth/:id', deleteUser)



