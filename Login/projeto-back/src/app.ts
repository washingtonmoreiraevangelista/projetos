import express, { Router } from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config/mongoClient"
import { router } from './router/userRouter'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

connectDB()
  .then(() => {
    app.use(express.json())
    app.use(cors())

    // Usar as rotas dinâmicas
    app.use("/", router)

    app.get("/api", (req, res) => {
      res.send(`API rodando na porta ${PORT}`)
    })
 
    // Iniciar servidor após conexão com o banco
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`)
    })
  })
  .catch((error:any) => {
    console.error("Erro ao conectar ao banco de dados:", error)
    process.exit(1)
  })
