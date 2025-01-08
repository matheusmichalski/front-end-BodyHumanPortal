function authToken(to, from, next) {
  const token = localStorage.getItem('token')

  if (token) {
    next() // Permite a navegação se o token estiver presente
  } else {
    next('/login') // Redireciona diretamente para a rota de login
  }
}

export default authToken
