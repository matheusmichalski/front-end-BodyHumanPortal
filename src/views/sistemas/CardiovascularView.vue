<script setup>
import Footer from '../../geral/Footer.vue'
import Header from '../../geral/Header.vue'
import { ref, onMounted } from 'vue'
import svgFile from '../../img/sistemas/cardiovascular/cardiovascular.svg'

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
        }
        #svg-brain a:hover path {
          fill: black !important;
          transition: fill 0.3s;
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
    const response = await fetch('/cardiovascular.json')
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
    <section class="banner cardiovascular">
      <img src="../../img/sistemas/cardiovascular/cardiovascular.png" alt="banner cardiovascular"/>
      <h1>SISTEMA CARDIOVASCULAR</h1>
      <div>

        <div class="structure">
          <h2>Estrutura</h2>
          <ul>
            <li>&bull; Coração;</li>
            <li>&bull; Vasos sanguíneos.</li>
          </ul>
        </div>

        <div class="care">
          <h2>Cuidados com o Sistema Cardiovascular</h2>
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
    </section>

    <section class="image">
      <div id="container">
        <img id="mainImage" :src="image" @load="fetchSvg" />
        <div id="text">
          <h1 id="nomeOrgao"></h1>
          <p id="descOrgao"></p>
        </div>
      </div>
    </section>

    <section class="disease">
      <h2>Princípais Doenças</h2>
      <div>
        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Insuficiência cardíaca</h3>
              </div>
              <div class="lado-atras">
                <p>
                  Também conhecida como insuficiência cardíaca congestiva, é uma
                  doença que ocorre quando o coração não bombeia sangue o
                  suficiente para atender às demandas do corpo. Por
                  consequência, o fluxo sanguíneo pode se concentrar nas pernas,
                  pulmões e em diversos outros tecidos do corpo. Os principais
                  sintomas incluem inchaço dos pés e pernas, falta de ar e
                  sensação de cansaço. É uma doença sem cura que pode levar a
                  vários riscos e complicações se não for controlada e tratada
                  de maneira adequada e no momento certo.
                </p>
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
                <p>
                  Também conhecida como pressão alta, é uma doença crônica
                  marcada pelo aumento dos níveis de pressão sanguínea nas
                  artérias. A hipertensão faz com que o coração precise
                  trabalhar mais do que o normal para bombear o sangue de
                  maneira eficiente pelo corpo. Geralmente, a hipertensão não
                  causa sintomas, mas em alguns casos, pode ser percebida por
                  meio de sintomas como tontura, dor de cabeça, alterações na
                  visão e dor no peito. A hipertensão arterial não tem cura, mas
                  pode ser prevenida.
                </p>
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
                <p>
                  Conhecido também como ataque cardíaco, acontece devido à
                  interrupção do fluxo sanguíneo para o coração, na maioria das
                  vezes por causa do acúmulo de gordura nas artérias do coração.
                  Os principais sintomas envolvem dor intensa no peito, essa
                  dor, geralmente, passa para os braços e ombros do lado
                  esquerdo. O infarto do miocárdio não tem "cura" no sentido de
                  consertar totalmente os danos ao coração. Porém, o tratamento
                  e a ajuda médica podem variar conforme o estágio do infarto e
                  a rapidez com que a pessoa recebe atendimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="conclusion">
      <h2>Conclusão</h2>
      <p>
        Cuidar do sistema cardiovascular é fundamental para uma vida saudável.
        Uma dieta equilibrada, atividade física regular e a adoção de hábitos
        saudáveis contribuem para manter o coração e os vasos sanguíneos em boas
        condições, prevenindo doenças e estimulando o bem-estar geral.
      </p>
    </section>

    <section class="reference">
      <h2>Confira as referências científicas utilizadas para a criação desta pagina:</h2>
      <details>
        <summary>REFERÊNCIAS</summary>
        <a href="https://www.medtronic.com/br-pt/your-health/conditions/heart-failure.html">Medtronic</a>
        <a href="https://www.tuasaude.com/doencas-cardiovasculares/">Tua Saúde</a>
        <a
          href="https://mundoeducacao.uol.com.br/biologia/sistema-circulatorio.htm#:~:text=Resumo%20sobre%20o%20sistema%20cardiovascular&text=O%20cora%C3%A7%C3%A3o%20funciona%20como%20uma%20bomba%2C%20permitindo%20que%20o%20sangue,retorno%20do%20sangue%20ao%20cora%C3%A7%C3%A3o">Mundo
          Educação</a>
        <a href="https://mundoeducacao.uol.com.br/biologia/coracao.htm">Mundo Educação</a>
        <a href="https://brasilescola.uol.com.br/biologia/vasos-sanguineos.htm">Brasil Escola</a>
      </details>
    </section>

    <section class="system">
      <router-link to="/">VEJA OUTROS SISTEMAS</router-link>
    </section>
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
  margin: 0 2vw 5vw 5vw;
  max-width: 45vw;
}

#container div h1 {
  text-align: center;
  font-size: 2.1rem;
  font-weight: 600;
  margin: 0 0 20px 0;
}
</style>
