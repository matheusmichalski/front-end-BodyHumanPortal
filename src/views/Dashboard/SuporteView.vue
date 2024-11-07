<script setup>
import Header from '../../geral/Header.vue'
import { DateFormatter } from '/src/assets/utils.js' // Certifique-se de que o caminho esteja correto

// Função para carregar os e-mails quando a página é carregada
window.onload = UserManeger.getEmails()
window.onload = RedirectManager.redirectToLogin()
// Função para enviar a dúvida através do formulário
document
  .getElementById('supportForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault() // Evita o comportamento padrão do formulário
    const question = document.getElementById('question').value // Pegando a pergunta do usuário
    const subject = document.getElementById('subject').value // Corrigindo typo (subjetc -> subject)
    const responseMessage = document.getElementById('responseMessage')
    const apiKey =
      'sk-ztoy7WK0Yxu97qC9rXivxIh0vtd_WfuG3HxCZ7eyc9T3BlbkFJ9SY5pgTl7tZTkzih66d2a5YTVGAINSO8UFBNZsD70A'

    try {
      const token = localStorage.getItem('token') // Certifique-se de que o token está armazenado
      if (!token) {
        responseMessage.textContent =
          'Erro: Token de autenticação não encontrado.'
        return
      }

      // Envia a requisição para a API da OpenAI
      const aiResponse = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
              { role: 'system', content: 'You are a helpful assistant.' },
              { role: 'user', content: question }, // Substituindo userMessage por question
            ],
          }),
        },
      )

      // Verifica se a requisição à OpenAI foi bem-sucedida
      if (aiResponse.ok) {
        const aiData = await aiResponse.json()
        const gptResponse = aiData.choices[0].message.content

        // Faz a segunda requisição para enviar o email com a resposta do GPT
        const emailResponse = await fetch(
          'http://localhost:3000/users/sendHelpEmail',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`, // Enviar o token de autenticação
            },
            body: JSON.stringify({
              question: question, // Pergunta do usuário
              subject: subject, // Assunto do e-mail
              response: gptResponse,
              request: question, // Mensagem do e-mail vinda do GPT
            }),
          },
        )

        // Verifica se o envio de e-mail foi bem-sucedido
        if (emailResponse.ok) {
          const data = await emailResponse.json()
          alert('E-mail enviado com sucesso!')
          UserManeger.getEmails() // Recarregar a lista de e-mails
        } else {
          const errorData = await emailResponse.json()
          responseMessage.textContent =
            'Erro ao enviar o e-mail: ' + errorData.message
        }
      } else {
        const aiError = await aiResponse.json()
        responseMessage.textContent =
          'Erro ao se comunicar com a OpenAI: ' + aiError.message
      }
    } catch (error) {
      responseMessage.textContent = 'Erro ao enviar dúvida, tente novamente.'
      console.error(error)
    }
  })
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
          <h1>Suporte</h1>
          <router-link to="/login"
            ><button
              id="logout"
              type="button"
              onclick="UserManeger.logoutUser()"
            >
              Logout
            </button></router-link
          >
        </div>

        <!-- Support Form Section -->
        <div class="support-section">
          <h3>Envie sua dúvida:</h3>
          <p>
            Envie suas dúvidas relacionadas aos temas abordados no Portal do
            Corpo Humano. Nossa equipe lhe responderá o mais rápido possível.
          </p>

          <form id="supportForm">
            <label for="subject"><span>Assunto:</span></label>
            <textarea
              id="subject"
              placeholder="Digite o assunto da sua dúvida..."
              required
            ></textarea>

            <label for="question">Descrição da dúvida:</label>
            <textarea
              id="question"
              placeholder="Digite sua dúvida..."
              required
            ></textarea>

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
        <footer>
          <hr />
          <p>
            &copy; 2024 Todos os direitos reservados - Portal do Corpo Humano
          </p>
          <a href="https://www.instagram.com/portal_corpohumano/"
            ><span class="fa-brands fa-instagram"></span
          ></a>
          <a href="mailto:portalcorpohumano@gmail.com"
            ><span class="fa-regular fa-envelope"></span
          ></a>
        </footer>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 1.5vw 0 0 0;
}

.container {
  display: flex;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50;
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

footer {
  text-align: center;
  width: 100%;
  color: #34495e;
}

footer p {
  margin: 2vw 0 1vw 0;
}

footer a {
  color: #010a5c;
  padding: 3vw 1vw 0 0;
  font-size: 1.25rem;
}
</style>
