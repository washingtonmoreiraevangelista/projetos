// import { environment } from '../tools/axiosInstance'

// export const ApiService = {

//   async getAll(collection: string) {
//     try {
//       const response = await environment.get(`/collection/${collection}`)
//       return response.data
//     }
//     catch (error: any) {
//       throw new Error('Erro ao buscar os dados')
//     }
//   },

//   async post(collection: string, data: any) {
//     try {
//       const response = await environment.post(`/collection/${collection}`, data)
//       return response.data
//     } catch (error) {
//       throw new Error('Erro ao buscar os dados')
//     }
//   },

//   async update(collection: string, _id: string, data: any) {
//     try {
//       const response = await environment.put(`/collection/${collection}/${_id}`, data)
//       return response.data
//     } catch (error) {
//       throw new Error('Erro ao buscar os dados')
//     }
//   },

//   async delete(collection: string, id: string) {
//     try {
//       const response = await environment.delete(`/collection/${collection}/${id}`)
//       return response.data
//     } catch (error) {
//       throw new Error('Erro ao buscar os dados')
//     }
//   },

// }
