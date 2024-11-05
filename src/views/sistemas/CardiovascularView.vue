<script setup>
import { ref } from 'vue';
import svgFile from '../../img/sistemas/cardiovascular/cardiovascular.svg'
const orgaos = [];

const image = ref("/img/sistemas/cardiovascular/cardiovascular.svg")

async function fetchSvg() {
  console.log(svgFile)

  fetch(`http://localhost:5173${image.value}`)
    .then((response) => response.text())
    .then((response) => {
      const span = document.createElement('span');
      span.innerHTML = response;
      const inlineSvg = span.getElementsByTagName('svg')[0];

      if (inlineSvg) {
        console.log("SVG encontrado");
        inlineSvg.setAttribute('id', 'svg-arterial');
        const imageToBeHandled = document.getElementById("mainImage")
        imageToBeHandled.parentNode.replaceChild(inlineSvg, imageToBeHandled);
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

const getActions = () => { // chamada para ação //
  const organ = document.getElementsByClassName('orgaos'); // buscar elementos de orgão //
  console.log("Elementos encontrados", organ);
  for (let i = 0; i < organ.length; i++) { // adicione 1 estado enquanto o numero de órgãos for maior que o i //
    organ[i].onclick = () => { orgaoClicked(organ[i]); }; // execute a função de gerenciamento stateClicked no estado atual, para cada estado clicado
  }
  getOrgaos(); // preencher a variavel estados = [] // 
};

const getOrgaos = () => {
  fetch('/cardiovascular.json') // puxar órgãos //
    .then((response) => response.text()) // resposta texto // 
    .then((response) => {
      orgaos.push(...JSON.parse(response)); // ... para executar a cada resposta; e .parse para trazer os órgãos // 
      console.log("Dados encontrados", orgaos)
    });
};

const orgaoClicked = (orgao) => { // criação da função orgaoClicked //
  console.log("Órgão encontrado");
  const code = orgao.getAttribute('code'); // pegando o codigo do órgão, que está no JSON //
  console.log("Code do órgão:", code)
  const uf = orgaos.find(orgao => orgao.code === code); // buscando o órgão, que deve ser igual ao code //
  if (!uf) {
    console.log("Não encontrado");
    return; // se não achar, retorna algo vazio //
  }
  fillContent(uf); // preenchimento de conteúdo //
};

const fillContent = ({ nome, descricao }) => { // preenchimento do conteúdo //
  const name = document.getElementById('nomeOrgao'); // nome do  órgão //
  const description = document.getElementById('descOrgao'); // descrição //
  console.log(nome, descricao);

  // innerText para inserir texto em cada variável //
  name.textContent = nome;
  description.textContent = descricao;
};
</script>

<template>
  <main>
    <section class="banner"> <!--banner-->
      <img src="../../img/sistemas/cardiovascular/cardiovascular.png" alt="banner cardiovascular">
      <h1>SISTEMA CARDIOVASCULAR</h1>
      <div>
        <div class="structure">
          <h2>Estrutura</h2>
          <ul>
            <li>
              <p>O sistema cardiovascular é composto por:</p>
              <br>
            </li>
            <li>&bull; Coração;</li>
            <li>&bull; Vasos sanguíneos:
              <ul class="sublist">
                <li>-Artérias;</li>
                <li>-Capilares;</li>
                <li>-Veias.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="care">
          <h2>Cuidados</h2>
          <ul>
            <li>&bull; Pratique atividades físicas regularmente;</li>
            <li>&bull; Priorize o cuidado com sua mente;</li>
            <li>&bull; Controle o seu peso de forma adequada;</li>
            <li>&bull; Evite o tabagismo e modere o consumo de álcool;</li>
            <li>&bull; Tenha uma boa qualidade de sono;</li>
            <li>&bull; Mantenha acompanhamento médico regular.</li>
          </ul>
        </div>
      </div>
    </section> <!--end banner-->

    <section class="image"> <!--svg-->
      <div id="container">
        <img id="mainImage" :src="image" @load="fetchSvg">
        <div>
          <h1 id="nomeOrgao"></h1>
          <p id="descOrgao"></p>
        </div>
      </div>
    </section> <!--end svg-->

    <section class="disease"> <!--doenças-->
      <h2>Princípais Doenças</h2>
      <div>
        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Insuficiência cardíaca</h3>
              </div>
              <div class="lado-atras">
                <p>Também conhecida como insuficiência cardíaca congestiva, é uma doença que ocorre
                  quando o coração não bombeia sangue o suficiente para atender às demandas do corpo.
                  Por consequência, o fluxo sanguíneo pode se concentrar nas pernas, pulmões e em
                  diversos outros tecidos do corpo. Os principais sintomas incluem inchaço dos pés e
                  pernas, falta de ar e sensação de cansaço. É uma doença sem cura que pode levar a
                  vários riscos e complicações se não for controlada e tratada de maneira adequada e
                  no momento certo.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Hipertensão arterial</h3>
              </div>
              <div class="lado-atras">
                <p>Também conhecida como pressão alta, é uma doença crônica marcada pelo aumento dos
                  níveis de pressão sanguínea nas artérias. A hipertensão faz com que o coração
                  precise trabalhar mais do que o normal para bombear o sangue de maneira eficiente
                  pelo corpo. Geralmente, a hipertensão não causa sintomas, mas em alguns casos, pode
                  ser percebida por meio de sintomas como tontura, dor de cabeça, alterações na visão
                  e dor no peito. A hipertensão arterial não tem cura, mas pode ser prevenida.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Infarto agudo do miocárdio (IAM)</h3>
              </div>
              <div class="lado-atras">
                <p>Conhecido também como ataque cardíaco, acontece devido à interrupção do fluxo
                  sanguíneo para o coração, na maioria das vezes por causa do acúmulo de gordura nas
                  artérias do coração. Os principais sintomas envolvem dor intensa no peito, essa dor,
                  geralmente, passa para os braços e ombros do lado esquerdo. O infarto do miocárdio
                  não tem "cura" no sentido de consertar totalmente os danos ao coração. Porém, o
                  tratamento e a ajuda médica podem variar conforme o estágio do infarto e a rapidez
                  com que a pessoa recebe atendimento.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> <!--end doenças-->

    <section class="conclusion"> <!--conclusão-->
      <h2>Conclusão</h2>
      <p>Cuidar do sistema cardiovascular é fundamental para uma vida saudável. Uma dieta equilibrada, atividade
        física regular e a adoção de hábitos saudáveis contribuem para manter o coração e os vasos sanguíneos em
        boas condições, prevenindo doenças e estimulando o bem-estar geral.</p>
    </section> <!--end conclusão-->

    <section class="reference"> <!--referencias-->
      <details>
        <summary>REFERÊNCIAS</summary>
        <p><a href="https://www.medtronic.com/br-pt/your-health/conditions/heart-failure.html">Medtronic</a></p>
        <p><a href="https://www.tuasaude.com/doencas-cardiovasculares/">Tua Saúde</a></p>
        <p><a
            href="https://mundoeducacao.uol.com.br/biologia/sistema-circulatorio.htm#:~:text=Resumo%20sobre%20o%20sistema%20cardiovascular&text=O%20cora%C3%A7%C3%A3o%20funciona%20como%20uma%20bomba%2C%20permitindo%20que%20o%20sangue,retorno%20do%20sangue%20ao%20cora%C3%A7%C3%A3o">Mundo
            Educação</a></p>
        <p><a href="https://mundoeducacao.uol.com.br/biologia/coracao.htm">Mundo Educação</a></p>
        <p><a href="https://brasilescola.uol.com.br/biologia/vasos-sanguineos.htm">Brasil Escola</a></p>
      </details>
    </section> <!--end referencias-->

    <section class="system"> <!--sistemas-->
      <router-link to="/">VEJA OUTROS SISTEMAS</router-link>
    </section> <!--end sistemas-->
  </main>
</template>

<style scoped>
main {
  margin: 0 auto;
}

#svg-arterial {
  cursor: pointer;
}

#svg-arterial a:hover path {
  fill: black !important;
}


.orgao:hover path {
  fill: #78866b !important;
  background: red;
}

#container {
  display: flex;
  justify-content: center;
  padding-top: 100px;
}

#text {
  width: 350px;
  height: auto;
  padding-left: 100px;
  text-align: center;
  color: black;
  text-shadow: 1px 1px 1px white;
  max-width: 30vw;
  min-width: 30vw;
  margin: 5vw 10vw 0 0;
}

main div h1 {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 5vw 2vw 0 0.5vw;
}
</style>