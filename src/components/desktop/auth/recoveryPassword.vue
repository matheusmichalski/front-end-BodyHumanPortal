<script setup>
import { ref } from 'vue'

const user = ref({
  name: 'Nicole FeMello',
  picture: '/user.jpeg',
  email: 'nicfmello@gmail.com',
  birthday: '27/01/2009',
  create: '30/01/2025',
})

const focusedPassword = ref(false)
const focusedConfirmPassword = ref(false)

const checkInputPassword = () => {
  if (!user.value.password) {
    focusedPassword.value = false
  }
}
const checkInputConfirmPassword = () => {
  if (!user.value.confirmPassword) {
    focusedConfirmPassword.value = false
  }
}

const showPassword = ref({
  current: false,
  new: false,
  confirm: false,
  delete: false,
})

const togglePassword = (label) => {
  showPassword.value[label] = !showPassword.value[label]
}
</script>

<template>
  <section class="is-desktop">
    <div id="recovery">
      <img src="/logo.png" alt="Logo">
      <h1>Redefinir senha atual</h1>
      <div class="inputs">
        <label :class="{ active: focusedPassword || user.password }" for="password">Nova senha</label>
        <input :type="showPassword.new ? 'text' : 'password'" type="password" name="password" id="password"
          v-model="user.password" @focus="focusedPassword = true" @blur="checkInputPassword" required />
        <span :class="showPassword.new ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'" @click="togglePassword('new')"></span>
      </div>

      <div class="inputs">
        <label :class="{ active: focusedConfirmPassword || user.confirmPassword }" for="confirmPassword">Confirme a sua
          senha</label>
        <input :type="showPassword.confirm ? 'text' : 'password'" type="password" name="confirmPassword"
          id="confirmPassword" v-model="user.confirmPassword" @focus="focusedConfirmPassword = true"
          @blur="checkInputConfirmPassword" required />
        <span :class="showPassword.confirm ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
          @click="togglePassword('confirm')"></span>
      </div>
      <button>Redefinir</button>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 4.5vw;

  #recovery {
    width: 41.667vw;
    padding: 5vw 4vw 4vw 4vw;
    border-radius: 5.208vw;
    border: 1px solid #00000040;
    text-align: center;

    h1 {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 3.333vw;
      color: #1663a3;
      margin: 3vw 0 2vw 0;
    }

    .inputs {
      position: relative;
      margin: 4vw 0 2vw 0;

      label {
        font-family: 'Tilt Neon';
        font-weight: 400;
        position: absolute;
        left: 1.5vw;
        top: 4vw;
        transform: translateY(-3.3vw);
        font-size: 1.25vw;
        color: #10293d50;
        transition: all 0.3s ease-in-out;
        pointer-events: none;
        z-index: 1;

        &.active {
          left: 1vw;
          top: 2vw;
          font-size: 1.2vw;
          color: #10293d;
          padding: 0 0.5vw;
        }
      }

      input {
        width: 90%;
        padding: 0.417vw 1.875vw 0.417vw 0.417vw;
        font-size: 1.25vw;
        border: none;
        border-bottom: #10293d solid 1px;
        outline: none;
      }

     span {
        margin-left: -2vw;
        color: #1663a3;
        font-size: 1.5vw;
        cursor: pointer;
      }
    }

    button {
      width: 70%;
      margin-top: 1vw;
      padding: 1vw;
      border-radius: 100px;
      background: linear-gradient(45deg, #a7e6eb, #007faa);
      color: #ffffff;
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 1.667vw;
      line-height: 2.083vw;
      border: none;
      cursor: pointer;
    }

    button:hover {
      background: linear-gradient(45deg, #278ca8, #1f527c);
    }
  }
}
</style>
