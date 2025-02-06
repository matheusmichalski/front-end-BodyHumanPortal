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
        <img :src="organImage" :alt="organName"/>
      </div>
      <h3>{{ organh3 }}</h3>
      <p>{{ organp }}</p>
      <p><a :href="organReference">Referência</a></p>
    </div>

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

    <RouterLink to="/" id="button">
      <button>OUTROS SISTEMAS</button>
    </RouterLink>
  </section>
</template>

<style scoped>
.is-mobile {
  padding: 0;
  background: url(/public/systems/Fundo.png)
  no-repeat top center;
  background-size: 100%;
  .banner {
    display: flex;

  h1 {
    padding-left: 10vw;
    padding-top: 5vw;
    font-family: "Tilt Warp";
    font-size: 1.5rem;
    display: grid;
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
      font-size: 2rem;
      color: #103F65;
      font-family: "Tilt Warp";
    }
    p {
      font-family: "Urbanist";
      color: #474747;

    }

}
}
</style>
