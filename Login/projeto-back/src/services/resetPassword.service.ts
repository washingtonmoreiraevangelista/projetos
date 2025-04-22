import { ObjectId } from "mongodb"
import jwt from "jsonwebtoken"
import { connectDB } from '../config/mongoClient'

export const resetPasswordService = async (token: string, newPassword: string) => {
  if (!token || !newPassword) {
    throw new Error("Token e nova senha são obrigatórios.")
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!)
    const userId = decoded.id

    const db = await connectDB()
    const usersCollection = db.collection("users")

    const user = await usersCollection.findOne({ _id: new ObjectId(userId) })
    if (!user) {
      throw new Error("Usuário não encontrado.")
    }

    await usersCollection.updateOne(
      { _id: new ObjectId(userId) },
      { $set: { password: newPassword } }
    )

    return { message: "Senha redefinida com sucesso." }

  } catch (err: any) {
    console.error("Erro no resetPasswordService:", err)
    throw new Error("Token inválido ou expirado.")
  }
}
