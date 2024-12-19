<script setup>
import HeaderView from './components/elements/HeaderView.vue';
import FooterView from './components/elements/FooterView.vue';
</script>

<template>
  <HeaderView/>
  <main>
    <RouterView />
  </main>
  <FooterView />
</template>
