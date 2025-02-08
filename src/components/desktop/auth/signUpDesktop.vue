<script setup>
import { ref } from 'vue'
import GoogleLoginBtn from './GoogleLoginBtn.vue'

const user = ref({
  name: '',
  email: '',
  birthday: [
    {
      day: 0,
      mounth: '',
      year: 0,
    },
  ],
  password: '',
  confirmPassword: '',
})

const focusedName = ref(false)
const focusedEmail = ref(false)
const focusedPassword = ref(false)
const focusedConfirmPassword = ref(false)

const checkInputName = () => {
  if (!user.value.name) {
    focusedName.value = false
  }
}

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
    <div id="register">
      <img src="/logo.png" alt="Logo" />
      <h1>Cadastro</h1>

      <div class="inputs">
        <label :class="{ active: focusedName || user.name }" for="name">Seu nome</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="user.name"
          @focus="focusedName = true"
          @blur="checkInputName"
          required
        />
        <i class="fa-solid fa-user"></i>
      </div>

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

      <div id="date-born">
        <h2>Data de nascimento</h2>
        <div>
          <input
            type="number"
            placeholder="Dia"
            required
            min="1"
            max="31"
            id="day"
            v-model="user.birthday[0].day"
          />
          <select v-model="user.birthday[0].mounth">
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
          <input
            type="number"
            placeholder="Ano"
            required
            min="1920"
            max="2025"
            id="year"
            v-model="user.birthday[0].year"
          />
        </div>
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

      <div class="inputs">
        <label
          :class="{ active: focusedConfirmPassword || user.confirmPassword }"
          for="confirmPassword"
          >Confirme a sua senha</label
        >
        <input
          :type="showPassword.confirm ? 'text' : 'password'"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          v-model="user.confirmPassword"
          @focus="focusedConfirmPassword = true"
          @blur="checkInputConfirmPassword"
          required
        />
        <i
          :class="showPassword.confirm ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
          @click="togglePassword('confirm')"
        ></i>
      </div>

      <button>ENTRAR</button>
      <p><span>ou</span></p>
      <GoogleLoginBtn />
      <p>Já tem uma conta? <RouterLink to="/auth/login">Faça o login</RouterLink></p>
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

    #date-born {
      h2 {
        font-family: 'Tilt Neon';
        font-weight: 400;
        font-size: 1.25vw;
        color: #10293d;
      }

      div {
        display: flex;
        justify-content: center;

        input {
          font-family: 'Tilt Neon';
          font-weight: 400;
          font-size: 1.25vw;
          color: #10293d;
          width: 15%;
          padding: 0.417vw 0 0.417vw 0.817vw;
          border-radius: 10px;
          border: 2px solid #a7e6eb;
          outline: none;
          margin: 1vw 1vw 0 1vw;
        }

        select {
          font-family: 'Tilt Neon';
          font-weight: 400;
          font-size: 1.25vw;
          color: #10293d;
          width: 20%;
          padding: 0.417vw 0 0.417vw 0.817vw;
          outline: none;
          margin: 1vw 1vw 0 1vw;
          border-radius: 10px;
          border: 2px solid #54b3cb;
          background-color: transparent;
        }

        #year {
          border: 2px solid #007faa;
        }
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
