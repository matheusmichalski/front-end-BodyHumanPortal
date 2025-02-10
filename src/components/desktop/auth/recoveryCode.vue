<script>
import { ref } from 'vue'

const user = ref({
  name: 'Nicole FeMello',
  picture: '/user.jpeg',
  email: 'nicfmello@gmail.com',
  birthday: '27/01/2009',
  create: '30/01/2025',
})

export default {
  data() {
    return {
      codeInputs: new Array(6).fill(''),
    }
  },
  methods: {
    handleInput(index, event) {
      const value = event.target.value

      if (!/^\d?$/.test(value)) {
        this.codeInputs[index] = ''
        return
      }

      if (value && index < this.codeInputs.length - 1) {
        this.$refs.inputRefs[index + 1].focus()
      }
    },
    handleBackspace(index) {
      if (!this.codeInputs[index] && index > 0) {
        this.$refs.inputRefs[index - 1].focus()
      }
    },
  },
}
</script>

<template>
  <section class="is-desktop">
    <div id="recovery">
      <img src="/logo.png" alt="">
      <h1>Código de recuperação</h1>
      <p>Insira o código enviado por email no campo abaixo: </p>
      <div class="container">
        <div v-for="(digit, index) in codeInputs" :key="index" class="code-wrapper">
          <input v-model="codeInputs[index]" @input="handleInput(index, $event)"
            @keydown.backspace="handleBackspace(index, $event)" type="text" maxlength="1" class="code-box"
            ref="inputRefs" />
          <span class="hyphen" v-if="!codeInputs[index]">-</span>
        </div>
      </div>
      <button>Confirmar</button>
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

    p {
      font-family: 'Tilt Neon';
      font-weight: 400;
      font-size: 1.25vw;
      color: #10293d;
      margin: 2vw 3.5vw 1.5vw 3.5vw;
    }

    .container {
      display: flex;
      justify-content: center;
      gap: 7vw;
      margin: 2vw 5vw 2vw 0;

      .code-wrapper {
        position: relative;
        width: 0.5vw;

        .code-box {
          width: 3.5vw;
          height: 7vw;
          text-align: center;
          font-size: 3vw;
          font-weight: bold;
          color: #10293D;
          border: none;
          background-color: #BAD3D9;
          border-radius: 4vw;
          padding: 0.5vw;
          outline: none;
          position: relative;
        }

        .hyphen {
          position: absolute;
          top: 6.5vw;
          left: 2.8vw;
          transform: translate(-1vw, -5vw);
          font-size: 4vw;
          color: #3C474A;
          pointer-events: none;
          font-weight: 900;
        }
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
