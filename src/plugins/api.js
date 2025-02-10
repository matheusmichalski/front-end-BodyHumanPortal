import axios from 'axios'

const api_url = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: api_url,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default api
