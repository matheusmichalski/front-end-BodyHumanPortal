<script setup>

</script>

<template>
  <footer class="is-desktop">
    <p>&copy; 2024 Todos os direitos reservados - Portal do Corpo Humano</p>
    <ul>
      <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
      <li><a href="#"><i class="fa-regular fa-envelope"></i></a></li>
    </ul>
  </footer>
</template>

<style scoped>
footer {
  border-top: 2px solid #10293D;
  margin: 2vw;
  padding: 1vw;

  p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 1vw;
    color: #10293D;
    text-align: center;
  }

  ul {
    display: flex;
    justify-content: center;
    margin-top: 1vw;

    li {
      margin: 0 1vw 0 1vw;

      i {
        font-size: 1.5vw;
        color: #10293D;
      }
    }
  }
}
</style>
