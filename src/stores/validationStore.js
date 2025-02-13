import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useValidationStore = defineStore('error', () => {
  const errorMessage = ref('')
  const sucessMessage = ref('')

  const setErrorMessage = (message) => {
    errorMessage.value = message
  }

  const setSuccessMessage = (message) => {
    sucessMessage.value = message
  }

  return {
    errorMessage,
    sucessMessage,

    setErrorMessage,
    setSuccessMessage,
  }
})
