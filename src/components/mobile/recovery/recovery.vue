<script setup>
import { ref } from 'vue'
import InputAuthBtn from '@/components/general/auth/InputAuthBtn.vue'
import InputAuthCodeBtn from '@/components/general/auth/InputAuthCodeBtn.vue'
import SubmitAuthBtn from '@/components/general/auth/SubmitAuthBtn.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useAuth } from '@/stores/authStore'

const props = defineProps({
  title: String,
  text: String,
  textAuthInput: String,
  typeAuthInput: {
    type: String,
    validator: (value) => ['email', 'text', 'code'].includes(value),
  },
  textSubmitBtn: String,
  typeAuthIcon: String,
})

const auth = useAuth()

const receivedCode = ref('')

const emit = defineEmits(['sendData'])

function handleSendCode(data) {
  receivedCode.value = data
  emit('sendData', receivedCode.value)
}

function handleFormSubmit() {
  if (!receivedCode.value) {
    console.error('Código não foi enviado ou está vazio.')
    return
  }
}
</script>

<template>
  <section class="is-mobile">
    <div class="texts">
      <img src="/public/logo.png" alt="logo" />
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
    </div>
    <form @submit.prevent="handleFormSubmit">
      <div v-if="typeAuthInput === 'code'" class="container">
        <InputAuthCodeBtn @sendCode="handleSendCode" />
      </div>
      <div v-else class="fillField">
        <InputAuthBtn :type="typeAuthInput" :text="textAuthInput" />
        <font-awesome-icon :icon="typeAuthIcon" class="Icon" style="color: #1663a3" />
      </div>
      <SubmitAuthBtn :text="textSubmitBtn" />
    </form>
  </section>
</template>

<style scoped>
.is-mobile {
  display: block;
  line-height: 1.2;
  text-align: center;
  font-size: 5vw;
  font-family: 'Tilt Neon', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans',
    Arial, sans-serif;
}

.texts {
  img {
    height: 20vw;
    width: auto;
    margin: 5vw 0;
  }
  h1 {
    color: #1663a3;
    font-size: max(10vw, 20px);
    font-weight: 500;
    font-family: 'Tilt Warp', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans',
      Arial, sans-serif;
  }
  p {
    color: #10293d;
    margin: 6vw 0;
    font-size: max(6vw, 15px);
  }
}

.fillField {
  display: flex;
  align-items: center;
  justify-content: center;
}

.Icon {
  margin-top: 3.5vw;
  padding-bottom: 1.2vw;
  border-bottom: #10293d solid 0.15vw;
}
</style>
