<script setup>
import { ref } from 'vue'
import GoogleLoginBtn from './GoogleLoginBtn.vue';

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const focusedName = ref(false)
const focusedEmail = ref(false)
const focusedPassword = ref(false)
const focusedConfirmPassword = ref(false)

const checkInputName = () => {
  if (!name.value) {
    focusedName.value = false
  }
}

const checkInputEmail = () => {
  if (!email.value) {
    focusedEmail.value = false
  }
}

const checkInputPassword = () => {
  if (!password.value) {
    focusedPassword.value = false
  }
}
const checkInputConfirmPassword = () => {
  if (!confirmPassword.value) {
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
    <div id="register">
      <img src="/logo.png" alt="Logo">
      <h1>Cadastro</h1>

      <div class="inputs">
        <label :class="{ active: focusedName || name }" for="name">Seu nome</label>
        <input type="text" name="name" id="name" v-model="name" @focus="focusedName = true" @blur="checkInputName"
          required />
        <i class="fa-solid fa-user"></i>
      </div>

      <div class="inputs">
        <label :class="{ active: focusedEmail || email }" for="email">Email</label>
        <input type="email" name="email" id="email" v-model="email" @focus="focusedEmail = true" @blur="checkInputEmail"
          required />
        <i class="fa-solid fa-envelope"></i>
      </div>

      <div id="date-born">
        <h2>Data de nascimento</h2>
        <div>
          <input type="number" placeholder="Dia" required min="1" max="31" id="day">
          <select>
            <option value="01">Janeiro</option>
            <option value="02">Fevereiro</option>
            <option value="03">Março</option>
            <option value="04">Abril</option>
            <option value="05">Maio</option>
            <option value="06">Junho</option>
            <option value="07">Julho</option>
            <option value="08">Agosto</option>
            <option value="09">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select>
          <input type="number" placeholder="Ano" required min="1920" max="2025" id="year">
        </div>
      </div>

      <div class="inputs">
        <label :class="{ active: focusedPassword || password }" for="password">Senha</label>
        <input type="password" name="password" id="password" v-model="password" @focus="focusedPassword = true"
          @blur="checkInputPassword" required />
        <i :class="showPassword.new ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'" @click="togglePassword('password')"></i>
      </div>

      <div class="inputs">
        <label :class="{ active: focusedConfirmPassword || confirmPassword }" for="confirmPassword">Confirme a sua
          senha</label>
        <input type="password" name="confirmPassword" id="confirmPassword" v-model="confirmPassword"
          @focus="focusedConfirmPassword = true" @blur="checkInputConfirmPassword" required />
        <i :class="showPassword.confirm ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
          @click="togglePassword('confirmPassword')"></i>
      </div>
      <GoogleLoginBtn />
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;

  #register {
    width: 41.667vw;
    padding: 3vw 4vw 2vw 4vw;
    border-radius: 100px;
    border: 1px solid #00000040;
    text-align: center;

    img {
      width: 20vw;
    }

    h1 {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 3.333vw;
      color: #1663A3;
      margin: 3vw 0 2vw 0;
    }

    .inputs {
      position: relative;
      margin: 3vw 0 2vw 0;

      label {
        font-family: 'Tilt Neon';
        font-weight: 400;
        font-size: 1.25vw;
        margin: 1vw 0 0.104vw 0;
        position: absolute;
        transform: translateY(-1vw);
        color: #10293d50;
        transition: all 0.3s ease-in-out;
        pointer-events: none;
        z-index: 1;

        &.active {
          top: -2vw;
          font-size: 0.75vw;
          color: #10293d;
          padding: 0 0.5vw;
        }
      }

      input {
        width: 90%;
        padding: 0.417vw 1.875vw 0.417vw 0.417vw;
        font-size: 1.25vw;
        border: none;
        border-bottom: #10293D solid 1px;
        outline: none;
      }

      i {
        margin-left: -2vw;
        color: #1663A3;
        font-size: 1.2vw;
      }
    }

    #date-born {
      h2 {
        font-family: 'Tilt Neon';
        font-weight: 400;
        font-size: 1.25vw;
        color: #10293D;
      }

      div {
        display: flex;
        justify-content: center;

        input {
          font-family: 'Tilt Neon';
          font-weight: 400;
          font-size: 1.25vw;
          color: #10293d50;
          width: 15%;
          padding: 0.417vw 0 0.417vw 0.817vw;
          border-radius: 10px;
          border: 2px solid #A7E6EB;
          outline: none;
          margin: 2vw 1vw 1vw 1vw;
        }

        select {
          font-family: 'Tilt Neon';
          font-weight: 400;
          font-size: 1.25vw;
          color: #10293d50;
          width: 20%;
          padding: 0.417vw 0 0.417vw 0.817vw;
          outline: none;
          margin: 2vw 1vw 1vw 1vw;
          border-radius: 10px;
          border: 2px solid #54B3CB;
          background-color: transparent;
        }

        #year {
          border: 2px solid #007FAA;
        }
      }
    }
  }
}
</style>
