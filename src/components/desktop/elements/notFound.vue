<template>
  <section class="is-desktop">
    <div>
      <h1>Oops!</h1>
      <h2>Essa página se perdeu.</h2>
<<<<<<< HEAD
      <p>O link pode estar com algum problema, volte para o <span>Portal do CORPO HUMANO!</span></p>
      <RouterLink to="/"><button><i class="fa-solid fa-left-long"></i> Voltar</button></RouterLink>
    </div>
    <img src="/404/Imagem.png" alt="Página não encontrada">
=======
      <p>
        O link pode estar com algum problema, volte para o
        <span>Portal do CORPO HUMANO!</span>
      </p>
      <RouterLink to="/"
        ><button><span class="fa-solid fa-left-long"></span> Voltar</button></RouterLink
      >
    </div>
    <img src="/404/Imagem.png" alt="Página não encontrada" />
>>>>>>> dev
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: space-between;
  align-items: center;
<<<<<<< HEAD
  background: url(/404/image1.png) no-repeat top left,
  url(/404/image2.png) no-repeat bottom right;
=======
  background:
    url(/404/image1.png) no-repeat top left,
    url(/404/image2.png) no-repeat bottom right;
>>>>>>> dev
  background-size: 20vw, 15vw;

  div {
    margin-left: 5vw;
    width: 40.208vw;

    h1 {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 11.458vw;
      line-height: 12vw;
<<<<<<< HEAD
      color: #10293D;
=======
      color: #10293d;
>>>>>>> dev
    }

    h2 {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 3.646vw;
      line-height: 4vw;
<<<<<<< HEAD
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
=======
      color: #1f527c;
    }

    p {
      font-family: 'Urbanist';
      font-weight: 500;
      font-size: 1.875vw;
      line-height: 2.4vw;
      color: #bab5b5;

      span {
        color: #10293d;
>>>>>>> dev
      }
    }

    button {
      margin-top: 3vw;
      padding: 1vw 3vw;
<<<<<<< HEAD
      background: linear-gradient(45deg, #A7E6EB, #007FAA);
      color: #FFFFFF;
=======
      background: linear-gradient(45deg, #a7e6eb, #007faa);
      color: #ffffff;
>>>>>>> dev
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
