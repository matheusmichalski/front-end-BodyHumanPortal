<script setup>
import Footer from '../../geral/Footer.vue'
import Header from '../../geral/Header.vue'
import { ref } from 'vue';
import svgFile from '../../img/sistemas/urinario/urinario.svg'
const orgaos = [];

const image = ref("/img/sistemas/urinario/urinario.svg")

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
        inlineSvg.setAttribute('id', 'svg-urinario');
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
  fetch('/urinario.json') // puxar órgãos //
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
  <Header />
  <main>
    <section class="banner urinario"> <!--banner-->
      <img src="../../img/sistemas/urinario/urinario.png" alt="banner urinario">
      <h1>SISTEMA URINÁRIO</h1>
      <div>
        <div class="structure">
          <h2>Estrutura</h2>
          <ul>
            <li>O sistema urinário é composto por:</li>
            <li><br>&bull; Dois rins;</li>
            <li>&bull; Dois ureteres;</li>
            <li>&bull; Bexiga urinária;</li>
            <li>&bull; Uretra.</li>
          </ul>
        </div>

        <div class="care">
          <h2>Cuidados</h2>
          <ul>
            <li>&bull; Beba bastante água;</li>
            <li>&bull; Evite prender a urina;</li>
            <li>&bull; Reduza o consumo de sal e cafeína;</li>
            <li>&bull; Cuide da higiene na área genital para prevenir infecções;</li>
            <li>&bull; Pratique exercícios regularmente;</li>
            <li>&bull; Consulte seu médico regularmente.</li>
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
                <h3>Infecção urinária</h3>
              </div>
              <div class="lado-atras">
                <p> É uma condição comum causada pela proliferação de microrganismos, como bactérias ou
                  fungos, em partes do sistema urinário (rins, ureteres, bexiga e uretra). Geralmente,
                  afeta a bexiga (cistite) e a uretra (uretrite), com sintomas como dor, desconforto e
                  queimação ao urinar. Pode ocorrer devido ao desbalanço da microbiota da região
                  genital, causado por fatores como estresse ou higiene inadequada. A infecção
                  urinária tem cura, sendo tratada normalmente com antibióticos para eliminar as
                  bactérias.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Uretrite</h3>
              </div>
              <div class="lado-atras">
                <p>A uretrite é um tipo de infecção que afeta a uretra, o canal responsável
                  pela eliminação da urina. Essa condição provoca sintomas como vontade frequente de
                  urinar, dor ou ardor ao urinar e corrimento amarelo. Normalmente, a uretrite é
                  causada por infecções sexualmente transmissíveis, como clamídia, gonorreia,
                  tricomoníase e herpes, mas também pode ocorrer devido a traumas ou irritações na
                  uretra, que podem ser provocadas por produtos químicos. Além disso, infecções
                  bacterianas e virais também podem levar à inflamação da uretra.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Insuficiência renal</h3>
              </div>
              <div class="lado-atras">
                <p>A insuficiência renal, ou falência renal, é a perda da capacidade dos rins de filtrar
                  o sangue, levando ao acúmulo de toxinas no corpo. Pode ser aguda (causada por
                  desidratação, infecções ou medicamentos) ou crônica (relacionada a doenças como
                  diabetes e hipertensão). Causa complicações como pressão alta e acidose, com
                  sintomas de falta de ar, palpitações e confusão mental. Embora não tenha cura, o
                  tratamento adequado melhora a qualidade de vida e pode retardar a progressão da
                  doença.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> <!--doenças-->

    <section class="conclusion"> <!--conclusão-->
      <h2>Conclusão</h2>
      <p>O sistema urinário desempenha um papel fundamental na manutenção da homeostase do organismo, sendo
        responsável pela filtração de resíduos, regulação do equilíbrio hídrico e eletrolítico, além da
        eliminação de substâncias tóxicas. A prevenção de doenças, como infecções urinárias e insuficiência
        renal, pode ser alcançada por meio de hábitos saudáveis, como a hidratação adequada, higiene pessoal e
        consultas médicas regulares. É crucial cuidar da saúde do sistema urinário, pois seu funcionamento
        eficiente impacta diretamente na qualidade de vida e na prevenção de complicações graves.</p>
    </section> <!--conclusão-->

    <section class="reference"> <!--referencias-->
      <h2>Confira as referências científicas utilizadas para a criação desta pagina:</h2>
      <details>
        <summary>REFERÊNCIAS</summary>
       <a href="https://clinicacub.com.br/10-habitos-saudaveis-para-um-sistema-urinario-saudavel/">Clínica
            Urológica da Bahia</a>
       <a href="https://www.tuasaude.com/doencas-do-sistema-urinario/">Rede D'or</a>
       <a
            href="https://www.oncoguia.org.br/conteudo/a-bexiga/655/120/#:~:text=A%20sua%20principal%20fun%C3%A7%C3%A3o%20%C3%A9,%C3%A9%20eliminada%20atrav%C3%A9s%20da%20uretra">Oncoguia</a>

       <a
            href="https://www.unifal-mg.edu.br/histologiainterativa/sistema-urinario/#:~:text=O%20aparelho%20urin%C3%A1rio%20%C3%A9%20constitu%C3%ADdo,ou%20produzidas%20pelo%20metabolismo%20corporal">Unifal
            MG</a>
       <a href="https://drauziovarella.uol.com.br/corpo-humano/ureter/">Uol</a>
      </details>
    </section> <!--end referencias-->

    <section class="system"> <!--sistemas-->
      <router-link to="/">VEJA OUTROS SISTEMAS</router-link>
    </section> <!--end sistemas-->
  </main>
  <Footer />
</template>

<style scoped>
#container {
  align-items: center;
  display: flex;
  gap: 20px;
  padding: 50px;
  max-width: 90%;
  margin: auto;
  min-height: 70vh;
  max-height: 90vh;
}

#text {
  text-align: justify;
  color: black;
  text-shadow: 1px 1px 1px white;
  width: 100%;
  font-size: 1.5rem;
  line-height: 1.5;
  margin: auto 0;
  margin: 0 0 5vw 12vw;
  max-width: 46vw;
}

#container div h1 {
  text-align: center;
  font-size: 2.1rem;
  font-weight: 600;
  margin: 0 0 20px 0;
}
</style>
