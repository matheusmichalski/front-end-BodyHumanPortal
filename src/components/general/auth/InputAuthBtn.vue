<script setup>
import { ref } from 'vue'

defineProps({
  text: String,
  type: String,
})

const inputValue = ref('')
const focused = ref(false)

const checkInput = () => {
  if (!inputValue.value) {
    focused.value = false
  }
}
</script>
<template>
  <ul>
    <li>
      <label :class="{ active: focused || email }" :for="type">{{ text }}</label>
    </li>
    <li>
      <input
        :type="type"
        :name="type"
        :id="type"
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
      top: 5vw;
      transform: translateY(-1vw);
      font-size: 5vw;
      color: #10293d50;
      transition: all 0.3s ease-in-out;
      pointer-events: none;
      z-index: 1;

      &.active {
        top: -2vw;
        font-size: 3vw;
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
    }
  }
}
</style>
