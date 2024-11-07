<script setup>
import Header from '../../geral/Header.vue'
import { ref } from 'vue'
import { DateFormatter } from '/src/assets/utils.js'
import 'https://kit.fontawesome.com/043425478c.js'

const name = ref('')
const email = ref('')
const day = ref('')
const month = ref('')
const year = ref('')
const password = ref('')
const confirmPassword = ref('')

const validEmails = [
  'yahoo',
  'gmail',
  'hotmail',
  'outlook',
  'bol',
  'uol',
  'icloud',
  'protonmail',
  'tutanota',
  'yandex',
  'zoho',
  'aol',
  'gmx',
  'mail',
  'terra',
  'ig',
  'live',
  'msn',
  'me',
  'mac',
  'inbox',
  'fastmail',
  'yopmail',
  'disroot',
  'riseup',
  'countermail',
  'securenym',
  'elude',
  'autistici',
  'lavabit',
  'mailbox',
  'openmailbox',
  'posteo',
  'tormail',
  'onionmail',
]

function validateEmail(email) {
  if (!email.includes('@') || !email.includes('.')) {
    alert("Email inválido: faltando '@' ou '.'")
    return false
  }

  const domain = email.split('@')[1]
  const provider = domain.split('.')[0]
  if (!validEmails.includes(provider)) {
    alert('Email inválido: provedor não reconhecido.')
    return false
  }
  return true
}

async function cadastro() {
  if (!validateEmail(email.value)) {
    console.log('Email inválido')
    return
  }

  if (password.value !== confirmPassword.value) {
    alert('Senha inválida: as senhas não coincidem.')
    return
  }

  const birthday = DateFormatter.convertToISO(
    day.value,
    month.value,
    year.value,
  )

  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        birthday,
        email: email.value,
        password: password.value,
      }),
    })

    if (response.ok) {
      alert('Usuário cadastrado com sucesso!')
      await fetch('http://localhost:3000/user/sendWelcome', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.value }),
      })
      window.location.href = './login.html'
    } else {
      alert('Erro ao cadastrar usuário.')
    }
  } catch (error) {
    console.error('Erro ao enviar solicitação:', error)
  }
}
</script>

<template>
  <Header />
  <main>
    <form @submit.prevent="cadastro">
      <div class="principal">
        <h1>Cadastro</h1>

        <p>
          <input type="text" v-model="name" placeholder="Seu nome" required />
          <label><i class="fa-solid fa-user"></i></label>
        </p>

        <p>
          <input type="email" v-model="email" placeholder="E-mail" required />
          <label><i class="fa-solid fa-envelope"></i></label>
        </p>

        <div id="birthday">
          <div>
            <p>
              <label>Data de Nascimento:</label>
            </p>
          </div>
          <div class="date-inputs">
            <input
              type="number"
              v-model="day"
              min="1"
              max="31"
              placeholder="Dia"
              required
            />
            <select v-model="month" required>
              <option value="" disabled selected>Mês</option>
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
            <input
              type="number"
              v-model="year"
              min="1900"
              max="2024"
              placeholder="Ano"
              required
            />
          </div>
        </div>

        <p>
          <input
            type="password"
            v-model="password"
            placeholder="Senha"
            minlength="8"
            required
          />
          <label><i class="fa-solid fa-lock"></i></label>
        </p>

        <p>
          <input
            type="password"
            v-model="confirmPassword"
            placeholder="Confirmar Senha"
            minlength="8"
            required
          />
          <label><i class="fa-solid fa-lock"></i></label>
        </p>

        <button type="submit">Cadastre-se</button>
        <p>Já tem uma conta? <a href="login.html">Faça login</a></p>
      </div>
    </form>
  </main>
</template>

<style scoped>
main {
  background-color: #010a5c;
  font-family: 'Varela Round', sans-serif;
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
  border-radius: 20px;
  background-color: white;
  text-align: center;
  padding: 30px;
}

div.date-inputs {
  display: flex;
  justify-content: space-between;
}

button {
  color: white;
  width: 350px;
  height: 45px;
  background-color: #010a5c;
  border: solid #000e91 1px;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 15px;
}

button:hover {
  background-color: #020528;
}

input[type='email'],
input[type='password'],
select {
  width: 85%;
  height: 45px;
  font-size: 16px;
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
}

p {
  margin: 1vw;
}

footer {
  text-align: center;
  width: 100%;
  color: #fff;
  background-color: #010a5c;
  padding: 2vw 0 0 0;
}

footer p {
  margin: 2vw 0 1vw 0;
}

footer a {
  color: #fff;
  padding: 3vw 1vw 0 0;
  font-size: 1.25rem;
}
</style>
