import api from '@/plugins/api'
import { validationError } from '@/validations/validationError'

export default class AuthService {
  static async register(name, email, birthday, password, confirmPassword) {
    try {
      const data = await api.post('users', { name, email, birthday, password, confirmPassword })
      return data
    } catch (error) {
      console.error('Erro no login:', error)
      validationError(error)
    }
  }

  static async loginLocal(email, password) {
    try {
      const data = await api.post('login', { email, password })
      return data
    } catch (error) {
      console.error('Erro no login:', error)
      validationError(error)
    }
  }

  static async loginWithGoogle(googleToken) {
    try {
      const data = await api.post('login', { googleToken })
      return data
    } catch (error) {
      console.error('Erro no login com Google:', error)
      validationError(error)
    }
  }

  static async verifyTwoAuthCode(email, token) {
    try {
      if (!email) {
        throw new Error('Login não encontrado')
      }
      const data = await api.post(`/login/validateToken/${email}`, { token })
      console.log(data)
      return data
    } catch (error) {
      console.error('Erro na verificação do código de autenticação:', error)
      validationError(error)
    }
  }
}
