<script>
export default {
  name: 'app'
};

const sistemas = [];

const fetchSvg = (image) => {
  fetch(image.src)
    .then((response) => response.text())
    .then((response) => {
      const span = document.createElement('span');
      span.innerHTML = response;
      const inlineSvg = span.getElementsByTagName('svg')[0]
      if (inlineSvg) {
        console.log("SVG encontrado")
        inlineSvg.setAttribute('id', 'svg-human');
        image.parentNode.replaceChild(inlineSvg, image);
        getActions();
      }
      else {
        console.error("Erro")
      }
      return true;
    })
    .catch((error) => {
      console.error("erro ao carregar imagem: ", error);
    })
}
const getActions = () => {
  const system = document.getElementsByClassName('sistemas');
  console.log("Elementos encontrados", system);
  for (let i = 0; i < system.length; i++) {
    system[i].onclick = () => { sistemaClicked(system[i]); };
  }
  getsistemas();
};

const getsistemas = () => {
  fetch('index.json')
    .then((response) => response.text())
    .then((response) => {
      sistemas.push(...JSON.parse(response));
      console.log("Dados encontrados", sistemas)
    });
};

const sistemaClicked = (sistema) => {
  console.log("sistema encontrado");
  const code = sistema.getAttribute('code');
  console.log("Code do sistema:", code)
  const uf = sistemas.find(sistema => sistema.code === code);
  if (uf && uf.url) {
    window.location.href = uf.url;
  }
  if (!uf) {
    console.log("Não encontrado");
    return;
  }
  fillContent(uf);
};

const fillContent = ({ nome, descricao }) => {
  const name = document.getElementById('sistema');
  const description = document.getElementById('descricao');
  console.log(nome, descricao);
  name.textContent = nome;
  description.innerHTML = descricao;
};


Promise.all([
  fetch("script/headerAndFooter/header.html").then(response => response.text()),
  fetch("script/headerAndFooter/footer.html").then(response => response.text())
]).then(([headerHTML, footerHTML]) => {
  document.getElementById("header").innerHTML = headerHTML;
  document.getElementById("footer").innerHTML = footerHTML;
}).catch(error => console.error('Erro ao carregar header/footer:', error));
</script>

<template>
  <header></header>
  <!--exportar script/index.js-->
  <main>

    <section class="banner"> <!--banner-->
      <img src="../img/home/banner/banner.png" alt="banner">
    </section> <!--end banner-->

    <section class="sistemas"> <!--sistema-->
      <div class="texto-sistema"> <!--texto-sistema-->
        <h1>Sistemas do Corpo</h1>
        <p>O corpo humano é uma máquina extraordinária, composta por sistemas interligados que trabalham juntos
          <br>
          para manter o equilíbrio e a saúde.
        </p>
        <p>Aqui, você poderá explorar de forma clara e simples os principais sistemas do corpo, entendendo suas
          <br>
          funções e como eles se conectam para garantir o funcionamento da nossa vida.
        </p>
      </div> <!--end texto-sistema-->

      <div class="botoes-svg-sistemas"> <!--botoes-svg-sistemas-->

        <div class="botoes-sistema"> <!--botoes-sistema-->
          <aside>
            <ul>
              <li><router-link to="/nervoso">SISTEMA NERVOSO</router-link></li>
              <li><router-link to="/digestorio">SISTEMA DIGESTÓRIO</router-link></li>
              <li><router-link to="/esqueletico">SISTEMA ESQUELÉTICO</router-link></li>
              <li><router-link to="/urinario">SISTEMA URINÁRIO</router-link></li>
              <li><router-link to="/reprodutor-feminino">SISTEMA REPRODUTOR</router-link></li>
              <li><router-link to="/respiratorio">SISTEMA RESPIRATÓRIO</router-link></li>
              <li><router-link to="/cardiovascular">SISTEMA CARDIOVASCULAR</router-link></li>
            </ul>
          </aside>
        </div> <!--end botoes-sistema-->

        <div class="svg-sistemas"> <!--svg-sistemas-->

          <div id="container"> <!--container-->
            <img src="../img/home/svg/index.svg" onload="fetchSvg(this)">

            <div id="text"> <!--text-->
              <h1 id="sistema"></h1>
              <p id="descricao"></p>
            </div> <!--end text-->

          </div> <!--end container-->
        </div> <!--end svg-sistemas-->
      </div> <!--end botoes-svg-sistemas-->
    </section> <!--end sistema-->
  </main>

  <!--importar header.js-->
</template>

<style scoped>
/*========================
    Formatação cabeçalho
==========================*/

header {
  padding: 1vw 0 1vw 0;
  width: 100%;
  box-shadow: 0px 1px 10px black;
  position: fixed;
  background-color: #E2F2F0;
  top: 0%;
  color: #010A5C;
  z-index: 2;
}

header nav {
  display: flex;
  justify-content: space-between;
  background-color: #E2F2F0;
}

header nav ul {
  display: flex;
  padding: 0 1vw 0 1vw;
}

header nav ul li {
  margin: 1vw 1vw 0 1vw;
}

header nav ul li.paginas {
  margin: 1.5vw 1vw 0 1vw;

}

header nav ul li a {
  text-decoration: none;
  color: #010A5C;
}

header nav ul li a:hover {
  text-decoration: underline #010A5C;
}

header nav ul li details {
  width: 45%;
}

header nav ul li details summary {
  list-style: none;
  cursor: pointer;
}

header nav ul li details summary:hover {
  text-decoration: underline #010A5C;
}

.paginaAtual {
  color: #7A0000;
  text-decoration: underline #7A0000;
}

/*====================================
    Formatação menu de sistemas
=====================================*/


div.menuSistemas {
  display: flex;
  margin-top: 2vw;
}

div.menuSistemas div.colune a div.sistema {
  display: flex;
  width: 10%;
  height: 20%;
  font-size: 1rem;
  text-align: center;
  margin-top: 2vw;
  padding: 0.25vw 0 0.25vw 0;
}

div.menuSistemas div.colune a div.sistema:hover div {
  text-decoration: underline #ff2800;
  color: #ff2800;
}

div.menuSistemas div.colune a div.sistema h2 {
  font-size: 1.1rem;
  margin: 1vw;
  font-weight: 600;
}

.itensCabecalho {
  text-decoration: none;
}

#comLogin {
  display: none;
  margin-left: 2vw;
}



/*==========================
    Formatação banner
===========================*/


section.banner img {
  margin-top: 5vw;
}

section.banner img {
  width: 100%;
  box-shadow: 0px 1px 10px black;
}

/*======================================
    Formatação sistemas do corpo
========================================*/

section.sistemas div.texto-sistema {
  text-align: center;
  font-size: 1.3rem;
  margin: 5vw 0 3vw 0;
  text-align: center;
}

section.sistemas div.texto-sistema h1 {
  font-size: 2rem;
  font-weight: 600;
  background-color: #E2F2F0;
  border-radius: 50px;
  padding: 2vw 2vw 2vw 2vw;
  width: 30%;
  margin: 0 auto;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.4);
  text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
}

section.sistemas div.texto-sistema p {
  margin: 2vw 0 2vw 0;
  line-height: 1.5;
}

section.sistemas div.botoes-svg-sistemas {
  display: flex;
  text-align: center;
}

section.sistemas div.botoes-svg-sistemas div.botoes-sistema ul {
  margin: 5vw 0 0 0;
}

div.botoes-sistema ul li a {
  text-decoration: none;
  color: white;
  font-weight: 600;
  padding: 1vw;
  border: none;
  background-color: #010A5C;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  /* Faz o link se comportar como um bloco */
  width: 18vw;
  height: 1.2vw;
  /* Altura fixa */
}

section.sistemas div.botoes-svg-sistemas div.botoes-sistema ul li {
  margin: 2vw 3.3vw 2vw 3.3vw;
}

#svg-human {
  cursor: pointer;
  height: auto;
  width: 400%;
  transform: scale(1.8);
  margin: 5vw 0 0 5vw;
}

#svg-human a:hover path {
  fill: black !important;
  transition: fill .4s ease;
}

#svg-human a:hover polygon {
  fill: black !important;
}

#container {
  display: flex;
  padding-top: 100px;
}

#text {
  width: 350px;
  height: auto;
  color: black;
  text-shadow: 1px 1px 1px white;
  margin: 0vw 0 0 10vw;
  max-width: 25vw;
  min-width: 25vw;
}

body div div h1 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5vw;
  color: #010A5C;
}


main div#text p a {
  margin-top: 2vw;
  text-decoration: none;
  color: white;
  padding: 1vw;
  border: none;
  background-color: #010A5C;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  /* Faz o link se comportar como um bloco */
  width: 18vw;
  height: 2.2vw;
  /* Altura fixa */
}
</style>
