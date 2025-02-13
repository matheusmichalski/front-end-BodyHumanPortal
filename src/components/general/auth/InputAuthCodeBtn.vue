<template>
  <div class="container">
    <div v-for="(digit, index) in codeInputs" :key="index" class="code-wrapper">
      <input
        v-model="codeInputs[index]"
        @input="handleInput(index, $event)"
        @keydown.backspace="handleBackspace(index, $event)"
        type="text"
        maxlength="1"
        class="code-box"
        ref="inputRefs"
      />
      <span class="hyphen" v-if="!codeInputs[index]">-</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const codeInputs = ref(new Array(6).fill(''))

const inputRefs = ref([])

function handleInput(index, event) {
  const value = event.target.value
  if (!/^\d?$/.test(value)) {
    codeInputs.value[index] = ''
    return
  }
  if (value && index < codeInputs.value.length - 1) {
    if (inputRefs.value[index + 1]) {
      inputRefs.value[index + 1].focus()
    }
  }
}

function handleBackspace(index, event) {
  if (!codeInputs.value[index] && index > 0) {
    if (inputRefs.value[index - 1]) {
      inputRefs.value[index - 1].focus()
    }
  }
}

const codeString = computed(() => codeInputs.value.join(''))

const emit = defineEmits(['sendCode'])

watch(codeString, (newValue) => {
  emit('sendCode', newValue)
})
</script>

<style scoped>
.container {
  display: flex;
  gap: 5vw;
  justify-content: center;
  margin-top: 1vw;
  margin-bottom: 4vw;
}

.code-wrapper {
  position: relative;
  width: 10vw;
  height: 15vw;
}

.code-box {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 10vw;
  font-weight: bold;
  color: #10293d;
  border: none;
  background-color: #bad3d9;
  border-radius: 4vw;
  padding: 1.5vw;
  outline: none;
  position: relative;
}

.hyphen {
  position: absolute;
  top: 9vw;
  left: 6vw;
  transform: translate(-1vw, -5vw);
  font-size: 8vw;
  color: #3c474a;
  pointer-events: none;
  font-weight: 900;
}
</style>
