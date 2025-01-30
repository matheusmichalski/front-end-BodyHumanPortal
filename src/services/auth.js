import api from '@/plugins/api'

export default class AuthService {
  async login(email, password) {
    try {
      const { data } = api.post('login', { email, password })
      return data
    } catch (error) {
      console.error(error)
    }
  }
  async loginWithGoogle(token) {
    try {
      const { data } = api.post('login', { token })
      return data
    } catch (error) {
      console.error(error)
    }
  }
}
