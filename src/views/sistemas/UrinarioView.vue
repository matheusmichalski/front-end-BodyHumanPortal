<script setup>
import Footer from '../../geral/Footer.vue'
import Header from '../../geral/Header.vue'
import { ref, onMounted } from 'vue'
import svgFile from '../../img/sistemas/urinario/urinario.svg'

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
          width: 40%;
          transform: scale(1); /* reduz o tamanho */
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
    const response = await fetch('/urinario.json')
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
    <section class="banner urinario">
      <!--banner-->
      <img src="../../img/sistemas/urinario/urinario.png" alt="banner urinario" />
      <h1>SISTEMA URINÁRIO</h1>
      <div>
        <div class="structure">
          <h2>Estrutura</h2>
          <ul>
            <li>O sistema urinário é composto por:</li>
            <li><br />&bull; Dois rins;</li>
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
            <li>
              &bull; Cuide da higiene na área genital para prevenir infecções;
            </li>
            <li>&bull; Pratique exercícios regularmente;</li>
            <li>&bull; Consulte seu médico regularmente.</li>
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
                <h3>Infecção urinária</h3>
              </div>
              <div class="lado-atras">
                <p>
                  É uma condição comum causada pela proliferação de
                  microrganismos, como bactérias ou fungos, em partes do sistema
                  urinário (rins, ureteres, bexiga e uretra). Geralmente, afeta
                  a bexiga (cistite) e a uretra (uretrite), com sintomas como
                  dor, desconforto e queimação ao urinar. Pode ocorrer devido ao
                  desbalanço da microbiota da região genital, causado por
                  fatores como estresse ou higiene inadequada. A infecção
                  urinária tem cura, sendo tratada normalmente com antibióticos
                  para eliminar as bactérias.
                </p>
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
                <p>
                  A uretrite é uma infecção da uretra, causando sintomas como dor ao urinar, vontade frequente de urinar
                  e corrimento amarelo. Geralmente, é causada por infecções sexualmente transmissíveis, como clamídia e
                  gonorreia, mas também pode resultar de traumas, irritações ou infecções bacterianas e virais.
                </p>
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
                <p>
                  A insuficiência renal, ou falência renal, é a perda da
                  capacidade dos rins de filtrar o sangue, levando ao acúmulo de
                  toxinas no corpo. Pode ser aguda (causada por desidratação,
                  infecções ou medicamentos) ou crônica (relacionada a doenças
                  como diabetes e hipertensão). Causa complicações como pressão
                  alta e acidose, com sintomas de falta de ar, palpitações e
                  confusão mental. Embora não tenha cura, o tratamento adequado
                  melhora a qualidade de vida e pode retardar a progressão da
                  doença.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--doenças-->

    <section class="conclusion">
      <!--conclusão-->
      <h2>Conclusão</h2>
      <p>
        O sistema urinário desempenha um papel fundamental na manutenção da
        homeostase do organismo, sendo responsável pela filtração de resíduos,
        regulação do equilíbrio hídrico e eletrolítico, além da eliminação de
        substâncias tóxicas. A prevenção de doenças, como infecções urinárias e
        insuficiência renal, pode ser alcançada por meio de hábitos saudáveis,
        como a hidratação adequada, higiene pessoal e consultas médicas
        regulares. É crucial cuidar da saúde do sistema urinário, pois seu
        funcionamento eficiente impacta diretamente na qualidade de vida e na
        prevenção de complicações graves.
      </p>
    </section>
    <!--conclusão-->

    <section class="reference">
      <!--referencias-->
      <h2>
        Confira as referências científicas utilizadas para a criação desta
        pagina:
      </h2>
      <details>
        <summary>REFERÊNCIAS</summary>
        <a href="https://clinicacub.com.br/10-habitos-saudaveis-para-um-sistema-urinario-saudavel/">Clínica Urológica da
          Bahia</a>
        <a href="https://www.tuasaude.com/doencas-do-sistema-urinario/">Rede D'or</a>
        <a
          href="https://www.oncoguia.org.br/conteudo/a-bexiga/655/120/#:~:text=A%20sua%20principal%20fun%C3%A7%C3%A3o%20%C3%A9,%C3%A9%20eliminada%20atrav%C3%A9s%20da%20uretra">Oncoguia</a>

        <a
          href="https://www.unifal-mg.edu.br/histologiainterativa/sistema-urinario/#:~:text=O%20aparelho%20urin%C3%A1rio%20%C3%A9%20constitu%C3%ADdo,ou%20produzidas%20pelo%20metabolismo%20corporal">Unifal
          MG</a>
        <a href="https://drauziovarella.uol.com.br/corpo-humano/ureter/">Uol</a>
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
  margin: 0 4vw 0 3svw;
  max-width: 45vw;
}

#container div h1 {
  text-align: center;
  font-size: 2.1rem;
  font-weight: 600;
  margin: 0 0 20px 0;
}
</style>
