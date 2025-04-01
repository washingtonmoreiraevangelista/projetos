import { environment } from '../tools/axiosInstance'

export const authService = {
  // Registrar um novo usuário
  async register(data: any) {
    try {
      const response = await environment('/auth/register', 'POST', data)
      return response
    } catch (error) {
      throw new Error('Erro ao registrar o usuário')
    }
  },

  // Login de usuário
  async login(data: any) {
    try {
      const response = await environment('/auth/login', 'POST', data)
      return response
    } catch (error) {
      throw new Error('Erro ao fazer login')
    }
  },

  // Atualizar usuário
  async updateUser(id: string, data: any) {
    try {
      const response = await environment(`/users/${id}`, 'PUT', data)
      return response
    } catch (error) {
      throw new Error('Erro ao atualizar o usuário')
    }
  },

  // Deletar usuário
  async deleteUser(id: string) {
    try {
      const response = await environment(`/users/${id}`, 'DELETE')
      return response
    } catch (error) {
      throw new Error('Erro ao deletar o usuário')
    }
  },
}
