import { Router } from 'express'
import { deleteUser, login, register, updateUser } from '../controllers/authController'
import { sendResetPasswordEmail } from '../services/ResetPasswordEmail'

export const authRouter = Router()

authRouter.post('/register', register)

authRouter.post('/login', login)

authRouter.put('/:id', updateUser)

authRouter.delete('/:id', deleteUser)



