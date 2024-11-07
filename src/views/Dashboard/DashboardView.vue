<script setup>
import Header from '../../geral/Header.vue'
import imc from '../Calculadora/IMCView.vue'
import { RedirectManager, UserManeger, DateFormatter } from "../../../public/util.js";

RedirectManager.redirectToLogin();
window.UserManeger = UserManeger;
function logoutUser() {
  UserManeger.logoutUser();
}

window.onload = async function getUserEspecs() {
  const nameElement = document.getElementById("name");
  const firstName = document.getElementById("welcome");
  const birthdayElement = document.getElementById("birthday");
  const emailElement = document.getElementById("email");
  const logoutButton = document.getElementById("logout");
  const errorMessage = document.getElementById("error-message");

  // Adicionar o listener fora do bloco try para garantir que ele sempre será adicionado
  // logoutButton.addEventListener("click", function removeToken(event) {
  //   event.preventDefault();

  //   console.log("Logout clicado");

  //   localStorage.removeItem("token");
  //   location.href = "/public/login.html";

  //   // Redirecionar ou tratar após logout
  // });

  // Pegar o token Bearer do localStorage
  const token = localStorage.getItem("token");

  RedirectManager.redirectToLogin();

  console.log(token);

  try {
    const response = await fetch("http://localhost:3000/logged-user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Erro na requisição. Status: " + response.status);
    }

    const data = await response.json();

    // Converter a data de nascimento de ISO para DD/MM/YYYY
    firstName.textContent = `Bem vindo, ${data.name.split(" ")[0]}`;
    nameElement.textContent = data.name;
    birthdayElement.textContent = DateFormatter.formatBirthday(data.birthday);
    emailElement.textContent = data.email;
  } catch (error) {
    errorMessage.textContent = error.message;
  }
};

</script>

<template>
  <Header />
  <main>
    <div class="container">
      <!-- Sidebar -->
      <div class="sidebar">
        <h2>Portal do Corpo Humano</h2>
        <ul>
          <li><router-link to="/dashboard">Dashboard</router-link></li>
          <li><router-link to="/suporte">Suporte</router-link></li>
          <li><router-link to="/seguranca">Segurança</router-link></li>
        </ul>
      </div>

      <!-- Main Content -->
      <div class="main-content">

        <div class="cabecalho">
          <h1 id="welcome">Bem-vindo, {{ nameElement }}</h1>
          <router-link to="/login"><button id="logout" type="button"
              onclick="UserManeger.logoutUser()">Logout</button></router-link>
        </div>

        <!-- Account Details Section -->
        <div class="dashboard">
          <h1>Detalhes da Conta</h1>

          <div class="user-info">
            <p>Nome: {{ nameElement }}</p>
            <p>Data de Nascimento: {{ birthdayElement }}</p>
            <p>Email: {{ emailElementElement }}</p>
          </div>

          <div id="error-message" class="error"></div>
        </div>
        <div class="links">
          <h2>Links Úteis</h2>
          <div>
            <imc />
            <RouterLink to="/feedback" style="background-color: rgb(1, 10, 92); color: rgb(255, 255, 255); cursor: pointer;
  padding: 6px 10px; border-radius: 5px; text-decoration: none;">Avalie-nos</RouterLink>
          </div>
        </div>
        <footer>
          <hr>
          <p>&copy; 2024 Todos os direitos reservados - Portal do Corpo Humano</p>
          <a href="https://www.instagram.com/portal_corpohumano/"><span class="fa-brands fa-instagram"></span></a>
          <a href="mailto:portalcorpohumano@gmail.com"><span class="fa-regular fa-envelope"></span></a>
        </footer>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 0.5vw 0 0 0;
}

.container {
  display: flex;
  padding: 1.3vw 0 0 0;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50;
  height: 100vw;
  padding: 20px;
  color: #fff;
}

.sidebar h2 {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 3vw;
}

.sidebar ul {
  list-style: none;
}

.sidebar ul li {
  margin-bottom: 20px;
}

.sidebar ul li a {
  color: #fff;
  text-decoration: none;
  display: block;
  padding: 10px;
  background-color: #34495e;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.sidebar ul li a:hover {
  background-color: #1abc9c;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
}

div.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ecf0f1;
  padding: 15px;
  border-radius: 10px;
}

div.cabecalho h1 {
  font-size: 24px;
}

.dashboard {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.dashboard h1 {
  margin-bottom: 20px;
  font-size: 20px;
  color: #2c3e50;
}

.user-info p {
  margin-bottom: 10px;
  font-size: 16px;
}

.user-info span {
  color: #2c3e50;
}

button {
  padding: 0.5vw 1vw 0.5vw 1vw;
  border-radius: 20px;
  background-color: #2c3e50;
  color: white;
}

div.links h2 {
  background-color: #2c3e50;
  border-radius: 20px;
  padding: 1vw;
  margin: 2vw 0 0 0;
  color: #fff;
  font-size: 18px;
  text-align: center;
}

div.links div {
  text-align: center;
}

button:hover {
  background-color: #34495e;
  cursor: pointer;
}

footer {
  margin: 2vw 0 0 0;
  text-align: center;
  width: 100%;
  color: #34495e;
}

footer p {
  margin: 2vw 0 1vw 0;
}

footer a {
  color: #010A5C;
  padding: 3vw 1vw 0 0;
  font-size: 1.25rem;
}
</style>
