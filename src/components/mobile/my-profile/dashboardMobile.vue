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
      <span class="fa-solid fa-camera"></span>
    </div>

    <h1>Bem-vindo, {{ user.name }}</h1>

    <div>
      <h2>Detalhes da Conta</h2>
      <ul>
        <li>Nome: {{ user.name }}</li>
        <li>Data de Nascimento: {{ user.birthday }}</li>
        <li>Email: {{ user.email }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
section {
  height: 155vw;

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
    padding: 0;

    span {
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
    span {
      opacity: 1;
    }

    img {
      filter: contrast(30%);
    }
  }

  h1 {
    font-family: 'Urbanist';
    text-align: center;
    padding: 0 15vw;
    font-weight: 600;
    color: #10293d;
    font-size: clamp(0.6rem, 5.5vw, 2.5rem);
    margin-top: 5vw;
  }

  div {
    background-color: #edf8f9;
    border-radius: 5vw;
    margin: 10vw 0 20vw 0;
    padding: 5vw;
    word-wrap: break-word;
    white-space: normal;
    word-break: break-word;

    h2 {
      color: #10293d;
      font-weight: 600;
      font-size: clamp(0.5rem, 5.5vw, 2rem);
      margin: 1vw 0;
      font-family: 'Urbanist';
    }

    ul {
      li {
        line-height: 1.8;
        color: #10293d;
        font-size: clamp(0.4rem, 4.5vw, 1.8rem);
        font-weight: 600;
        font-family: 'Urbanist';
      }
    }
  }
}
</style>
