import { Router } from 'express'
import { delet, getCollection, update, create } from '../controllers/userController'
import { Login } from '../controllers/authController'

export const router = Router()

//  Buscar dados de qualquer coleção
router.get('/controller/:collectionName', getCollection)

//  Adicionar dados a qualquer coleção
router.post('/controller/:collectionName', create)

//  Atualizar dados em qualquer coleção
router.put('/controller/:collectionName/:id', update)

//  Deletar dados de qualquer coleção
router.delete('/controller/:collectionName/:id', delet)

// Rota de login
router.post('/auth/login', Login)
