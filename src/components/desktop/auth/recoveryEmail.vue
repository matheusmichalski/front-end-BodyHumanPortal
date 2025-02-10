<script setup>
import { ref } from 'vue'

const user = ref({
  name: 'Nicole FeMello',
  picture: '/user.jpeg',
  email: 'nicfmello@gmail.com',
  birthday: '27/01/2009',
  create: '30/01/2025',
})

const email = ref('');

const focusedEmail = ref(false)
const checkInputEmail = () => {
  if (!email.value) {
    focusedEmail.value = false
  }
}
</script>

<template>
  <section class="is-desktop">
    <div id="recovery">
      <img src="/logo.png" alt="Logo">
      <h1>Email para recuperação</h1>
      <p>Essa conta está vinculada ao email {{ user.email }}. Confirme o seu email no campo abaixo para receber um
        código de recuperação:</p>
      <div class="inputs">
        <label :class="{ active: focusedEmail || email }" for="email">Email</label>
        <input type="email" name="email" id="email" v-model="email" @focus="focusedEmail = true" @blur="checkInputEmail"
          required />
        <i class="fa-solid fa-envelope"></i>
      </div>
      <button>Enviar código</button>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 6.4vw;

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

    p {
      font-family: 'Tilt Neon';
      font-weight: 400;
      font-size: 1.25vw;
      color: #10293d;
      margin: 2vw 3.5vw 1.5vw 3.5vw;
    }

    .inputs {
      position: relative;
      margin: 3vw 0 2vw 0;

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

      i {
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
