import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import { IUserModel } from './user.interface';

// Definição do schema do usuário
const userSchema = new Schema<IUserModel>(
  {
    email: {
      type: String,
      required: [true, 'Email é obrigatório'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Email inválido'],
    },

    password: {
      type: String,
      required: true,
      minlength: [6, 'A senha deve ter pelo menos 6 caracteres'],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Antes de salvar, criptografa a senha
userSchema.pre<IUserModel>('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

//  comparar senhas
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

//  exportando o modelo User
export const User = mongoose.model<IUserModel>('User', userSchema);
