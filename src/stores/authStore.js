import { defineStore } from 'pinia'
import AuthService from '@/services/AuthService'
import { ref } from 'vue'

export const useAuth = defineStore('user', () => {
  const user = ref(null)
  const isLogged = ref(false)
  const authMethod = ref(null)
  const loading = ref(false)

  async function loginWithGoogle(token) {
    loading.value = true
    try {
      const response = await AuthService.loginWithGoogle(token)
      if (response.data.token) {
        console.log(response)
        localStorage.setItem('auth_token', response.data.token)
        isLogged.value = true
      } else {
        localStorage.setItem('user_id', response.data.user.id)
        localStorage.setItem('user_email', response.data.user.email)
      }
      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  }

  return {
    user,
    isLogged,
    authMethod,

    loginWithGoogle,
  }
})
