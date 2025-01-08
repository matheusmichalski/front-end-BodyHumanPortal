<template>
  <section id="banner">
    <img src="../../../../public/img/general/home/banner/title.png" alt="Body Human Portal Title">

    <div>
      <div id="subtitle">
        <h2>Blog informativo da <span>ANATOMIA HUMANA</span></h2>
        <p>Nós somos um blog acadêmico, com o objetivo de apresentar o conteúdo de Anatomia e Fisiologia Humana, em seus
          diversos aspectos.</p>
      </div>

      <div id="general">
        <img src="../../../../public/img/general/home/banner/book.png" alt="Book" id="book">
        <img src="../../../../public/img/general/home/banner/pencil.png" alt="Pencil" id="pencil">
      </div>
    </div>

    <img src="../../../../public/img/general/home/banner/pebble-dark.png" alt="Pebble" class="pebble" id="dark">
    <img src="../../../../public/img/general/home/banner/pebble-light.png" alt="Pebble" class="pebble" id="light">
  </section>
</template>

<style scoped>
#banner {
  text-align: center;
  padding: 2vw;

  div {
    width: auto;
    margin: 3vw 0 0 0;
    display: flex;
    position: relative;

    div#subtitle {
      width: 594px;
      margin: 0 0 0 13vw;
      padding: 0 6vw 0 6vw;
      display: block;

      h2 {
        font-family: "Tilt Warp", sans-serif;
        font-size: 70px;
        font-weight: 400;
        color: #1F527C;
        text-align: left;

        span {
          color: #10293D;
        }
      }

      p {
        font-size: 25px;
        text-align: left;
        margin-top: 1.5vw;
      }
    }

      #pencil {
        width: 250px;
        height: 200px;
        position: absolute;
      }

      #book {
        width: 409px;
        height: 424px;
        position: relative;
        bottom: 70px;
        left: 80px;
      }
  }

  .pebble {
    position: absolute;
  }

  #dark {
    right: 1485px;
    top: 400px;
    width: 350px;
    height: 520px;
  }

  #light {
    left: 1535px;
    top: 20px;
    width: 300px;
    height: 470px;
  }
}
</style>
