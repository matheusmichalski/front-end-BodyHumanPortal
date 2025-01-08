<script setup>

</script>

<template>
  <section class="is-desktop">
    <h1>Portal do</h1>
    <h1>CORPO</h1>
    <h1>HUMANO</h1>

    <img src="/public//home/detail-dark.png" alt="Detalhe" id="detail-dark">

    <div>
      <div id="subtitle">
        <h2>Blog Informativo da <span>ANATOMIA HUMANA</span></h2>
        <p>Nós somos um blog acadêmico, com o objetivo de apresentar o conteúdo de Anatomia e Fisiologia Humana, em seus
          diversos aspectos.</p>
      </div>

      <img src="/public/home/banner.png" alt="Livro">
    </div>

    <img src="/public//home/detail-light.png" alt="Detalhe" id="detail-light">
  </section>
</template>

<style scoped>
section {
  h1 {
    font-family: 'Poller One';
    font-weight: 400;
    font-size: 64px;
    line-height: 52px;
    text-align: center;
    color: #1F527C;
  }

  div {
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 3vw;

    #subtitle {
      display: block;
      width: 560px;
      margin: 0 5vw 0 8vw;

      h2 {
        font-family: 'Tilt Warp';
        font-weight: 400;
        font-size: 70px;
        line-height: 75px;
        color: #1F527C;

        span {
          color: #10293D;
        }
      }

      p {
        font-family: 'Urbanist';
        font-weight: 400;
        font-size: 25px;
        line-height: 40px;
        color: #000000;
        margin-top: 1vw;
      }
    }
  }

  #detail-dark {
    position: absolute;
    top: 300px;
    left: 1516px;
    width: 170px;
    height: 300px;
  }

  #detail-light {
    position: absolute;
    top: 425px;
    left: 0;
    width: 300px;
    height: 650px;
  }
}
</style>
