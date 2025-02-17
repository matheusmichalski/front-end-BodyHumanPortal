<template>
  <section class="is-mobile">
    <img src="/404/Imagem.png" alt="Página não encontrada">
    <div>
      <h1>Oops!</h1>
      <h2>Essa página se perdeu.</h2>
      <p>O link pode estar com algum problema, volte para o <span>Portal do CORPO HUMANO!</span></p>
      <RouterLink to="/"><button><span class="fa-solid fa-left-long"></span> Voltar</button></RouterLink>
    </div>
  </section>
</template>

<style scoped>
section {
  text-align: center;

  img {
    width: 90vw;
  }

  div {
    text-align: left;

    h1 {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 18vw;
      line-height: 24vw;
      color: #10293D;
    }

    h2 {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 10vw;
      line-height: 12vw;
      color: #1F527C;
    }

    p {
      font-family: "Urbanist";
      font-weight: 500;
      font-size: 8vw;
      line-height: 10vw;
      color: #BAB5B5;
      margin-top: 6vw;

      span {
        color: #10293D;
      }
    }

    button {
      margin-top: 5vw;
      padding: 1vw 3vw;
      background: linear-gradient(45deg, #A7E6EB, #007FAA);
      color: #FFFFFF;
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 9vw;
      line-height: 11vw;
      border: none;
      cursor: pointer;
      text-decoration: none;
      border-radius: 15px;
    }

    button:hover {
      background: linear-gradient(45deg, #278ca8, #1f527c);
    }
  }
}
</style>
