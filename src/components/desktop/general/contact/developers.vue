<script setup>
const developers = [
  {
    id: 0,
    image: '/contact/devs/bianca.png',
    name: 'Bianca Isadora Joselli de Souza',
    position: 'DESIGNER',
    email: 'biancajoselli.ifc@gmail.com',
    number: '+5547997904799',
    item: 'first',
  },
  {
    id: 1,
    image: '/contact/devs/helena.png',
    name: 'Helena Soares Pereira',
    position: 'DOCUMENTAÇÃO',
    email: 'helenasoarees23@gmail.com',
    number: '+5547997760827',
    item: 'second',
  },
  {
    id: 2,
    image: '/contact/devs/luiza.png',
    name: 'Luiza Westrupp do Carmo',
    position: 'DESIGNER',
    email: 'luizawestruppdocarmo@gmail.com',
    number: '+5547992007063',
    item: 'third',
  },
  {
    id: 3,
    image: '/contact/devs/matheus.png',
    name: 'Matheus Miguel Michalski',
    position: 'BACK-END',
    email: 'matheus.michalskifc@gmail.com',
    number: '+5547996221285',
    item: 'fourth',
  },
  {
    id: 4,
    image: '/contact/devs/nicole.jpeg',
    name: 'Nicole Ferreira Mello',
    position: 'FRONT-END',
    email: 'nicfmello@gmail.com',
    number: '+5547991138151',
    item: 'fifth',
  },
  {
    id: 5,
    image: '/contact/devs/rafael.png',
    name: 'Rafael August Otto',
    position: 'FRONT-END',
    email: 'rafael.august.otto.ifc@gmail.com',
    number: '+5547988672983',
    item: 'sixth',
  },
  {
    id: 6,
    image: '/contact/devs/vitor.png',
    name: 'Vitor André da Silva',
    position: 'FRONT-END',
    email: 'alunovitorandre@gmail.com',
    number: '+5547991578502',
    item: 'seventh',
  },
]
</script>

<template>
  <section class="is-desktop">
    <h1>Contato</h1>

    <div id="principal">
      <div v-for="dev in developers" :key="dev.id" class="dev-card" :id="dev.item">
        <img :src="dev.image" :alt="dev.name" />
        <a :href="'tel:' + dev.number"><span class="fa-solid fa-phone icon dark"></span></a>
        <a :href="'mailto:' + dev.email"><span class="fa-regular fa-envelope icon light"></span></a>
        <p>{{ dev.name }}</p>
        <p>{{ dev.position }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  h1 {
    font-family: 'Gasoek One';
    font-weight: 400;
    font-size: 5.684vw;
    line-height: 0.625vw;
    color: #034f85;
    text-align: center;
    margin-bottom: 10vw;
  }

  background:
    url(/contact/detail-left.png) no-repeat,
    url(/contact/detail-right.png) no-repeat;

  background-position:
    top 2.5vw left -3vw,
    bottom right;

  background-size:
    20vw auto,
    15vw auto;

  #detail-right {
    position: absolute;
    right: 0;
    top: 115.173vw;
    width: 15.369vw;
  }

  #principal {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 25rem;
    text-align: center;
    justify-items: center;

    .dev-card {
      width: 23.6vw;
      height: 35vw;
      background-color: #f5f5f5;
      border-radius: 24px;
      overflow: hidden;

      img {
        width: 23.6vw;
      }

      p {
        font-family: 'Urbanist';
        font-weight: 600;
        font-size: 1.537vw;
        line-height: 1.3vw;
        color: #010a5c;
        margin: 2vw 0 2vw 0;
      }

      .icon {
        font-size: 1.31vw;
        color: #ffffff;
        padding: 1vw;
        border-radius: 50px;
        margin: -3vw 2vw 0 2vw;
      }

      .icon.dark {
        background-color: #034f85;
      }

      .icon.light {
        background-color: #7cc1db;
      }
    }

    .dev-card:first-of-type {
      grid-column: span 2;
      margin-top: 0;
    }

    .dev-card:nth-child(4),
    .dev-card:nth-child(7) {
      grid-column: span 2;
      margin-top: -18vw;
    }

    .dev-card:nth-child(2),
    .dev-card:nth-child(3),
    .dev-card:nth-child(5),
    .dev-card:nth-child(6) {
      grid-column: span 1;
      margin-top: -18vw;
    }
  }
}
</style>
