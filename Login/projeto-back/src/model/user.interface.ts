import { Document } from 'mongoose'

// Interface do usuário (define os atributos)
export interface IUser extends Document {
  email: string
  password: string
}

export interface IUserModel extends IUser {
  comparePassword(candidatePassword: string): Promise<boolean>
}
