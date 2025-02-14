<script setup>
defineProps(['text'])
</script>

<template>
  <button type="submit" name="submit" id="submit" value="Confirmar">
    {{ text }}
  </button>
</template>

<style scoped>
button[type='submit'] {
  margin-top: 4vw;
  width: 55vw;
  padding: 3vw;
  background: linear-gradient(to right, #FF4C4C, #FF0000);
  color: #FFFFFF;
  font-family: 'Tilt Warp';
  font-weight: 600;
  font-size: 2.667vw;
  line-height: 2.083vw;
  font-weight: 600;
  border: none;
  border-radius: 10vw;
  cursor: pointer;
}

button[type='submit']:hover {
  background: linear-gradient(45deg, #cb3c3c, #ae0000);
}
</style>
