<script setup>
import { ref } from 'vue'
import FooterView from '../elements/FooterView.vue'

const user = ref({
  name: 'Nicole FeMello',
  picture: '/user.jpeg',
  email: 'nicfmello@gmail.com',
  birthday: '27/01/2009',
  create: '30/01/2025',
})
</script>

<template>
  <section class="is-desktop">
    <nav id="sidebar">
      <h1>Minha conta</h1>

      <ul>
        <li>
          <RouterLink to="/minha-conta"><i class="fa-solid fa-table"></i> Dashboard</RouterLink>
        </li>
        <li>
          <RouterLink to="/suporte"><i class="fa-regular fa-circle-question"></i> Suporte</RouterLink>
        </li>
        <li>
          <RouterLink to="/seguranca"><i class="fa-solid fa-shield-halved"></i> Segurança</RouterLink>
        </li>
      </ul>
    </nav>

    <div id="content">
      <div id="picture">
        <img :src="user.picture">
        <i class="fa-solid fa-camera"></i>
      </div>

      <h2>Bem vindo, {{ user.name }}</h2>

      <div id="info">
        <h3>Detalhes da Conta</h3>
        <p>Nome: {{ user.name }}</p>
        <p>Data de nascimento: {{ user.birthday }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Conta criada em: {{ user.create }}</p>
      </div>
      <footer>
        <FooterView />
      </footer>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: -3vw;
  display: flex;
  background-color: #A7E6EB;

  #sidebar {
    width: 20.938vw;
    text-align: center;
    padding: 2vw;
    margin: -2vw 0 0 -5vw;

    h1 {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 1.823vw;
      line-height: 2.292vw;
      color: #10293D;
      margin: 1vw 0 1vw 0;
    }

    ul {
      li {
        width: 12.812vw;
        margin: 0.5vw 4vw 0.5vw 4vw;
        text-align: left;
        padding: 1vw 0 1vw 0;

        a {
          font-family: 'Urbanist';
          font-weight: 400;
          font-size: 1.563vw;
          line-height: 1.875vw;
          color: #10293D;
          padding: 0.5vw 0 0.5vw 0;
          text-decoration: none;
          border-bottom: 1px solid #10293D;
        }
      }
    }
  }

  #content {
    width: 100%;
    border-radius: 24px;
    padding: 2vw;
    background-color: #FFFFFF;
    margin-top: -2vw;

    #picture {
      width: 10.521vw;
      height: 10.521vw;
      background-color: #D9D9D9;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      margin: 2vw auto;

      i {
        font-size: 3vw;
        color: #103F65;
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
      font-family: 'Urbanist';
      font-weight: 600;
      font-size: 1.875vw;
      line-height: 2.24vw;
      text-align: center;
      color: #10293D;
    }

    #info {
      margin-top: 2vw;
      width: 95%;
      background-color: #EDF8F9;
      border-radius: 24px;
      padding: 2vw;

      h3 {
        font-family: 'Urbanist';
        font-weight: 600;
        font-size: 1.667vw;
        line-height: 1.979vw;
        color: #10293D;
      }

      p {
        font-family: 'Urbanist';
        font-weight: 600;
        font-size: 1.25vw;
        line-height: 1.458vw;
        color: #10293D;
        margin: 0.5vw 0 0.5vw 0;
      }
    }
  }
}
</style>
