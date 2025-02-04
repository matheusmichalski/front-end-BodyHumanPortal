import api from '@/plugins/api'
import { validationError } from '@/validations/validationError'

export default class AuthService {
  static async login(email, password) {
    try {
      const { data } = await api.post('login', { email, password })
      return data
    } catch (error) {
      console.error('Erro no login:', error)
      validationError(error)
    }
  }

  static async loginWithGoogle(googleToken) {
    try {
      const { data } = await api.post('login', { googleToken })
      return data
    } catch (error) {
      console.error('Erro no login com Google:', error)
      validationError(error)
    }
  }
}
