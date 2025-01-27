<script setup></script>

<template>
  <section class="is-mobile">
    <div class="logo">
      <img src="../../../public/logo.png" alt="Logo do portal do corpo humano" />
    </div>

    <h1>Email para recuperação</h1>

    <ul>
      <li>
        <p>
          Essa conta está vinculada ao email xyz******@gmail.com. Confirme o seu email no campo
          abaixo para receber um código de recuperação:
        </p>
      </li>
      <li><img src="#" alt="Envelope"></li>
    </ul>

    <form action="#">
      <div class="campoEmail">
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

  .logo {
    justify-content: center;
    width: 50%;
  }
  h1 {
    color: #1663a3;
    font-size: 2rem;
  }
  ul li {
    p {
    color: #10293d;
  }
  }
  .campoEmail {
    label {
      color: #10293d;
    }
    input {
      border-bottom: #10293d;
    }
  }
}
</style>
