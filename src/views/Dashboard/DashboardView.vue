<template>
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

        <header>
          <h1 id="welcome">Bem-vindo, Usuário</h1>
          <router-link to="/login"><button id="logout" type="button" onclick="UserManeger.logoutUser()">Logout</button></router-link>
        </header>

        <!-- Account Details Section -->
        <div class="dashboard">
          <h1>Detalhes da Conta</h1>

          <div class="user-info">
            <p><strong>Nome:</strong> <span id="name"></span></p>
            <p><strong>Data de Nascimento:</strong> <span id="birthday"></span></p>
            <p><strong>Email:</strong> <span id="email"></span></p>
          </div>

          <div id="error-message" class="error"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: #f4f4f9;
}

.container {
  display: flex;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50;
  height: 100vh;
  padding: 20px;
  color: #fff;
}

.sidebar h2 {
  text-align: center;
  margin-bottom: 30px;
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

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ecf0f1;
  padding: 15px;
  border-radius: 10px;
}

header h1 {
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

button:hover {
  background-color: #34495e;
  cursor: pointer;
}
</style>
