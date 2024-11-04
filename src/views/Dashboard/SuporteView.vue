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

        <header>
          <h1>Suporte</h1>
          <button id="logout" type="button" onclick="UserManeger.logoutUser()">Logout</button>
        </header>

        <!-- Support Form Section -->
        <div class="support-section">
          <h3>Envie sua dúvida:</h3>
          <p>
            Envie suas dúvidas relacionadas aos temas abordados no Portal do Corpo Humano. Nossa equipe lhe
            responderá o mais rápido possível.
          </p>

          <form id="supportForm">
            <label for="subject"><span>Assunto:</span></label>
            <textarea id="subject" placeholder="Digite o assunto da sua dúvida..." required></textarea>

            <label for="question">Descrição da dúvida:</label>
            <textarea id="question" placeholder="Digite sua dúvida..." required></textarea>

            <button type="submit">Enviar</button>
          </form>
          <p id="responseMessage"></p>
        </div>

        <!-- Sent Emails Section -->
        <div class="emails-section">
          <h3>Últimas dúvidas enviadas</h3>

          <table id="emailsTable">
            <thead>
              <tr>
                <th>Assunto</th>
                <th>Mensagem</th>
                <th>Data de Envio</th>
              </tr>
            </thead>
            <tbody>
              <!-- Os e-mails serão carregados aqui via JavaScript -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
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
    font-size: 1.5rem;
}

.support-section {
    margin-top: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.support-section h3 {
    margin-bottom: 15px;
    font-size: 18px;
}

.support-section form {
    display: flex;
    flex-direction: column;
}

.support-section label {
    font-size: 16px;
    margin: 20px 0 7px 0;
    font-weight: 600;
}

.support-section textarea#subject {
    width: 100%;
    /* Reduzido de 100% */
    margin: 5px 0 20px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    resize: vertical;
    min-height: 30px;
    font-size: 1.03rem;
}

.support-section textarea#question {
    width: 100%;
    /* Mantém o campo de descrição no tamanho normal */
    margin: 5px 0 20px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    resize: vertical;
    min-height: 120px;
    font-size: 1.03rem;
}

.support-section button {
    margin: 0 auto;
    justify-content: center;
    width: 100%;
    padding: 8px;
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.05rem;
}

.support-section button:hover {
    background-color: #34495e;
}

.emails-section {
    margin-top: 30px;
}

.emails-section h3 {
    font-size: 18px;
    margin-bottom: 15px;
}

.emails-section table {
    width: 100%;
    border-collapse: collapse;
}

.emails-section th,
.emails-section td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ccc;
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
