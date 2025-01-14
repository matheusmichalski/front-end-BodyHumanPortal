<script setup>
import { defineProps } from 'vue';

defineProps([
  'system',
  'content1p', 'content1Reference', //content1
  'content2p', 'content2Reference', //content2
  'organImage', 'organName', 'organh3', 'organp', 'organReference', //organ
  'illness1h3', 'illness1p', 'illness1Reference', //illness1
  'illness2h3', 'illness2p', 'illness2Reference', //illness2
  'illness3h3', 'illness3p', 'illness3Reference', //illness3
  'content3p', 'content3Reference', //content3
]);
</script>


<template>
  <section class="is-desktop">
    <h1>Sistema <span>{{ system }}</span></h1>
    <img src="/public/systems/squareDetail.png" alt="Detalhe" id="detail1">

    <div class="content">
      <h3>Estrutura</h3>
      <p>{{ content1p }}</p>
      <p><a :href="content1Reference"><span>Referência</span></a></p>
    </div>
    <img src="/public/systems/bigSquare.png" alt="Detalhe" id="detail2">
    <div class="content">
      <h3>Cuidados</h3>
      <ul>
        <li v-for="care of content2p" :key="care.id">{{ care.content }}</li>
      </ul>
      <p>{{ content2p }}</p>
      <p><a :href="content2Reference">Referência</a></p>

    </div>

    <div class="organ">
      <img :src="organImage" :alt="organName">

      <div>
        <h3>{{ organh3 }}</h3>
        <p>{{ organp }}</p>
        <p><a :href="organReference">Referência</a></p>

      </div>
    </div>

    <img src="/public/systems/squareSmall.png" alt="Detalhe" id="detail3">

    <h2>Doenças</h2>
    <div class="illnesses">
      <div class="illness">
        <h3>{{ illness1h3 }}</h3>
        <p>{{ illness1p }}</p>
        <p><a :href="illness1Reference">Referência</a></p>
      </div>
      <div class="illness">
        <h3>{{ illness2h3 }}</h3>
        <p>{{ illness2p }}</p>
        <p><a :href="illness2Reference">Referência</a></p>
      </div>
      <div class="illness">
        <h3>{{ illness3h3 }}</h3>
        <p>{{ illness3p }}</p>
        <p><a :href="illness3Reference">Referência</a></p>
      </div>
    </div>

    <div class="content">
      <h3>Conclusão</h3>
      <p>{{ content3p }}</p>
      <p><a :href="content3Reference">Referência</a></p>
    </div>

    <img src="/public/systems/miniSquare.png" alt="Detalhe" id="detail4">

    <RouterLink to="/" id="button"><button>OUTROS SISTEMAS</button></RouterLink>
  </section>
</template>

<style scoped>
section {
  text-align: center;

  h1 {
    font-family: 'Tilt Warp';
    font-weight: 400;
    font-size: 128px;
    line-height: 75px;
    color: #1F527C;
    text-align: center;
    width: 600px;

    span {
      font-size: 96px;
      color: #10293D;
    }
  }

  .content {
    margin: 4vw;
    width: 1300px;
    height: 403px;
    background-color: #F5F5F5;
    padding: 1vw 3vw 1vw 5vw;
    border-radius: 24px;
    box-shadow: 30px 30px 2px #A7E6EB;

    h3 {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 40px;
      line-height: 75px;
      color: #103F65;
      text-align: left;
    }

    p {
      font-family: 'Urbanist';
      font-weight: 500;
      font-size: 25px;
      line-height: 40px;
      color: #474747;
      text-align: left;

      a {
        text-decoration: none;
        font-family: 'Tilt Warp';
        font-weight: 400;
        font-size: 24px;
        line-height: 75px;
        color: #103F65;
      }
    }
  }

  .organ {
    display: flex;
    justify-content: space-between;
    width: 1440px;
    height: 600px;
    margin: 5vw 4vw 5vw 4vw;

    div {
      width: 700px;
      height: 550px;
      border: 1px solid #103F65;
      border-radius: 24px;
      padding: 3vw 2vw 1vw 3vw;
      margin: 0.7vw 3vw 0.5vw 3vw;
      background-color: #FFFFFF;

      h3 {
        font-family: 'Tilt Warp';
        font-weight: 400;
        font-size: 40px;
        line-height: 75px;
        color: #103F65;
        text-align: left;
      }

      p {
        font-family: 'Urbanist';
        font-weight: 500;
        font-size: 25px;
        line-height: 40px;
        color: #474747;
        text-align: left;

        a {
          text-decoration: none;
          font-family: 'Tilt Warp';
          font-weight: 400;
          font-size: 24px;
          line-height: 75px;
          color: #103F65;
        }
      }
    }
  }

  h2 {
    font-family: 'Tilt Warp';
    font-weight: 400;
    font-size: 64px;
    line-height: 75px;
    color: #103F65;
    text-align: left;
    margin-left: 5vw;
  }

  .illnesses {
    display: flex;
    justify-content: center;

    .illness {
      margin: 2vw;
      width: 400px;
      height: 1000px;
      border: 1px solid #103F65;
      border-radius: 24px;
      padding: 2vw;

      h3 {
        font-family: 'Tilt Warp';
        font-weight: 400;
        font-size: 40px;
        line-height: 75px;
        color: #103F65;
        text-align: left;
      }

      p {
        font-family: 'Urbanist';
        font-weight: 500;
        font-size: 25px;
        line-height: 40px;
        color: #474747;
        text-align: left;

        a {
          text-decoration: none;
          font-family: 'Tilt Warp';
          font-weight: 400;
          font-size: 24px;
          line-height: 75px;
          color: #103F65;
        }
      }
    }
  }

  #button {
    padding: 3vw 3vw 2vw 3vw;
    border-radius: 24px;
    background: linear-gradient(45deg, #103F65, #47ABC6);

    button {
      font-family: 'Urbanist';
      font-weight: 700;
      font-size: 36px;
      line-height: 40px;
      color: #FFFFFF;
      text-decoration: none;
      background-color: transparent;
      border: none;
      margin-top: 7vw;
      cursor: pointer;
    }
  }

  #detail1 {
    position: absolute;
    left: 1500px;
    top: 0;
    width: 186px;
    z-index: -1;
  }

  #detail2 {
    position: absolute;
    left: 0px;
    top: 714px;
    width: 300px;
    z-index: -1;
  }

  #detail3 {
    position: absolute;
    left: 1479px;
    top: 1914px;
    width: 200px;
    z-index: -1;
  }

  #detail4 {
    position: absolute;
    left: 0px;
    top: 3530px;
    width: 200px;
    z-index: -1;
  }
}
</style>
