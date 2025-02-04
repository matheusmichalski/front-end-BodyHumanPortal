<script setup>
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
</script>

<template>
  <section class="is-mobile">
    <div class="banner">
    <h1>
      Sistema <span>{{ system }}</span>
    </h1>
    <img src="/public/systems/Ellipse 14.png" alt="Detalhe" id="detail1" />
  </div>
    <div class="content">
      <h3>Estrutura</h3>
      <p>{{ content1p }}</p>
      <p>
        <a :href="content1Reference"><span>Referência</span></a>
      </p>
    </div>
    <img src="/public/systems/Ellipse 13.png" alt="Detalhe" id="detail2" />
    <div class="content">
      <h3>Cuidados</h3>
      <ul>
        <li v-for="care of content2p" :key="care.id">{{ care.content }}</li>
      </ul>
      <p>{{ content2p }}</p>
      <p><a :href="content2Reference">Referência</a></p>
    </div>

    <div class="organ">
      <img :src="organImage" :alt="organName" />

      <div>
        <h3>{{ organh3 }}</h3>
        <p>{{ organp }}</p>
        <p><a :href="organReference">Referência</a></p>
      </div>
    </div>

    <img src="/public/systems/Ellipse 15.png" alt="Detalhe" id="detail3" />

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

    <img src="/public/systems/Ellipse 16.png" alt="Detalhe" id="detail4" />

    <RouterLink to="/" id="button"><button>OUTROS SISTEMAS</button></RouterLink>
  </section>
</template>

<style scoped>
.is-mobile {

  .banner {
    display: flex;

    img {
      transform: translateX(35vw);
    }

  h1 {
    padding-left: 2vw;
    color: #1F527C;
    font-family: "Tilt Warp";
    font-size: 1.5rem;
    display: grid;
    text-align: center;
    justify-content: left;
    margin-top: 5vw;

    span {
      color: black;
      margin-bottom: 10vw;
    }
  }
  }

  .content {
    background-color: #A7E6EB;
    padding:  5vw;
    border-radius: 24px;

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

}

</style>
