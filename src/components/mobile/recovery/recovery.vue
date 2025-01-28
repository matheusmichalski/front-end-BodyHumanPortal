<script setup>
import InputAuthBtn from '@/components/general/auth/InputAuthBtn.vue'
import SubmitAuthBtn from '@/components/general/auth/SubmitAuthBtn.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'

defineProps(['title', 'text', 'button'])

const email = ref('')
const focused = ref(false)

const checkInput = () => {
  if (!email.value) {
    focused.value = false
  }
}
</script>

<template>
  <section class="is-mobile">
    <div class="texts">
      <img src="../../../../public/logo.png" alt="logo" />

      <h1>{{ title }}</h1>

      <p>{{ text }}</p>
    </div>
    <form action="#">

      <div class="emailField">
      <InputAuthBtn text="Email"></InputAuthBtn>
      <font-awesome-icon icon="envelope" class="envelope" style="color: #1663A3" />
      </div>
      <SubmitAuthBtn text="Enviar código" />

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
    .texts {
    img {
      height: 20vw;
      width: auto;
      margin: 5vw 0 5vw 0;
    }
    h1 {
      color: #1663a3;
      font-size: max(10vw, 20px);
      font-weight: 500;
      font-family: 'Tilt Warp', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
    }
    p {
      color: #10293d;
      margin: 6vw 0 6vw 0;
      font-size: max(6vw, 15px);
    }
  }
  .emailField {
    display: flex;
    .envelope{
      margin: 4vw 1vw 1vw 3vw;
    }
  }
}
</style>
