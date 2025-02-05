<template>
  <section class="is-desktop">
    <h1>Portal do</h1>
    <h1>CORPO</h1>
    <h1>HUMANO</h1>

    <div>
      <div id="subtitle">
        <h2>Blog Informativo da <span>ANATOMIA HUMANA</span></h2>
        <p>
          Nós somos um blog acadêmico, com o objetivo de apresentar o conteúdo de Anatomia e
          Fisiologia Humana, em seus diversos aspectos.
        </p>
      </div>

      <img src="/home/banner.png" alt="Livro" />
    </div>
  </section>
</template>

<style scoped>
section {
  background:
    url(/home/detail-light.png) no-repeat,
    url(/home/detail-dark.png) no-repeat;

  background-position:
    top 11.5vw left -3vw,
    top 5vw right;

  background-size:
    20vw auto,
    10vw auto;

  h1 {
    font-family: 'Poller One';
    font-weight: 400;
    font-size: 3.333vw;
    line-height: 2.708vw;
    text-align: center;
    color: #1f527c;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 3vw 5vw 7vw 7vw;

    img {
      width: 30vw;
      height: 20vw;
    }

    #subtitle {
      display: block;
      width: 40vw;

      h2 {
        font-family: 'Tilt Warp';
        font-weight: 400;
        font-size: 3.646vw;
        line-height: 3.906vw;
        color: #1f527c;

        span {
          color: #10293d;
        }
      }

      p {
        font-family: 'Urbanist';
        font-weight: 400;
        font-size: 1.663vw;
        line-height: 2.083vw;
        color: #000000;
        margin-top: 1vw;
      }
    }
  }
}
</style>
