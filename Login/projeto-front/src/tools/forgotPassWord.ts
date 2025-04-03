import { environment } from './axiosInstance'

export const forgotService = {
  forgotPassword: async (email: string) => {
    return environment("/forgot-password", "POST", { email })
  },
}
