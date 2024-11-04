<template>
  <main>
    <div class="container">

      <!-- Sidebar -->
      <div class="sidebar">
        <h2>Portal do Corpo Humano</h2>
        <ul>
          <li><a href="Dashboard.vue">Dashboard</a></li>
          <li><a href="Suporte.vue">Suporte</a></li>
          <li><a href="Seguranca.vue">Segurança</a></li>
        </ul>
      </div>

      <!-- Main Content -->
      <div class="main-content">
        <!-- Header -->

        <header>
          <h1>Minha Conta</h1>
          <button id="logout" type="button" onclick="UserManeger.logoutUser()">Logout</button>
        </header>

        <!-- Update Email Section -->
        <div class="account-section">
          <h3>Atualizar E-mail</h3>

          <form id="emailForm">
            <label for="email">Novo E-mail:</label>
            <input type="email" id="email" placeholder="Digite o novo e-mail..." required />
            <button type="submit">Atualizar E-mail</button>
          </form>
        </div>

        <!-- Update Password Section -->
        <div class="account-section">
          <h3>Atualizar Senha</h3>

          <form id="passwordForm">
            <label for="current-password">Senha Atual:</label>
            <input type="password" id="current-password" placeholder="Digite sua senha atual..." required />
            <label for="new-password">Nova Senha:</label>
            <input type="password" id="new-password" placeholder="Digite sua nova senha..." required />
            <button type="submit">Atualizar Senha</button>
          </form>
        </div>

        <div class="account-section delete-account-section">
          <h3>Excluir Conta</h3>
          <p>Esta ação é irreversível. Você realmente deseja excluir sua conta?</p>
          <button id="delete-account" type="button">Excluir sua
            Conta</button>
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

/* Sidebar */
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

/* Main Content */
.main-content {
    flex-grow: 1;
    padding: 20px;
}

/* Header */
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

/* Account Section */
.account-section {
    margin-top: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.account-section h3 {
    margin-bottom: 15px;
    font-size: 18px;
}

.account-section form {
    display: flex;
    flex-direction: column;
}

.account-section label {
    margin-bottom: 5px;
    font-size: 16px;
}

.account-section input[type="email"],
.account-section input[type="password"] {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    font-size: 1rem;
}

.account-section button {
    background-color: #2c3e50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
}

.account-section button:hover {
    background-color: #1abc9c;
}

button {
    padding: 0.5vw 1vw 0.5vw 1vw;
    border-radius: 20px;
    background-color: #2c3e50;
    color: white;
}

button:hover {
    background-color: #34495e;
}

/* Responsividade */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }

    .sidebar {
        width: 100%;
        height: auto;
    }

    .main-content {
        padding: 10px;
    }

    header {
        flex-direction: column;
        align-items: flex-start;
    }
}

.delete-account-section {
    margin-top: 20px;
}

.delete-account-section p {
    margin-bottom: 15px;
    font-size: 16px;
    color: #e74c3c;
    /* Vermelho para indicar alerta */
}

.delete-account-section button {
    background-color: #e74c3c;
    /* Cor vermelha para indicar exclusão */
}

.delete-account-section button:hover {
    background-color: #c0392b;
    /* Vermelho mais escuro ao passar o mouse */
}


@media (max-width: 480px) {
    header h1 {
        font-size: 20px;
    }

    .account-section input[type="email"],
    .account-section input[type="password"] {
        font-size: 0.9rem;
    }

    .account-section button {
        font-size: 0.9rem;
    }
}
</style>
