<template>
  <footer class="is-mobile">
    <hr>
    <p>&copy; 2024 Todos os direitos reservados - Portal do Corpo Humano</p>
    <nav>
      <ul>
        <li><a href="https://www.instagram.com/portal_corpohumano/"><span class="fa-brands fa-instagram"></span></a>
        </li>
        <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=portalcorpohumano@gmail.com" target="_blank"><span
              class="fa-regular fa-envelope"></span></a></li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
footer {
  margin-top: -10vw;
  padding-bottom: 20vw;

  hr {
    border: 0.001vw solid #034F85;
    margin: 3vw 9vw 8vw 8vw;
    text-align: center;
  }

  p {
    font-family: 'Inter';
    font-size: clamp(0.3rem, 4vw, 1.5rem);
    padding: 0 8vw;
    text-align: center;
  }

  nav {
    ul {
      display: flex;
      justify-content: center;

      li {
        padding: 3vw 0 5vw 3vw;

        a {
          color: #103F65;
          font-size: clamp(0.5rem, 5vw, 2rem);
        }
      }
    }
  }
}
</style>
