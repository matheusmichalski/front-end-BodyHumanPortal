<script setup>

</script>

<template>
  <section class="is-desktop">
    <h2>Sistemas do Corpo</h2>
    <p>O corpo humano é uma máquina extraordinária, composta por sistemas interligados que trabalham juntos para manter
      o equilíbrio e a saúde.</p>
    <p>Aqui, você poderá explorar de forma clara e simples os principais sistemas do corpo, entendendo suas funções e
      como eles se conectam para garantir o funcionamento da nossa vida. </p>

    <ul>
      <li>
        <RouterLink to="/sistema/digestivo"><img src="/public/home/icons/digestive.png" alt="Sistema Digestivo Icon">
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/sistema/cardiovascular"><img src="/public/home/icons/circulatory.png"
            alt="Sistema Circulatório Icon"></RouterLink>
      </li>
      <li>
        <RouterLink to="/sistema/osseo"><img src="/public/home/icons/bone.png" alt="Sistema Ósseo Icon"></RouterLink>
      </li>
      <li>
        <RouterLink to="/sistema/nervoso"><img src="/public/home/icons/nervous.png" alt="Sistema Nervoso Icon">
        </RouterLink>
      </li>
    </ul>

    <img src="/public/home/detailSquare-dark.png" alt="Detalhe" id="detail-dark">
    <img src="/public/home/bodyhuman.png" alt="Corpo Humano" id="body">

    <ul>
      <li>
        <RouterLink to="/sistema/muscular"><img src="/public/home/icons/muscle.png" alt="Sistema Muscular Icon">
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/sistema/reprodutor-feminino"><img src="/public/home/icons/reproductive.png"
            alt="Sistema Reprodutor Icon"></RouterLink>
      </li>
      <li>
        <RouterLink to="/sistema/respiratorio"><img src="/public/home/icons/respiratory.png"
            alt="Sistema Respiratório Icon"></RouterLink>
      </li>
      <li>
        <RouterLink to="/sistema/urinario"><img src="/public/home/icons/urinary.png" alt="Sistema Urinário Icon">
        </RouterLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  h2 {
    font-family: 'Tilt Warp';
    font-weight: 400;
    font-size: 50px;
    line-break: 40px;
    color: #103F65;
    text-align: center;
    margin-bottom: 5vw;
  }

  p {
    font-family: 'Tilt Neon';
    font-weight: 400;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
    margin: 2vw 5vw 2vw 5vw;
  }

  ul {
    display: flex;
    justify-content: center;

    li {
      margin: 2vw;
      width: 189px;
      height: 161px;
      background: linear-gradient(45deg, #103F65, #47ABC6);
      border-radius: 24px;
      text-align: center;

      img {
        padding: 2vw;
      }
    }
  }

  #detail-dark{
    position: absolute;
    left: 0;
    top: 1900px;
  }

  #body {
    margin-left: 30vw;
  }
}
</style>
