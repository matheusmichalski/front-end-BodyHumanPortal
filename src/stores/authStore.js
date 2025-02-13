import { defineStore } from 'pinia'
import AuthService from '@/services/AuthService'
import { reactive, ref } from 'vue'
import { useValidationStore } from './validationStore'

const statusCode = {
  Success: 'Success',
  Error: 'Error',
}

export const useAuth = defineStore('user', () => {
  const user = reactive({
    name: null,
    birthday: null,
    email: null,
    authMethod: null,
    profilePicture: null,
    googleSub: null,
  })
  const isLogged = ref(false)
  const loading = reactive({
    status: null,
    activated: false,
  })
  const validationStore = useValidationStore()

  async function register(name, email, birthday, password, confirmPassword) {
    loading.activated = true
    try {
      const { day, mouth, year } = birthday
      console.log(day, mouth, year)
      const finalBirthday = new Date(
        `${year}-${String(mouth).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
      ).toISOString()

      const response = await AuthService.register(
        name,
        email,
        finalBirthday,
        password,
        confirmPassword,
      )
      validationStore.setSuccessMessage(response.data.message)
      loading.status = statusCode.Success
    } catch (error) {
      validationStore.setErrorMessage(error.message)
      loading.status = statusCode.Error
    }
  }

  async function loginWithGoogle(token) {
    loading.activated = true
    try {
      const response = await AuthService.loginWithGoogle(token)
      console.log(response)
      if (response.data.data.token) {
        localStorage.setItem('auth_token', response.data.data.token)
        isLogged.value = true
        validationStore.setSuccessMessage(response.data.message)
        loading.status = statusCode.Success
      }
    } catch (error) {
      validationStore.setErrorMessage(error.message)
      loading.status = statusCode.Error
    } finally {
      loading.activated = false
    }
  }

  async function loginLocal(userEmail, password) {
    loading.activated = true
    try {
      const response = await AuthService.loginLocal(userEmail, password)
      console.log(response)
      if (response.data.status === statusCode.Success) {
        localStorage.setItem('user_id', response.data.data.user.id)
        localStorage.setItem('user_email', response.data.data.user.email)
        validationStore.setSuccessMessage(response.data.message)
        loading.status = statusCode.Success
        console.log(loading.status)
      }
    } catch (error) {
      validationStore.setErrorMessage(error.message)
      loading.status = statusCode.Error
    } finally {
      loading.activated = true
    }
  }

  async function verifyTwoAuthToken(code) {
    loading.activated = true
    const email = localStorage.getItem('user_email')
    console.log(email)
    try {
      console.log(code)
      const response = await AuthService.verifyTwoAuthCode(email, code)
      if (response.data.status === statusCode.Success) {
        localStorage.setItem('auth_token', response.data.data.token)
        localStorage.removeItem('user_id')
        localStorage.removeItem('user_email')
        isLogged.value = true

        user

        validationStore.setSuccessMessage(response.data.message)
        loading.status = statusCode.Success
      }
    } catch (error) {
      validationStore.setErrorMessage(error.message)
      loading.status = statusCode.Error
    }
  }

  return {
    user,
    isLogged,
    loading,

    register,
    loginLocal,
    loginWithGoogle,
    verifyTwoAuthToken,
  }
})
