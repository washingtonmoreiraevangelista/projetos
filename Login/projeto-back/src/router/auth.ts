import { Router } from 'express'
import { deleteUser, login, register, updateUser } from '../controllers/authController'

export const authRouter = Router()

authRouter.post('/register', register)

authRouter.post('/login', login)

authRouter.put('/:id', updateUser)

authRouter.delete('/:id', deleteUser)

