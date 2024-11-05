<script setup>
import { ref } from 'vue';
import svgFile from '../../img/sistemas/nervoso/nervos.svg'
const orgaos = [];

const image = ref("/img/sistemas/nervoso/nervos.svg")

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
        inlineSvg.setAttribute('id', 'svg-brain');
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
  fetch('/nervos.json') // puxar órgãos //
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
      <img src="../../img/sistemas/nervoso/nervoso.png" alt="banner nervoso">
      <h1>SISTEMA NERVOSO</h1>
      <div>
        <div class="structure">
          <h2>Estrutura</h2>
          <ul>
            <li>
              <p>Esse sistema é dividido em duas partes:</p>
              <ul class="sublist">
                <li>Sistema Nervoso Central (SNC)
                  <ul class="sublist">
                    <li>&bull; Encéfalo:
                      <ul class="sublist">
                        <li>-Cérebro;</li>
                        <li>-Tronco Encefálico;</li>
                        <li>-Cerebelo.</li>
                      </ul>
                    </li>
                    <li>&bull; Medula espinhal.</li>
                  </ul>
                </li>
                <li>Sistema Nervoso Periférico (SNP)
                  <ul class="sublist">
                    <li>&bull; Terminações Nervosas;</li>
                    <li>&bull; Nervos;</li>
                    <li>&bull; Gânglios.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="care">
          <h2>Cuidados</h2>
          <ul>
            <li>&bull; Alimentação adequada;</li>
            <li>&bull; Prática regular de exercícios físicos;</li>
            <li>&bull; Ter uma rotina de sono de qualidade;</li>
            <li>&bull; Interações sociais;</li>
            <li>&bull; Evitar o tabagismo e o alcoolismo;</li>
            <li>&bull; Administrar o estresse do cotidiano.</li>
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
                <h3>Mal de Alzheimer</h3>
              </div>
              <div class="lado-atras">
                <p>Doença neurodegenerativa. Esse transtorno causa principalmente a perda de memória (
                  sobretudo a curto prazo), perda de capacidade cognitiva, perda de habilidades
                  motoras, pode causar também depressão, ansiedade, entre outros aspectos. A causa
                  ainda não se sabe, porém, considera-se que seja algo relacionado a genética
                  (predisposição). Essa doença não tem cura, mas já existe tratamento que pode
                  diminuir os sintomas ou desacelerar o seu avanço.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Esclerose múltipla</h3>
              </div>
              <div class="lado-atras">
                <p> Doença autoimune crônica que prejudica o sistema imunológico. Distúrbio que pode
                  causar exaustão, tremores, espasmos musculares, dificuldade de concentração,
                  problemas para caminhar, perda de visão (pode ser em um ou nos dois olhos), entre
                  outros. Supõe que seja causada por fatores ambientais e genéticos. Não tem cura, mas
                  já se encontra tratamentos para amenizar os sintomas dessa doença.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Mal de Parkinson</h3>
              </div>
              <div class="lado-atras">
                <p>É uma doença neurodegenerativa. Condição qualificada pela diminuição criação de
                  neurotransmissores (dopamina). Essa enfermidade pode causar tremedeiras, lentidão de
                  reflexos musculares, redução de movimentos corporais, confusão mental, dificuldade
                  na fala, rigidez muscular, entre outros. Causada por fatores genéticos, ambientais e
                  etários ( geralmente a doença surge após idades mais avançadas). Não tem cura, mas
                  existem diversos tipos de tratamentos para retardar e diminuir os efeitos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> <!--end doenças-->

    <section class="conclusion"> <!--conclusão-->
      <h2>Conclusão</h2>
      <p> Esse sistema é essencial para o funcionamento do corpo humano. Cuidar dele de forma adequada garante
        tanto o bem-estar físico como o bem-estar mental. Ter uma vida saudável é assegurar que o corpo funcione
        em harmonia.</p>
    </section> <!--end conclusão-->

    <section class="reference"> <!--referencias-->
      <details>
        <summary>REFERÊNCIAS</summary>
        <p><a href="https://brasilescola.uol.com.br/biologia/sistema-nervoso.htm">Brasil Escola</a></p>
        <p><a
            href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/eu-quero-me-exercitar/noticias/2022/cuidados-com-a-alimentacao-ao-praticar-atividade-fisica">Gov.br</a>
        </p>
        <p><a href="https://www.hcor.com.br/especialidades-servicos/especialidades/neurologia/doencas/">hcor</a>
        </p>
        <p><a
            href="https://brasil.un.org/pt-br/74566-sa%C3%BAde-mental-depende-de-bem-estar-f%C3%ADsico-e-social-diz-oms-em-dia-mundial">Nações
            Unidas Brasil</a></p>
        <p><a href="https://mundoeducacao.uol.com.br/psicologia/aparelho-psiquico.htm">Mundo Educação</a></p>
        <p><a href="https://brasilescola.uol.com.br/biologia/cerebro-humano.htm">Brasil Escola</a></p>
      </details>
    </section> <!--end referencias-->

    <section class="system"> <!--outros sistemas-->
      <router-link to="/">VEJA OUTROS SISTEMAS</router-link>
    </section> <!--end outros sistemas-->
  </main>
</template>

<style scoped>
main {
  margin: 0 auto;
}

#svg-brain {
  cursor: pointer;
}

#svg-brain a:hover path {
  fill: black !important;
}

.orgao:hover path {
  fill: #78866b !important;
  background: red;
}

#container {
  display: flex;
  justify-content: center;
  padding: 50px 10px 50px 10px;
}

#container div {
  margin: 0 1vw 0 12vw;
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