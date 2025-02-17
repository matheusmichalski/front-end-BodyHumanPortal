<template>
  <section class="is-desktop">
    <div>
      <h1>Oops!</h1>
      <h2>Essa página se perdeu.</h2>
      <p>O link pode estar com algum problema, volte para o <span>Portal do CORPO HUMANO!</span></p>
      <RouterLink to="/"><button><span class="fa-solid fa-left-long"></span> Voltar</button></RouterLink>
    </div>
    <img src="/404/Imagem.png" alt="Página não encontrada">
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url(/404/image1.png) no-repeat top left,
  url(/404/image2.png) no-repeat bottom right;
  background-size: 20vw, 15vw;

  div {
    margin-left: 5vw;
    width: 40.208vw;

    h1 {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 11.458vw;
      line-height: 12vw;
      color: #10293D;
    }

    h2 {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 3.646vw;
      line-height: 4vw;
      color: #1F527C;
    }

    p {
      font-family: "Urbanist";
      font-weight: 500;
      font-size: 1.875vw;
      line-height: 2.4vw;
      color: #BAB5B5;

      span {
        color: #10293D;
      }
    }

    button {
      margin-top: 3vw;
      padding: 1vw 3vw;
      background: linear-gradient(45deg, #A7E6EB, #007FAA);
      color: #FFFFFF;
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 2.344vw;
      line-height: 2.8vw;
      border: none;
      cursor: pointer;
      text-decoration: none;
      border-radius: 15px;
    }

    button:hover {
      background: linear-gradient(45deg, #278ca8, #1f527c);
    }
  }

  img {
    width: 45vw;
  }
}
</style>
