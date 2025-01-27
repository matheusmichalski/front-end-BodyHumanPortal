<script setup></script>

<template>
  <section class="is-mobile">
    <div class="logo">
      <img src="../../../public/logo.png" alt="Logo" />
    </div>

    <h1>Email para recuperação</h1>

    <ul>
      <li>
        <p>
          Essa conta está vinculada ao email xyz******@gmail.com. Confirme o seu email no campo
          abaixo para receber um código de recuperação:
        </p>
      </li>
      <li><img src="#" alt="Email"></li>
    </ul>

    <form action="#">
      <div class="emailFild">
        <label for="Email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email" />
      </div>
      <button>Enviar código</button>
    </form>
  </section>
</template>

<style scoped>
section.is-mobile {
  display: block;
  justify-content: center;
  text-align: center;

  .logo {
    margin: 2vw 0 5vw 0;

    img {
      height: 20vw;
      width: auto;
    }
  }
  h1 {
    color: #1663a3;
    font-size: 2rem;
    font-weight: 900;
  }
  ul li {
    p {
      margin: 5vw 0 5vw 0;
    color: #10293d;
  }
  }
  .emailFild {
    label {
      color: #10293d;
    }
    input {
      border-bottom: #10293d;
    }
  }
}
</style>
