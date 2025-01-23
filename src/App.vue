<script setup>
import FooterViewMobile from './components/mobile/elements/FooterViewMobile.vue'
import FooterView from './components/desktop/elements/FooterView.vue'
import HeaderView from './components/desktop/elements/HeaderView.vue'
</script>

<template>
  <HeaderView />
  <RouterView />
  <FooterView />
  <FooterViewMobile />
</template>
