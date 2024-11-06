<script setup>
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
    const response = await fetch('/nervos.json')
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
  <main>
    <section class="banner">
      <img
        src="../../img/sistemas/cardiovascular/cardiovascular.png"
        alt="banner cardiovascular"
      />
      <h1>SISTEMA NERVOSO</h1>
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

    <!-- Outras seções omitidas para simplificar -->
  </main>
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
