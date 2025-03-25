import { MongoClient, Db } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const mongoURI = process.env.MONGO_URI

if (!mongoURI) {
  throw new Error("Erro: MONGO_URI não está definido no .env")
}

const client = new MongoClient(mongoURI, {
  connectTimeoutMS: 50000,
  serverSelectionTimeoutMS: 50000,
})


let dbInstance: Db | null = null

export const connectDB = async (): Promise<Db> => {
  if (!dbInstance) {
    try {
      console.log("Tentando conectar ao MongoDB...")
      await client.connect()
      dbInstance = client.db('Meu_banco')  // Verifique o nome do banco
      console.log("Conectado ao MongoDB!")
    } catch (error) {
      console.error(" Erro ao conectar ao MongoDB:", error)
      process.exit(1)  // Finaliza o processo se não conectar
    }
  }
  return dbInstance
}
