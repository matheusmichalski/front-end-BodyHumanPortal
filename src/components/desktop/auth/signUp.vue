<script setup>
import { ref } from 'vue'
import GoogleLoginBtn from './GoogleLoginBtn.vue';

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
      <label>Seu nome:
        <div>
          <input type="text" placeholder="Seu nome" required />
          <i class="fa-solid fa-user"></i>
        </div>
      </label>
      <label>Email:
        <div>
          <input type="email" placeholder="Email" required />
          <i class="fa-solid fa-envelope"></i>
        </div>
      </label>
      <div id="date-bor">
        <input type="number" placeholder="Dia" required min="1" max="31">
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
        <input type="number" placeholder="Ano" required min="1920" max="2025">
      </div>
      <label>Senha:
        <div>
          <input :type="showPassword.new ? 'text' : 'password'" placeholder="Senha" />
          <i :class="showPassword.new ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'" @click="togglePassword('new')"></i>
        </div>
      </label>

      <label>Confirme a sua senha:
        <div>
          <input :type="showPassword.confirm ? 'text' : 'password'" placeholder="Confirme a sua senha" />
          <i :class="showPassword.confirm ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
            @click="togglePassword('confirm')"></i>
        </div>
      </label>
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

    img {
      width: 20vw;
      margin-left: 11.5vw;
    }

    h1 {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 3.333vw;
      text-align: center;
      color: #1663A3;
      margin: 3vw 0 2vw 0;
    }

    label {
      font-family: 'Tilt Neon';
      font-weight: 400;
      font-size: 1.25vw;
      color: #10293d;
      margin: 1vw 0 0.104vw 0;
      display: grid;
      position: relative;

      input {
        font-family: 'Tilt Neon';
        font-weight: 400;
        font-size: 1vw;
        color: #10293d;
        width: 90%;
        padding: 0.417vw 1.875vw 0.417vw 0.417vw;
        border: none;
        border-bottom: 1px solid #999;
        background-color: #eef6f9;
        outline: none;
      }

      i {
        position: absolute;
        transform: translateY(50%) translateX(-3vw);
        color: #1663a3;
        font-size: 1.25vw;
        cursor: pointer;
      }
    }
  }
}
</style>
