<template>
  <section class="is-mobile">
    <div>
      <h1><span>Blog informativo <br> da</span> ANATOMIA <br>HUMANA</h1>

      <p>Nós somos um blog acadêmico, com o objetivo de apresentar o conteúdo de Anatomia e Fisiologia Humana, em
        seus diversos aspectos.</p>
    </div>

    <img src="/home/banner.png" alt="imagem livro">
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20vw;
  background: url(/mobile/home/fundo1.png) no-repeat right bottom;
  background-size: 9vw;
  background-position: right bottom;

  div {
    h1 {
      font-family: "Tilt Warp";
      font-size: 5.5vw;
      color: #10293D;
      margin: 10vw 0 5vw 0;
      white-space: nowrap;

      span {
        color: #1F527C;
      }
    }

    p {
      font-family: 'Urbanist';
      font-weight: 500;
      font-size: 4vw;
      text-align: left;
      color: #10293D;
      margin-right: 2vw;
      line-height: 5vw;
    }
  }

  img {
    margin-top: 10vw;
    width: 55vw;
    height: 30vw;
  }
}
</style>
