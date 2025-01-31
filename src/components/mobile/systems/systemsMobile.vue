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
    <h1>
      Sistema <span>{{ system }}</span>
    </h1>
    <img src="/systems/squareDetail.png" alt="Detalhe" id="detail1" />

    <div class="content">
      <h3>Estrutura</h3>
      <p>{{ content1p }}</p>
      <p>
        <a :href="content1Reference"><span>Referência</span></a>
      </p>
    </div>
    <img src="/systems/bigSquare.png" alt="Detalhe" id="detail2" />
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

    <img src="/systems/squareSmall.png" alt="Detalhe" id="detail3" />

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

    <img src="/systems/miniSquare.png" alt="Detalhe" id="detail4" />

    <RouterLink to="/" id="button"><button>OUTROS SISTEMAS</button></RouterLink>
  </section>
</template>

<style scoped>
.is-mobile {
  background-color: blue;

  h1 {
    color: black;
    font-size: 3rem   ;
  }
}
</style>
