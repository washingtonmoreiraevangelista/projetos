import mongoose, { Schema, Document } from "mongoose"
import bcrypt from "bcryptjs"

export interface IUserModel extends Document {
  name: string
  email: string
  password: string
  birthDate: Date
  comparePassword(candidatePassword: string): Promise<boolean>
}

const userSchema = new Schema<IUserModel>(
  {
    name: {
      type: String,
      required: [true, "O nome é obrigatório"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "O email é obrigatório"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "A senha é obrigatória"],
      minlength: [6, "A senha deve ter pelo menos 6 caracteres"],
    },
    birthDate: {
      type: Date,
      required: [true, "A data de nascimento é obrigatória"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export const User = mongoose.model<IUserModel>("users", userSchema)
