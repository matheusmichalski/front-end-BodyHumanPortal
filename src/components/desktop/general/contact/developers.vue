<script setup>
const developers = [
  { id: 0, image: '/public/contact/devs/bianca.png', name: 'Bianca Isadora Joselli de Souza', position: 'FRONT-END', email: '', number: '', item: 'first' },
  { id: 1, image: '/public/contact/devs/helena.png', name: 'Helena Soares Pereira', position: 'FRONT-END', email: '', number: '', item: 'second' },
  { id: 2, image: '/public/contact/devs/luiza.png', name: 'Luiza Westrupp do Carmo', position: 'FRONT-END', email: '', number: '', item: 'third' },
  { id: 3, image: '/public/contact/devs/matheus.png', name: 'Matheus Miguel Michalski', position: 'DBA', email: '', number: '', item: 'fourth' },
  { id: 4, image: '/public/contact/devs/rafael.png', name: 'Nicole Ferreira Mello', position: 'FRONT-END', email: 'nicfmello@gmail.com', number: '', item: 'fifth' },
  { id: 5, image: '/public/contact/devs/rafael.png', name: 'Rafael August Otto', position: 'FRONT-END', email: '', number: '', item: 'sixth' },
  { id: 6, image: '/public/contact/devs/vitor.png', name: 'Vitor André da Silva', position: 'FRONT-END', email: '', number: '', item: 'seventh' }
];
</script>

<template>
  <section class="is-desktop">
    <h1>Contato</h1>
    <img src="/public/contact/detail-left.png" alt="Detalhe" id="detail-left">

    <div id="principal">
      <div v-for="dev in developers" :key="dev.id" class="dev-card" :id="dev.item">
        <img :src="dev.image" :alt="dev.name">
        <a :href="dev.number"><i class="fa-solid fa-phone icon dark"></i></a> <a :href="'mailto:' + dev.email"><i class="fa-regular fa-envelope icon light"></i></a>
        <p>{{ dev.name }}</p>
        <p>{{ dev.position }}</p>
      </div>
    </div>

    <img src="/public/contact/detail-right.png" alt="Detalhe" id="detail-right">
  </section>
</template>

<style scoped>
section {
  h1 {
    font-family: 'Gasoek One';
    font-weight: 400;
    font-size: 120px;
    line-height: 137px;
    color: #034F85;
    text-align: center;
    margin-bottom: 10vw;
  }

  #detail-left {
    position: absolute;
    left: 0;
    top: 200px;
  }

  #detail-right {
    position: absolute;
    right: 0;
    top: 2230px;
  }

  #principal {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 25rem;
    text-align: center;
    justify-items: center;

    .dev-card {
      width: 452px;
      height: 663px;
      background-color: #F5F5F5;
      border-radius: 24px;

      p {
        font-family: 'Urbanist';
        font-weight: 600;
        font-size: 28px;
        line-height: 33px;
        color: #010A5C;
        margin: 2vw 0 2vw 0;
      }

      .icon {
        font-size: 24px;
        color: #FFFFFF;
        padding: 1vw;
        border-radius: 50px;
        margin: -3vw 2vw 1vw 2vw;
      }

      .icon.dark {
        background-color: #034F85;
      }

      .icon.light {
        background-color: #7CC1DB;
      }
    }

    .dev-card:first-of-type {
      grid-column: span 2;
      margin-top: 0;
    }

    .dev-card:nth-child(4),
    .dev-card:nth-child(7) {
      grid-column: span 2;
      margin-top: -20rem;
    }

    .dev-card:nth-child(2),
    .dev-card:nth-child(3),
    .dev-card:nth-child(5),
    .dev-card:nth-child(6) {
      grid-column: span 1;
      margin-top: -20rem;
    }
  }
}
</style>
