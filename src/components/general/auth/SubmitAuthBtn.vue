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
  font-size: 5vw;
  background: linear-gradient(to right, #47abc6, #1f527c);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 10vw;
  cursor: pointer;
}

button[type='submit']:hover {
  background: linear-gradient(to right, #278ca8, #1f527c);
}
</style>
