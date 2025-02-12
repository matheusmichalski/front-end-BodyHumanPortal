<script setup>
import { ref } from 'vue'

const user = ref({
  name: 'Nicole FeMello',
  picture: '/user.jpeg',
  email: 'nicfmello@gmail.com',
  birthday: '27/01/2009',
  create: '30/01/2025',
})
</script>

<template>
  <section class="is-mobile">
    <div id="picture">
      <img :src="user.picture" />
      <i class="fa-solid fa-camera"></i>
    </div>
    <h2>{{ user.name }}</h2>
    <ul>
      <li>DASHBOARD</li>
      <li>SEGURANÇA</li>
      <li>SUPORTE</li>
      <li>SIG UP</li>
    </ul>
  </section>
</template>

<style scoped>
section {
  #picture {
    width: 50.521vw;
    height: 50.521vw;
    background-color: #d9d9d9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: 2vw auto;

    i {
      font-size: 13vw;
      color: #103f65;
      position: absolute;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      transition: filter 0.3s ease-in-out;
    }
  }

  #picture:hover {
    i {
      opacity: 1;
    }

    img {
      filter: contrast(30%);
    }
  }

  h2 {
    text-align: center;
    padding: 0 15vw;
    font-weight: 600;
    color: #10293D;
    font-size: clamp(0.6rem, 5.5vw, 2.5rem);
    font-family: 'Urbanist';
    margin-top: 5vw;
  }

  ul {
    text-align: center;
    margin-top: 15vw;
    padding: 0 15vw;
    color: #103F65;

    li {
      color: #010A5C;
      margin: 5vw;
      border-bottom: 1px solid #010A5C;
      padding: 0 0 5vw 0;
      font-weight: 600;
      font-size: clamp(0.4rem, 5.5vw, 1.5rem);
      font-family: ;
    }
  }
}
</style>
