<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'

// Props para o texto do label e o ícone do FontAwesome
defineProps({
  text: String, // Texto da label
})

// Gerenciamento do estado do input
const inputValue = ref('')
const focused = ref(false)

// Função para verificar o estado do input
const checkInput = () => {
  if (!inputValue.value) {
    focused.value = false
  }
}
</script>
<template>
  <ul>
    <li>
      <!-- Label dinâmica -->
      <label :class="{ active: focused || email }" for="email">{{ text }}</label>
    </li>
    <li>
      <!-- Campo de entrada -->
      <input
        type="email"
        name="email"
        id="email"
        class="email"
        v-model="email"
        @focus="focused = true"
        @blur="checkInput"
        required
      />
    </li>
    <span class="icon">
      <slot />
    </span>
  </ul>
</template>
<style scoped>
ul {
  font-family: 'Tilt Neon', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans';
  list-style: none;

  li {
    position: relative;
    margin-bottom: 2vw;

    label {
      position: absolute;
      left: 1vw;
      top: 4vw;
      transform: translateY(-1vw);
      font-size: 5vw;
      color: #10293d50;
      transition: all 0.3s ease-in-out;
      pointer-events: none;
      z-index: 1;

      &.active {
        top: -2vw;
        font-size: 3.5vw;
        color: #10293d;
        padding: 0 0.5vw;
      }
    }

    input {
      width: 80vw;
      padding: 1vw;
      font-size: 5vw;
      border: none;
      border-bottom: #10293d solid 0.15vw;
      background-color: transparent;
      outline: none;
    }
  }
}
</style>
