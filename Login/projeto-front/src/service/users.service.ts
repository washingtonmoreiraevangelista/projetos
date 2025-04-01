import { environment } from '../tools/axiosInstance'

export const authService = {
  // Registrar um novo usuário
  async register(data: any) {
    return await environment('/register', 'POST', data)
  },

  // Login de usuário
  async login(data: any) {
    return await environment('/auth/login', 'POST', data)
  },

  // Atualizar usuário
  async updateUser(id: string, data: any) {
    return await environment(`/users/${id}`, 'PUT', data)
  },

  // Deletar usuário
  async deleteUser(id: string) {
    return await environment(`/users/${id}`, 'DELETE')
  },
}
