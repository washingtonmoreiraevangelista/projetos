import axiosInstance from '../tools/axiosInstance'

export const ApiService = {

  async getAll(collection: string) {
    try {
      const response = await axiosInstance.get(`/collection/${collection}`)
      return response.data
    }
    catch (error: any) {
      throw new Error('Erro ao buscar os dados')
    }
  },

  async post(collection: string, data: any) {
    try {
      const response = await axiosInstance.post(`/collection/${collection}`, data)
      return response.data
    } catch (error) {
      throw new Error('Erro ao buscar os dados')
    }
  },

  async update(collection: string, _id: string, data: any) {
    try {
      const response = await axiosInstance.put(`/collection/${collection}/${_id}`, data)
      return response.data
    } catch (error) {
      throw new Error('Erro ao buscar os dados')
    }
  },

  async delete(collection: string, id: string) {
    try {
      const response = await axiosInstance.delete(`/collection/${collection}/${id}`)
      return response.data
    } catch (error) {
      throw new Error('Erro ao buscar os dados')
    }
  },

}
