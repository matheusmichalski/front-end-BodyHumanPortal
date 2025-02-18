<script setup>
import { onMounted } from 'vue'
import FooterView from '../elements/FooterView.vue'
import { useAuth } from '@/stores/authStore'

const auth = useAuth()

onMounted(() => {
  auth.getUserProps()
<<<<<<< HEAD
  console.log(auth.user)
=======
  console.log(auth.user.profilePicture)
>>>>>>> dev
})
</script>

<template>
  <section class="is-desktop">
    <div id="content">
      <div id="picture">
        <img :src="auth.user.profilePicture" />

<<<<<<< HEAD
        <i class="fa-solid fa-camera"></i>
=======
        <span class="fa-solid fa-camera"></span>
>>>>>>> dev
      </div>

      <h2>Bem vindo, {{ auth.user.name }}</h2>

      <div id="info">
        <h3>Detalhes da Conta</h3>
        <p>Nome: {{ auth.user.name }}</p>
        <p v-if="auth.user.birthday">Data de nascimento: {{ auth.user.birthday }}</p>
        <p>Email: {{ auth.user.email }}</p>
        <p>Conta criada em: {{ auth.user.createAccount }}</p>
      </div>
      <footer>
        <FooterView />
      </footer>
    </div>
  </section>
</template>

<style scoped>
section {
  #picture {
    width: 10.521vw;
    height: 10.521vw;
    background-color: #d9d9d9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: 2vw auto;

    span {
      font-size: 3vw;
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

  h2 {
    font-family: 'Urbanist';
    font-weight: 600;
    font-size: 1.875vw;
    line-height: 2.24vw;
    text-align: center;
    color: #10293d;
  }

  #info {
    margin-top: 2vw;
    width: 95%;
    background-color: #edf8f9;
    border-radius: 24px;
    padding: 2vw;

    h3 {
      font-family: 'Urbanist';
      font-weight: 600;
      font-size: 1.667vw;
      line-height: 1.979vw;
      color: #10293d;
    }

    p {
      font-family: 'Urbanist';
      font-weight: 600;
      font-size: 1.25vw;
      line-height: 1.458vw;
      color: #10293d;
      margin: 0.5vw 0 0.5vw 0;
    }
  }
  footer {
    margin-top: 3.5vw;
  }
}
</style>
