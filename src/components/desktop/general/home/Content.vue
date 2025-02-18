<script setup>
import SystemSvg from '@/components/general/elements/systemSvg.vue'
</script>

<template>
  <section class="is-desktop">
    <h2>Sistemas do Corpo</h2>
    <p>
      O corpo humano é uma máquina extraordinária, composta por sistemas interligados que trabalham
      juntos para manter o equilíbrio e a saúde.
    </p>
    <p>
      Aqui, você poderá explorar de forma clara e simples os principais sistemas do corpo,
      entendendo suas funções e como eles se conectam para garantir o funcionamento da nossa vida.
    </p>
    <div>
      <SystemSvg image-url="inicio.svg" json-url="inicio.json" />
    </div>
  </section>
</template>

<style scoped>
section {
  h2 {
    font-family: 'Tilt Warp';
    font-weight: 400;
    font-size: 3.604vw;
    line-break: 2.503vw;
    color: #103f65;
    text-align: center;
    margin: -12vw 0 5vw 0;
  }

  p {
    font-family: 'Tilt Neon';
    font-weight: 400;
    font-size: 1.563vw;
    line-height: 1.979vw;
    text-align: center;
    margin: 2vw 5vw 2vw 5vw;
  }

  ul {
    display: flex;
    justify-content: center;

    li {
      margin: 2vw;
      width: 9.844vw;
      height: 8.385vw;
      background: linear-gradient(45deg, #103f65, #47abc6);
      border-radius: 24px;
      display: flex;
      justify-content: center;

      img {
        padding: 1.5vw 2vw 1vw 2vw;
        width: 5.729vw;
      }
    }
  }

  #detail-dark {
    position: absolute;
    left: 0;
    top: 98.958vw;
    width: 15.369vw;
  }

  #body {
    margin-left: 33vw;
    width: 23.438vw;
  }
}
</style>
