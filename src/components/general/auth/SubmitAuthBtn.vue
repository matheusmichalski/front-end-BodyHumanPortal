<script setup>
defineProps(['text']);
</script>

<template>
  <button type="submit" name="submit" id="submit" value="Confirmar">
    {{ text }}
  </button>
</template>

<style scoped>
button {
  margin-top: 4vw;
  width: 100%;
  padding: 2vw 3vw 2vw 3vw;
  background: linear-gradient(to right, #47abc6, #1f527c);
  color: #FFFFFF;
  font-family: 'Tilt Warp';
  font-weight: 600;
  font-size: 2.667vw;
  line-height: 2.083vw;
  border: none;
  border-radius: 100px;
  cursor: pointer;
}

button:hover {
  background: linear-gradient(to right, #278ca8, #1f527c);
}
</style>
