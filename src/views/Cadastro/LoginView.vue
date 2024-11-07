<script setup>
import router from '@/router'
import Header from '../../geral/Header.vue'
import 'https://kit.fontawesome.com/043425478c.js'

import { ref, onMounted } from 'vue'

const userLogin = ref({
  email: '',
  password: '',
})

async function login(event) {
  event.preventDefault() // Evita o recarregamento da página

  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userLogin.value.email,
        password: userLogin.value.password,
      }),
    })

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const token = data.token
      console.log(token)

      localStorage.setItem('token', token)
      alert('Login efetuado com sucesso!')
      router.push('/dashboard')
    } else {
      alert('Erro ao efetuar login.')
    }
  } catch (error) {
    alert('Erro ao efetuar login.')
    console.error(error)
  }
}
</script>

<template>
  <Header />
  <main>
    <form id="userLogin" @submit="login">
      <div class="principal">
        <h1>Login</h1>
        <p>
          <input
            type="email"
            v-model="userLogin.email"
            id="email"
            required
            placeholder="e-mail"
          />
          <label for="email"><i class="fa-solid fa-user"></i></label>
        </p>
        <p>
          <input
            type="password"
            v-model="userLogin.password"
            id="password"
            required
            placeholder="senha"
          />
          <label for="password"><i class="fa-solid fa-lock"></i></label>
        </p>
        <button type="submit">Login</button>
        <p>Não tem uma conta? <a href="cadastro.html">Registre-se</a></p>
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
  background-color: #010a5c;
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

input[type='email'],
input[type='password'],
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
