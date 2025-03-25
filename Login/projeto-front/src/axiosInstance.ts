import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_PROJETO_BACK,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})
export default axiosInstance
