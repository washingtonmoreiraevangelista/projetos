import { Router } from 'express'
import { resetPassword } from '../controllers/resetPassword.controller'
import { sendResetPasswordEmail } from '../services'

export const resetRouter = Router()

resetRouter.post("/forgot-password", sendResetPasswordEmail)
resetRouter.post("/reset-password", resetPassword)
