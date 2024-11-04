<script>
export default {
  name: 'app'
};
</script>

<template>
  <footer>
    <hr>
    <p>&copy; 2024 Todos os direitos reservados - Portal do Corpo Humano</p>
    <a href="https://www.instagram.com/portal_corpohumano/"><span class="fa-brands fa-instagram"></span></a>
    <a href="mailto:portalcorpohumano@gmail.com"><span class="fa-regular fa-envelope"></span></a>
  </footer>
</template>

<style scoped>
footer {
    text-align: center;
    margin: 2vw 0 0 0;
    background-color: #C6E1F4;
    width: 100%;
    height: 100%;
    padding: 0 0 2vw 0;
}

footer hr {
    border-top: 1px#010A5C solid;
    margin: 0 12vw 0 12vw;
}

footer p {
    margin: 2vw 0 1vw 0;
}

footer a {
    color: #010A5C;
    padding: 3vw 1vw 2vw 0;
    font-size: 1.25rem;
}
</style>
