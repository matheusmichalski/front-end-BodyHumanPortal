<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '../../geral/Header.vue'
import { DateFormatter } from '/src/assets/utils.js' // Confirme o caminho correto

const router = useRouter()

// Variáveis reativas
const question = ref('')
const subject = ref('')
const responseMessage = ref('')
const emails = ref([])

// Funções de gerenciamento
const getEmails = async () => {
  try {
    // Carregar emails
    const emailData = await UserManeger.getEmails()
    emails.value = emailData
  } catch (error) {
    console.error('Erro ao carregar emails:', error)
  }
}

const sendQuestion = async () => {
  const apiKey = 'SUA_API_KEY_AQUI'
  const token = localStorage.getItem('token')

  if (!token) {
    responseMessage.value = 'Erro: Token de autenticação não encontrado.'
    return
  }

  try {
    // Requisição para OpenAI
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
            { role: 'user', content: question.value },
          ],
        }),
      },
    )

    if (aiResponse.ok) {
      const aiData = await aiResponse.json()
      const gptResponse = aiData.choices[0].message.content

      // Envio do email com resposta do GPT
      const emailResponse = await fetch(
        'http://localhost:3000/users/sendHelpEmail',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            question: question.value,
            subject: subject.value,
            response: gptResponse,
          }),
        },
      )

      if (emailResponse.ok) {
        responseMessage.value = 'E-mail enviado com sucesso!'
        getEmails() // Atualiza a lista de e-mails
      } else {
        const errorData = await emailResponse.json()
        responseMessage.value = 'Erro ao enviar o e-mail: ' + errorData.message
      }
    } else {
      const aiError = await aiResponse.json()
      responseMessage.value =
        'Erro ao se comunicar com a OpenAI: ' + aiError.message
    }
  } catch (error) {
    responseMessage.value = 'Erro ao enviar dúvida, tente novamente.'
    console.error(error)
  }
}

// Inicialização ao montar o componente
onMounted(() => {
  getEmails()
  if (!localStorage.getItem('token')) {
    router.push('/login') // Redireciona para login se o token não estiver disponível
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
          <router-link to="/login">
            <button id="logout" type="button" @click="UserManeger.logoutUser()">
              Logout
            </button>
          </router-link>
        </div>

        <!-- Support Form Section -->
        <div class="support-section">
          <h3>Envie sua dúvida:</h3>
          <p>
            Envie suas dúvidas relacionadas aos temas abordados no Portal do
            Corpo Humano. Nossa equipe lhe responderá o mais rápido possível.
          </p>

          <form @submit.prevent="sendQuestion">
            <label for="subject"><span>Assunto:</span></label>
            <textarea
              id="subject"
              v-model="subject"
              placeholder="Digite o assunto da sua dúvida..."
              required
            ></textarea>

            <label for="question">Descrição da dúvida:</label>
            <textarea
              id="question"
              v-model="question"
              placeholder="Digite sua dúvida..."
              required
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
          <p>{{ responseMessage }}</p>
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
              <tr v-for="email in emails" :key="email.id">
                <td>{{ email.subject }}</td>
                <td>{{ email.message }}</td>
                <td>{{ email.date }}</td>
              </tr>
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
  padding: 4vw 0 0 0;
}

.container {
  display: flex;
}

/* Sidebar */
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

/* Main Content */
.main-content {
  flex-grow: 1;
  padding: 20px;
}

/* div.cabecalho */
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

.account-section input[type='email'],
.account-section input[type='password'] {
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

  div.cabecalho {
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
  div.cabecalho h1 {
    font-size: 20px;
  }

  .account-section input[type='email'],
  .account-section input[type='password'] {
    font-size: 0.9rem;
  }

  .account-section button {
    font-size: 0.9rem;
  }
}

footer {
  text-align: center;
  margin-top: 3vw;
}

footer hr {
  border-top: 1px#010A5C solid;
  margin: 0 12vw 0 12vw;
}

footer p {
  margin: 2vw 0 1vw 0;
}

footer a {
  color: #010a5c;
  padding: 3vw 1vw 2vw 0;
  font-size: 1.25rem;
}
</style>
