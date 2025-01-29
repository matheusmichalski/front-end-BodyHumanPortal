<template>
  <div class="container">
    <input
      v-for="(digit, index) in codeInputs"
      :key="index"
      v-model="codeInputs[index]"
      @input="handleInput(index, $event)"
      @keydown.backspace="handleBackspace(index, $event)"
      type="text"
      maxlength="1"
      class="code-box"
      ref="inputRefs"
    />
  </div>
</template>

<script>
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

<style scoped>
.container {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

.code-box {
  width: 40px;
  height: 50px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  border: 2px solid #333;
  border-radius: 8px;
  padding: 5px;
  outline: none;
}
</style>
