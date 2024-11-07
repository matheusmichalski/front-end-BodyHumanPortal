<script setup>
import Footer from '../../geral/Footer.vue'
import Header from '../../geral/Header.vue'
import { ref, onMounted } from 'vue'
import svgFile from '../../img/sistemas/respiratorio/respiratorio.svg'

const orgaos = ref([])
const image = ref(svgFile)

async function fetchSvg() {
  try {
    const response = await fetch(image.value)
    const svgText = await response.text()

    const span = document.createElement('span')
    span.innerHTML = svgText
    const inlineSvg = span.querySelector('svg')

    if (inlineSvg) {
      inlineSvg.id = 'svg-brain'
      inlineSvg.classList.add('nervoso-svg')

      // Inserir estilos diretamente no SVG
      const styleElement = document.createElement('style')
      styleElement.innerHTML = `
  #svg-brain.nervoso-svg {
    border: black solid 1px;
    cursor: pointer;
    width: 45vw;
    transform: scale(0.5); /* reduz o tamanho */
  }



  #svg-brain a:hover path {
    fill: black !important;
    transition: fill 0.4s; /* aplica apenas ao hover */
  }
`

      inlineSvg.prepend(styleElement)

      const imageToBeHandled = document.getElementById('mainImage')
      if (imageToBeHandled) {
        imageToBeHandled.replaceWith(inlineSvg)
      }

      getActions()
    } else {
      console.error('SVG não encontrado')
    }
  } catch (error) {
    console.error('Erro ao carregar imagem: ', error)
  }
}

function getActions() {
  const organElements = document.getElementsByClassName('orgaos')
  for (const organ of organElements) {
    organ.onclick = () => orgaoClicked(organ)
  }
  getOrgaos()
}

async function getOrgaos() {
  try {
    const response = await fetch('/respiratorio.json')
    const data = await response.json()
    orgaos.value = data
  } catch (error) {
    console.error('Erro ao carregar órgãos:', error)
  }
}

function orgaoClicked(orgao) {
  const code = orgao.getAttribute('code')
  const foundOrgao = orgaos.value.find(o => o.code === code)

  if (foundOrgao) {
    fillContent(foundOrgao)
  } else {
    console.log('Órgão não encontrado')
  }
}

function fillContent({ nome, descricao }) {
  const name = document.getElementById('nomeOrgao')
  const description = document.getElementById('descOrgao')
  name.textContent = nome
  description.textContent = descricao
}

onMounted(fetchSvg)
</script>

<template>
  <Header />
  <main>
    <section class="banner">
      <!--banner-->
      <img
        src="../../img/sistemas/respiratorio/respiratorio.png"
        alt="banner respiratorio"
      />
      <h1>SISTEMA RESPIRATÓRIO</h1>
      <div>
        <div class="structure">
          <h2>Estrutura</h2>
          <ul>
            <li>
              <p>O sistema respiratório é formado pelos seguintes órgãos:</p>
              <br />
            </li>
            <li>&bull; Cavidades nasais;</li>
            <li>&bull; Boca;</li>
            <li>&bull; Faringe;</li>
            <li>&bull; Laringe;</li>
            <li>&bull; Traqueia;</li>
            <li>&bull; Brônquios;</li>
            <li>&bull; Bronquíolos;</li>
            <li>&bull; Alvéolos pulmonares;</li>
            <li>
              <br />
              <p>
                Entre eles, os brônquios, bronquíolos e alvéolos compõem a
                estrutura dos pulmões.
              </p>
            </li>
          </ul>
        </div>

        <div class="care">
          <h2>Cuidados</h2>
          <ul>
            <li>&bull; Evite a exposição à poeira ou fumaça;</li>
            <li>&bull; Umidifique o ambiente;</li>
            <li>&bull; Troque regularmente as roupas de cama;</li>
            <li>&bull; Limpe ventiladores e aparelhos de ar-condicionado;</li>
            <li>&bull; Mantenha suas vacinas em dia;</li>
            <li>&bull; Beba bastante água para garantir a hidratação.</li>
          </ul>
        </div>
      </div>
    </section>
    <!--end banner-->

    <section class="image">
      <div id="container">
        <img id="mainImage" :src="image" @load="fetchSvg" />
        <div id="text">
          <h1 id="nomeOrgao"></h1>
          <p id="descOrgao"></p>
        </div>
      </div>
    </section>
    <!--end svg-->

    <section class="disease">
      <!--doenças-->
      <h2>Princípais Doenças</h2>
      <div>
        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Pneumonia</h3>
              </div>
              <div class="lado-atras">
                <p>
                  A pneumonia é uma infecção nos pulmões, causada por vírus,
                  bactérias, fungos ou reações alérgicas, que ocorre com o
                  acúmulo de secreções nos brônquios. Os principais sintomas são
                  tosse com secreção, febre alta, dor no peito e mudanças na
                  pressão arterial. A pneumonia é tratável, especialmente com
                  atendimento rápido, e o tratamento pode incluir antibióticos,
                  antivirais ou antifúngicos, além de repouso e, em casos
                  graves, internação.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Asma</h3>
              </div>
              <div class="lado-atras">
                <p>
                  A asma é uma condição crônica que pode afetar pessoas de todas
                  as idades, sendo mais comum em crianças. Ela ocorre devido à
                  inflamação dos brônquios, que são os tubos responsáveis pela
                  passagem do ar para os pulmões. Essa inflamação provoca
                  secreções que dificultam a passagem do ar, prejudicando a
                  respiração. Além disso, esses produtos inflamatórios aumentam
                  a tosse e causam o característico chiado no peito. A asma não
                  tem cura, mas pode ser controlada com tratamento adequado.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Doença Pulmonar Obstrutiva Crônica (DPOC)</h3>
              </div>
              <div class="lado-atras">
                <p>
                  É uma condição respiratória progressiva que dificulta a
                  respiração devido à obstrução das vias aéreas, geralmente
                  causada por exposição prolongada a substâncias nocivas como
                  fumaça de cigarro, poluição e produtos químicos. Os principais
                  sintomas incluem falta de ar durante atividades cotidianas,
                  pigarro e tosse crônica, que pode ser pior pela manhã. Embora
                  não tenha cura, o tratamento adequado ajuda a controlar os
                  sintomas e melhorar a qualidade de vida do paciente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--end doenças-->

    <section class="conclusion">
      <!--conclusão-->
      <h2>Conclusão</h2>
      <p>
        O sistema respiratório tem a função de permitir que o ar entre e saia do
        corpo. O ar entra primeiro pelas fossas nasais, onde é umidificado,
        aquecido e filtrado. Em seguida, ele passa pela faringe, depois pela
        laringe e pela traqueia. A traqueia se divide em dois brônquios, que
        levam o ar aos pulmões. Depois, o ar se move dos brônquios para os
        bronquíolos e, por fim, chega aos alvéolos pulmonares.
      </p>
    </section>
    <!--end conclusão-->

    <section class="reference">
      <!--referencias-->
      <h2>
        Confira as referências científicas utilizadas para a criação desta
        pagina:
      </h2>
      <details>
        <summary>REFERÊNCIAS</summary>
        <a href="https://www.cpaps.com.br/blog/sistema-respiratorio-outono/"
          >CPAPS</a
        >
        <a
          href="https://bvsms.saude.gov.br/21-11-dia-mundial-da-doenca-pulmonar-obstrutiva-cronica-dpoc/#:~:text=%C3%89%20uma%20doen%C3%A7a%20pulmonar%20que,pela%20manh%C3%A3%20s%C3%A3o%20sintomas%20comuns"
          >Biblioteca Virtual em Saúde</a
        >
        <a
          href="https://blog.amorsaude.com.br/quais-sao-as-6-doencas-respiratorias-mais-comuns/"
          >Blog Amor e Saúde</a
        >
        <a
          href="https://brasilescola.uol.com.br/biologia/sistema-respiratorio.htm"
          >Brasil Escola</a
        >
      </details>
    </section>
    <!--end referencias-->

    <section class="system">
      <!--sistemas-->
      <router-link to="/">VEJA OUTROS SISTEMAS</router-link>
    </section>
    <!--end sistemas-->
  </main>
  <Footer />
</template>

<style scoped>
#container {
  align-items: center;
  display: flex;
  width: 100%;
}

#text {
  text-align: justify;
  color: black;
  text-shadow: 1px 1px 1px white;
  font-size: 1.5vw;
  line-height: 1.5;
  margin: 0 4vw 0 3vw;
  max-width: 45vw;
}

#container div h1 {
  text-align: center;
  font-size: 2.1rem;
  font-weight: 600;
  margin: 0 0 20px 0;
}
</style>
