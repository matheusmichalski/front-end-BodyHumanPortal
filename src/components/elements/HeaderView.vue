<script setup>
import { ref } from 'vue'

const token = ref(!true);
</script>

<template>
  <header>
    <nav>
      <ul id="pages">
        <li>
          <RouterLink to="/sobre">SOBRE</RouterLink>
        </li>
        <li>
          <RouterLink to="/contato">CONTATO</RouterLink>
        </li>
        <li>
          <RouterLink to="/sistemas">SISTEMAS</RouterLink>
        </li>
      </ul>

      <RouterLink to="/minha-conta/profile" v-if="token"><i class="fa-solid fa-user icon-phone"></i></RouterLink>
      <ul id="auth" v-else>
        <li>
          <RouterLink to="/auth/cadastre-se">SING UP</RouterLink>
        </li>
        <li>
          <RouterLink to="/auth/login">SING IN</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  margin: 1vw;

  nav {
    display: flex;
    justify-content: space-between;


    a {
      margin: 0;

      #logo {
        font-family: 'Gasoek One', sans-serif;
        font-size: 43px;
        color: #1f527c;
        margin-left: 2vw;
      }
    }

    ul {
      margin: 1vw 0 0 2vw;
    }


    a {
      font-weight: 600;
      font-size: 22px;
      margin-right: 2vw;
    }

    ul {
      display: flex;
      margin: 0.6vw 0 0 0;

      a {
        margin: 0;
      }
    }
  }
}
</style>
