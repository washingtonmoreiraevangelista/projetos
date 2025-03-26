import mongoose, { Schema, Document } from "mongoose"
import bcrypt from "bcryptjs"

export interface IUserModel extends Document {
  email: string
  password: string
  comparePassword(candidatePassword: string): Promise<boolean>
}

const userSchema = new Schema<IUserModel>(
  {
    email: {
      type: String,
      required: [true, "Email é obrigatório"],
      unique: true,  
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "A senha deve ter pelo menos 6 caracteres"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export const User = mongoose.model<IUserModel>("users", userSchema)
