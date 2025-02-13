<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'

defineProps({
  labelText1: String,
})

const inputValue1 = ref('')
const focused1 = ref(false)

const isPasswordVisible1 = ref(false)

const togglePassword1 = () => {
  isPasswordVisible1.value = !isPasswordVisible1.value
}

const checkInput1 = () => {
  if (!inputValue1.value) {
    focused1.value = false
  }
}

</script>

<template>
  <ul>
    <li class="first">
      <label :class="{ active: focused1 || inputValue1 }" for="password1">{{ labelText1 }}</label>
      <input
        :type="isPasswordVisible1 ? 'text' : 'password'"
        name="password1"
        id="password1"
        class="password"
        v-model="inputValue1"
        @focus="focused1 = true"
        @blur="checkInput1"
        required
      />
      <font-awesome-icon
        :icon="isPasswordVisible1 ? 'eye-slash' : 'eye'"
        class="icon"
        @click="togglePassword1"
      />
    </li>

  </ul>
</template>

<style scoped>
ul {
  font-family: 'Tilt Neon', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans';
  list-style: none;

  .first {
    margin-bottom: 7vw;
  }

  li {
    position: relative;
    margin-bottom: 4vw;

    label {
      position: absolute;
      left: 1vw;
      top: 4vw;
      transform: translateY(-3vw);
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

    .icon {
      position: absolute;
      right: 2vw;
      top: 50%;
      transform: translateY(-50%);
      font-size: 4vw;
      color: #1663a3;
      cursor: pointer;
    }
  }
}
</style>
