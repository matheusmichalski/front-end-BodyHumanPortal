<script setup>
import { ref } from 'vue'

defineProps(['title', 'text', 'button'])

const email = ref('')
const focused = ref(false)

const checkInput = () => {
  if (!email.value) {
    focused.value = false
  }
}
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&family=Tilt+Warp&display=swap" rel="stylesheet">

  <section class="is-mobile">
    <div class="texts">
      <img src="../../../../public/logo.png" alt="logo" />

      <h1>{{ title }}</h1>

      <p>{{ text }}</p>
    </div>
    <form action="#">
      <ul>
        <li><label :class="{ active: focused || email }" for="email">Email</label></li>
        <li>
          <input type="email" name="email" id="email" class="email" v-model="email" @focus="focused = true" @blur="checkInput" required
          />
        </li>
      </ul>

      <input type="submit" name="submit" id="submit" value="Confirmar" />
    </form>
  </section>
</template>

<style scoped>
.is-mobile {
  display: block;
  text-align: center;
  font-size: 5vw;
  font-family: "Tilt Neon", 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font

    .texts {
      img {
        height: 20vw;
        width: auto;
        margin: 5vw 0 8vw 0;
      }
      h1 {
        color: #1663a3;
        font-size: 10vw;
        font-weight: 500;
        font-family: 'Tilt Warp', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
      }
      p {
        color: #10293D;
        margin: 6vw 0 6vw 0;
      }
    }
  form {
    /*Email field animation */

    ul {
      list-style: none;

      li {
        position: relative;
        margin-bottom: 2vw;

        label {
          position: absolute;
          left: 1vw;
          top: 2.5vw;
          transform: translateY(-1vw);
          font-size: 5vw;
          color: #10293D50;
          transition: all 0.3s ease-in-out;
          pointer-events: none;
          z-index: 1;

          &.active {
            top: -2vw;
            font-size: 3vw;
            color: #10293D;
            padding: 0 0.5vw;
          }
        }

        input {
          width: 85vw;
          padding: 1vw;
          font-size: 5vw;
          border: none;
          border-bottom: #10293D solid 0.15vw;
        }
      }
    }
    /* Button */
    input[type='submit'] {
      margin-top: 3vw;
      width: 55vw;
      padding: 3vw;
      font-size: 5vw;
      background: linear-gradient(to right, #47ABC6, #1F527C);
      color: white;
      font-weight: 600;
      border: none;
      border-radius: 10vw;
      cursor: pointer;
    }
  }
}
</style>
