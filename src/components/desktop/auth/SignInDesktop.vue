<script setup>
import { ref } from 'vue'
import GoogleLoginBtn from './GoogleLoginBtn.vue'

const user = ref({
  email: '',
  password: '',
})

const focusedEmail = ref(false)
const focusedPassword = ref(false)

const checkInputEmail = () => {
  if (!user.value.email) {
    focusedEmail.value = false
  }
}

const checkInputPassword = () => {
  if (!user.value.password) {
    focusedPassword.value = false
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
      <img src="/logo.png" alt="Logo" />
      <h1>Login</h1>

      <div class="inputs">
        <label :class="{ active: focusedEmail || user.email }" for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="user.email"
          @focus="focusedEmail = true"
          @blur="checkInputEmail"
          required
        />
        <i class="fa-solid fa-envelope"></i>
      </div>

      <div class="inputs">
        <label :class="{ active: focusedPassword || user.password }" for="password">Senha</label>
        <input
          :type="showPassword.new ? 'text' : 'password'"
          type="password"
          name="password"
          id="password"
          v-model="user.password"
          @focus="focusedPassword = true"
          @blur="checkInputPassword"
          required
        />
        <i
          :class="showPassword.new ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
          @click="togglePassword('new')"
        ></i>
      </div>
      <p>
        <RouterLink id="forget" to="/auth/recovery/password">Esqueceu a senha?</RouterLink>
      </p>

      <button>ENTRAR</button>
      <p><span>ou</span></p>
      <GoogleLoginBtn />
      <p>Não tem uma conta? <RouterLink to="/auth/cadastre-se">Cadastre-se</RouterLink></p>
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
    border-radius: 5.208vw;
    border: 1px solid #00000040;
    text-align: center;

    img {
      width: 20vw;
    }

    h1 {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 3.333vw;
      color: #1663a3;
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
      margin-top: 3vw;
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

    #forget {
      font-family: 'Tilt Neon';
      font-weight: 400;
      font-size: 1.042vw;
      color: #10293d;
      margin: -3vw 0 0 -30vw;
      text-align: left;
      text-decoration: none;
    }

    p {
      font-family: 'Tilt Neon';
      font-weight: 400;
      font-size: 1.042vw;
      color: #10293d;
      margin: 2vw 0 1.5vw 0;

      span {
        font-size: 1.25vw;
        color: #227cc3;
      }

      a {
        font-family: 'Tilt Warp';
        color: #227cc3;
      }
    }
  }
}
</style>
