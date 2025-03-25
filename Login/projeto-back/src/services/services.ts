import { ObjectId } from 'mongodb'
import { connectDB } from '../config/mongoClient'

export const service = {

  async getCollection(collectionName: string) {
    const response = await connectDB()
    return response.collection(collectionName).find().toArray()
  },

  async create(collectionName: string, data: any) {
    const db = await connectDB()
    return await db.collection(collectionName).insertOne(data)
  },

  async update(collectionName: string, id: string, data: any) {
    const db = await connectDB()
    return await db.collection(collectionName).updateOne(
      { _id: new ObjectId(id) },
      { $set: data }
    )
  },

  async delete(collectionName: string, id: string) {
    const db = await connectDB()
    return await db.collection(collectionName).deleteOne({ _id: new ObjectId(id) })
  }
}
