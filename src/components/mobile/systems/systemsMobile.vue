  <script setup>
  import { ref } from 'vue'
  defineProps([
    'system',
    'content1p',
    'content1Reference', //content1
    'content2p',
    'content2Reference', //content2
    'organImage',
    'organName',
    'organh3',
    'organp',
    'organReference', //organ
    'illness1h3',
    'illness1p',
    'illness1Reference', //illness1
    'illness2h3',
    'illness2p',
    'illness2Reference', //illness2
    'illness3h3',
    'illness3p',
    'illness3Reference', //illness3
    'content3p',
    'content3Reference', //content3
  ])

const indexStart = ref(0);
function getCardStartStyle(cardIndex) {
  const position = (cardIndex - indexStart.value + 3) % 3

  const styles = [
    {
      transform: 'translateX(-10vw)', // Primeiro
      opacity: 0.5,
    },
    {
      transform: 'translateX(10vw)', // Segundo
      opacity: 1,
    },
    {
      opacity: 0,
    }
  ]

  return styles[position] || styles[0] // Garante o estilo mesmo para índices fora do alcance
}
function nextStart() {
  indexStart.value = (indexStart.value == 3) ? 0 : indexStart.value + 1;
}
function prevStart() {
  indexStart.value = (indexStart.value == 0) ? 2 : indexStart.value - 1;
}
</script>

<template>
  <section class="is-mobile">
    <div class="banner">
      <h1>
        Sistema <span>{{ system }}</span>
      </h1>
    </div>

    <div class="content">
      <h3>Estrutura</h3>
      <p>{{ content1p }}</p>
      <p>
        <a :href="content1Reference"><span>Referência</span></a>
      </p>
    </div>

    <div class="content">
      <h3>Cuidados</h3>
      <ul>
        <li v-for="care of content2p" :key="care.id">{{ care.content }}</li>
      </ul>
      <p>{{ content2p }}</p>
      <p><a :href="content2Reference">Referência</a></p>
    </div>

    <div class="organ">
      <div class="svg">
        <img :src="organImage" :alt="organName" />
      </div>
      <div class="text">
        <h3>{{ organh3 }}</h3>
        <p>{{ organp }}</p>
        <p><a :href="organReference">Referência</a></p>
      </div>
    </div>


    <div class="illnesses">
      <div class="title">
        <h2>Doenças</h2>
      </div>
      <div id="container">
        <i class="fa-solid fa-chevron-left button-start" id="prev-start" @click="prevStart"></i>
        <i class="fa-solid fa-chevron-right button-start" id="next-start" @click="nextStart"></i>
        <div class="illness" :style="getCardStartStyle(1)">
          <h3>{{ illness1h3 }}</h3>
          <p>{{ illness1p }}</p>
          <p><a :href="illness1Reference">Referência</a></p>
        </div>
        <div class="illness" :style="getCardStartStyle(2)">
          <h3>{{ illness2h3 }}</h3>
          <p>{{ illness2p }}</p>
          <p><a :href="illness2Reference">Referência</a></p>
        </div>
        <div class="illness" :style="getCardStartStyle(3)">
          <h3>{{ illness3h3 }}</h3>
          <p>{{ illness3p }}</p>
          <p><a :href="illness3Reference">Referência</a></p>
        </div>
      </div>
    </div>

    <div class="content">
      <h3>Conclusão</h3>
      <p>{{ content3p }}</p>
      <p><a :href="content3Reference">Referência</a></p>
    </div>
  </section>
</template>

<style scoped>
.is-mobile {
  padding: 0;
  background: url(/public/systems/Fundo.png) no-repeat top center;
  background-size: 100%;

  .banner {
    display: flex;

    h1 {
      padding-left: 10vw;
      padding-top: 5vw;
      font-family: "Tilt Warp";
      font-size: 2rem;
      display: grid;
      justify-content: left;
      margin-top: 5vw;
      color: #1F527C;

      span {
        color: #10293D;
        margin-bottom: 10vw;
      }
    }
  }

  .content {
    background-color: #A7E6EB;
    padding: 5vw;
    border-radius: 24px;
    margin: 0 4vw 6vw 4vw;

    h3 {
      font-size: 1.5rem;
      color: white;
      font-family: "Tilt Warp";
    }

    p {
      font-family: "Urbanist";
      color: #474747;
      margin: 2vw 0 2vw 0;
    }

    a {
      color: #103F65;
      font-weight: 900;
      font-size: 0.8rem;
      text-decoration: none;
    }
  }

  .organ {
    .svg {
      text-align: center;
    }

    h3 {
      font-size: 1.5rem;
      color: #103F65;
      font-family: "Tilt Warp";
      margin-bottom: 2vw;
    }

    p {
      font-family: "Urbanist";
      color: #474747;
      margin-bottom: 2vw;
    }

    .text {
      border: #103F65 2px solid;
      margin: 5vw;
      padding: 5vw;
      border-radius: 24px;

      a {
        color: #103F65;
        font-weight: 900;
        font-size: 0.8rem;
        text-decoration: none;
      }
    }
  }

  .illnesses {
    margin: 4vw 0 5vw 0;
    padding: 3vw 0 5vw 0;
    height: 25vw;
    position: relative;
    overflow: hidden;

    #container {
      display: flex;
      justify-content: center;
      overflow: hidden;

      .button-start {
        font-size: 2vw;
        color: #006DBC;
        position: absolute;
        cursor: pointer;
        z-index: 2;
        top: 50%;
        transform: translateY(-50%);
      }

      #prev-start {
        left: 3vw;
      }

      #next-start {
        right: 3vw;
      }

      .illness {
        width: 35.719vw;
        border-radius: 1.5vw;
        border: 1px solid #103F65;
        padding: 2vw 1.5vw 2vw 1.5vw;
        margin: 0 2vw 0 2vw;
        transition: transform 0.5s ease;
      }
    }
  }

  /*.illnesses {

    #container {
      display: flex;
      justify-content: center;
      overflow: hidden;
      margin: 2vw 0 5vw 2vw;

      .illness {
        width: 35.719vw;
        border-radius: 1.5vw;
        border: 1px solid #103F65;
        padding: 2vw 1.5vw 2vw 1.5vw;
        margin: 0 2vw 0 2vw;

        h2 {
          font-size: 1.8rem;
          color: #103F65;
          font-family: "Tilt Warp";
          margin-bottom: 2vw;
        }
      }
    }
  }*/
}
</style>
