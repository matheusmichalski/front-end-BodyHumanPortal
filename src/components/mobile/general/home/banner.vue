<template>
  <section class="is-mobile">
    <div>
      <h1>
        <span
          >Blog informativo <br />
          da</span
        >
        ANATOMIA <br />HUMANA
      </h1>

      <p>
        Nós somos um blog acadêmico, com o objetivo de apresentar o conteúdo de Anatomia e
        Fisiologia Humana, em seus diversos aspectos.
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  justify-content: center;
  padding-bottom: 15vw;
  background: url('/gifs/banner-mobile.gif');
  background:
    url(/mobile/home/fundo1.png) no-repeat right bottom,
    url(/gifs/banner-mobile.gif) no-repeat;
  background-size: 6vw, 90vw;
  background-position:
    right bottom,
    right -26vw top 8vw;

  div {
    h1 {
      font-family: 'Tilt Warp';
      font-size: 6.4vw;
      color: #10293d;
      margin: 15vw 0 20vw 5vw;
      white-space: nowrap;
      justify-content: space-between;

      span {
        color: #1f527c;
      }
    }

    p {
      font-family: 'Urbanist';
      font-weight: 500;
      font-size: 4vw;
      text-align: left;
      color: #10293d;
      margin-right: 2vw;
      line-height: 5vw;
    }
  }
}
</style>
