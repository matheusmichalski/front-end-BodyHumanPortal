<script setup>
import { ref } from 'vue'
import FooterView from '../elements/FooterView.vue'

const user = ref({
  name: 'Nicole FeMello',
  picture: '/user.jpeg',
  email: 'nicfmello@gmail.com',
  birthday: '27/01/2009',
  create: '30/01/2025',
})

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
    <div>
      <h2>Segurança</h2>

      <div class="info">
        <h3>Atualizar email</h3>
        <p>Email atual: {{ user.email }}</p>
        <label>Email:
          <div>
            <input type="email" placeholder="Email" />
            <i class="fa-solid fa-envelope"></i>
          </div>
        </label>
      </div>
      <button>Atualizar email</button>

      <div class="info">
        <h3>Atualizar senha</h3>

        <label>Senha atual:
          <div>
            <input :type="showPassword.current ? 'text' : 'password'" placeholder="Senha atual" />
            <i :class="showPassword.current ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
              @click="togglePassword('current')"></i>
          </div>
        </label>

        <label>Nova senha:
          <div>
            <input :type="showPassword.new ? 'text' : 'password'" placeholder="Nova senha" />
            <i :class="showPassword.new ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
              @click="togglePassword('new')"></i>
          </div>
        </label>

        <label>Confirme a sua senha:
          <div>
            <input :type="showPassword.confirm ? 'text' : 'password'" placeholder="Confirme a sua senha" />
            <i :class="showPassword.confirm ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
              @click="togglePassword('confirm')"></i>
          </div>
        </label>
      </div>
      <button>Atualizar senha</button>

      <div class="info">
        <h3>Excluir conta</h3>
        <p><span>Esta ação é irreversível! Você realmente deseja excluir sua conta?</span></p>

        <label>Senha:
          <div>
            <input :type="showPassword.delete ? 'text' : 'password'" placeholder="Senha" />
            <i :class="showPassword.delete ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
              @click="togglePassword('delete')"></i>
          </div>
        </label>
      </div>
      <button id="delete">Excluir conta</button>

      <FooterView />
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: -3vw;
  display: flex;
  background-color: #A7E6EB;

  #sidebar {
    width: 20.938vw;
    text-align: center;
    padding: 2vw;
    margin: -2vw 0 0 -5vw;

    h1 {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 1.823vw;
      line-height: 2.292vw;
      color: #10293D;
      margin: 1vw 0 1vw 0;
    }

    ul {
      li {
        width: 12.812vw;
        margin: 0.5vw 4vw 0.5vw 4vw;
        text-align: left;
        padding: 1vw 0 1vw 0;

        a {
          font-family: 'Urbanist';
          font-weight: 400;
          font-size: 1.563vw;
          line-height: 1.875vw;
          color: #10293D;
          padding: 0.5vw 0 0.5vw 0;
          text-decoration: none;
          border-bottom: 1px solid #10293D;
        }
      }
    }
  }

  #content {
    width: 100%;
    border-radius: 24px;
    padding: 2vw;
    background-color: #FFFFFF;
    margin-top: -2vw;

    h2 {
      font-family: 'Urbanist';
      font-weight: 600;
      font-size: 1.875vw;
      line-height: 2.24vw;
      text-align: center;
      color: #10293D;
    }

    .info {
      margin-top: 2vw;
      width: 95%;
      background-color: #EDF8F9;
      border-radius: 24px;
      padding: 2vw;
      display: grid;

      h3 {
        font-family: 'Urbanist';
        font-weight: 600;
        font-size: 1.667vw;
        line-height: 1.979vw;
        color: #10293D;
      }

      p {
        font-family: 'Urbanist';
        font-weight: 600;
        font-size: 1.25vw;
        line-height: 1.458vw;
        color: #10293D;
        margin: 0.5vw 0 0.5vw 0;

        span {
          color: #FF0000;
        }
      }

      label {
        font-family: 'Tilt Neon';
        font-weight: 400;
        font-size: 1.25vw;
        color: #10293D;
        margin: 1vw 0 0.104vw 0;
        display: grid;
        position: relative;

        input {
          font-family: 'Tilt Neon';
          font-weight: 400;
          font-size: 1vw;
          color: #10293D;
          width: 90%;
          padding: 0.417vw 1.875vw 0.417vw 0.417vw;
          border: none;
          border-bottom: 1px solid #999;
          background-color: #eef6f9;
          outline: none;
        }

        i {
          position: absolute;
          transform: translateY(50%) translateX(-200%);
          color: #1663A3;
          font-size: 1.25vw;
          cursor: pointer;
        }
      }
    }

    button {
      width: 70%;
      margin: 2vw 0 0 10vw;
      padding: 1vw;
      border-radius: 100px;
      background: linear-gradient(45deg, #A7E6EB, #007FAA);
      color: #FFFFFF;
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 1.667vw;
      line-height: 2.083vw;
      border: none;
      cursor: pointer;
      transition: font-size 0.3s ease-in-out;
    }

    #delete {
      background: linear-gradient(45deg, #FF4C4C, #FF0000);
    }

    button:hover {
      font-size: 1.867vw;
    }
  }
}
</style>
