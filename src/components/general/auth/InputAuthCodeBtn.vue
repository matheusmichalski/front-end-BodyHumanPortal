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
  color: #10293D;
  border: none;
  background-color: #BAD3D9;
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
  color: #3C474A;
  pointer-events: none;
  font-weight: 900;
}


</style>
