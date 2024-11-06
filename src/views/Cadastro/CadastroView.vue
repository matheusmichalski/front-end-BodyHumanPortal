<script>
import "https://kit.fontawesome.com/043425478c.js";
</script>

<template>
  <main>
    <form action="#" method="post" id="cadastro">

      <div class="principal">
        <h1>Cadastro</h1> <!--título-->

        <p> <!--username-->
          <input type="text" name="username" id="username" placeholder="seu nome">
          <label for="username"><i class="fa-solid fa-user"></i></label>
        </p> <!--end username-->

        <p> <!--email-->
          <input type="email" name="email" id="email" placeholder="e-mail">
          <label for="email"><i class="fa-solid fa-envelope"></i></label>
        </p> <!--end email-->

        <div id="birthday"> <!--birthday date-->
          <p>
            <label for="day">Data de nascimento:</label>
            <input type="number" name="day" id="day" min="1" max="31">
          </p>
          <p><label for="month">Mês:</label>
            <select name="month" id="month">
              <option value="1">Janeiro</option>
              <option value="2">Fevereiro</option>
              <option value="3">Março</option>
              <option value="4">Abril</option>
              <option value="5">Maio</option>
              <option value="6">Junho</option>
              <option value="7">Julho</option>
              <option value="8">Agosto</option>
              <option value="9">Setembro</option>
              <option value="10">Outubro</option>
              <option value="11">Novembro</option>
              <option value="12">Dezembro</option>
            </select>
          </p>
          <p>
            <label for="year">Ano:</label>
            <input type="number" name="year" id="year" min="1" max="2024">
          </p>
        </div> <!--end birthday date-->

        <p> <!--gênero-->
          <label for="gender">Gênero:</label>
          <select name="gender" id="gender">
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Não quero">Prefiro não dizer</option>
          </select>
        </p> <!--end gênero-->

        <p> <!--password-->
          <input type="password" name="password" id="password" placeholder="senha" minlength="8">
          <label for="password"><i class="fa-solid fa-lock"></i></label>
        </p> <!--end password-->

        <p> <!--confirm password-->
          <input type="password" name="confirmPassword" id="confirmPassword" placeholder="confirme sua senha"
            minlength="8">
          <label for="confirmPassword"><i class="fa-solid fa-key"></i></label>
        </p> <!--end confirm password-->

        <button type="submit">Cadastre-se</button>
        <p>Já tem uma conta? <router-link to="/login">Faça login</router-link></p>
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

div#birthday {
  display: flex;
  justify-content: center;
  margin: 10px 0;
  flex-direction: column;
}

div#birthday p {
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input[type="text"],
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
  margin: 0.5vw;
}
</style>
