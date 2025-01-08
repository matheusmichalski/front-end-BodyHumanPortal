<script setup>
import { defineProps } from 'vue';
defineProps(['name', 'position', "email", "number", "picture", "description"]);
</script>

<template>
  <div>
    <img :src="picture" :alt="description">
    <a :href="'tel:' + number"><i class="fa-solid fa-phone"></i></a>
    <a :href="'mailto:' + email"><i class="fa-regular fa-envelope"></i></a>
    <p class="name">{{ name }}</p>
    <p class="position">{{ position }}</p>
  </div>
</template>

<style scoped>
  div {
    width: 451px;
    height: 663px;
    background-color: #F5F5F5;
    border-radius: 24px;
    margin: 2vw 17vw 2vw 17vw;

    img {
      width: 451px;
      height: 446px;
      border-radius: 24px;
    }

    i {
      font-size: 20px;
      color: #ffffff;
      padding: 1vw;
      border-radius: 100px;
      margin: 0 1vw 0 1vw;
    }

    .fa-phone {
      background-color: #010A5C;
      margin-left: 9vw;
      margin-top: -2vw;
    }

    .fa-envelope {
      background-color: #A8BAF4;
      margin-right: 5vw;
      margin-top: -2vw;
    }

    p {
      font-family: "tilt neon", sans-serif;
      font-weight: 400px;
      font-size: 28px;
      margin: 35px 0 35px 0;
      text-align: center;
      color: #010A5C;
    }
  }
</style>
