import { Request, Response } from 'express'
import { service } from '../services/services'

export const getCollection = async (req: Request, res: Response) => {
  const { collectionName } = req.params

try {
  const data = await service.getCollection(collectionName)
  res.status(200).json(data)
} catch (error: any) {
  res.status(500).json({ message: error.message });

}

}
export const create = async (req: Request, res: Response) => {
  const { collectionName } = req.params
  const data = req.body

  try {
    const response = await service.create(collectionName, data)
    res.status(201).json({ message: "Dados adicionados com sucesso!", response })
  } catch (error: any) {
    res.status(500).json({ message: `Erro ao criar usuário: ${error.message}` })
  }
}

export const update = async (req: Request, res: Response) => {
  const { collectionName, _id } = req.params
  const data = req.body

  try {
    const response = await service.update(collectionName, _id, data)
    res.status(200).json({ message: "Dados atualizados com sucesso!", response })
  } catch (error: any) {
    res.status(500).json({ message: `Erro ao atualizar usuário: ${error.message}` })
  }
}

export const delet = async (req: Request, res: Response) => {
  const { collectionName, _id } = req.params

  try {
    const response = await service.delete(collectionName, _id)
    res.status(200).json({ message: "Dados removidos com sucesso!", response })
  } catch (error: any) {
    res.status(500).json({ message: `Erro ao deletar usuário: ${error.message}` })
  }
}
