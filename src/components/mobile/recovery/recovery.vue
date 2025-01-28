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
      <InputAuthBtn text="Email">
        <font-awesome-icon icon="envelope" style="color: #74c0fc" />
      </InputAuthBtn>
      <SubmitAuthBtn text="Confirmar" />
    </form>
  </section>
</template>

<style scoped>
.is-mobile {
  display: block;
  text-align: center;
  font-size: 5vw;
  font-family: 'Tilt Neon', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans',
    Arial, sans-serif;
  font .texts {
    img {
      height: 20vw;
      width: auto;
      margin: 5vw 0 8vw 0;
    }
    h1 {
      color: #1663a3;
      font-size: 10vw;
      font-weight: 500;
      font-family: 'Tilt Warp', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
    }
    p {
      color: #10293d;
      margin: 6vw 0 6vw 0;
    }
  }
}
</style>
