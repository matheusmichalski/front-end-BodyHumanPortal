<script>
import "https://kit.fontawesome.com/043425478c.js";
</script>

<template>
  <main>
    <form action="#" method="post">

      <div class="principal">
        <h1>Login</h1> <!--título-->

        <p> <!--email-->
          <input type="email" name="email" id="email" required placeholder="e-mail">
          <label for="email"><i class="fa-solid fa-user"></i></label>
        </p> <!--end email-->

        <p> <!--password-->
          <input type="text" name="password" id="password" required placeholder="senha">
          <label for="password"><i class="fa-solid fa-lock"></i></label>
        </p> <!--end password-->

        <button type="submit">Login</button>
        <p>Não tem uma conta? <router-link to="/cadastro">Registre-se</router-link></p>
      </div>
    </form>
  </main>
</template>

<style scoped>
main {
  background-color: #010A5C;
  font-family: "Varela Round", sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form {
  display: flex;
  justify-content: center;
}

div.principal {
  width: 600px;
  /* Largura aumentada */
  height: auto;
  /* Permite que a altura se ajuste ao conteúdo */
  border-radius: 20px;
  background-color: white;
  text-align: center;
  padding: 30px;
  /* Espaço interno */
}

button {
  color: white;
  width: 350px;
  /* Aumentei a largura do botão */
  height: 45px;
  /* Aumentei a altura do botão */
  background-color: #010A5C;
  border: solid #000e91 1px;
  border-radius: 20px;
  font-size: 18px;
  /* Aumentei o tamanho da fonte do botão */
  cursor: pointer;
  margin-top: 15px;
  /* Espaço acima do botão */
}

button:hover {
  background-color: #020528;
}

input[type="email"],
input[type="password"],
select {
  width: 85%;
  /* Aumentei a largura dos inputs para preencher mais a caixa */
  height: 45px;
  /* Aumentei a altura das caixas de texto */
  font-size: 16px;
  /* Aumentei o tamanho da fonte dentro dos inputs */
  padding: 12px;
  margin: 5px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
}

input:focus,
select:focus {
  border-color: #2265a9;
  outline: none;
}

i {
  margin: 0 0 0 5px;
  font-size: 18px;
  /* Ajustei o tamanho do ícone */
}

p {
  margin: 1vw;
}
</style>
