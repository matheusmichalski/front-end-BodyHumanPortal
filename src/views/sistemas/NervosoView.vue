<script setup>
import { ref, onMounted } from 'vue'
import svgFile from '../../img/sistemas/nervoso/nervos.svg'

const orgaos = ref([])
const image = ref(svgFile)
const svgClass = ref('')

async function fetchSvg() {
  try {
    const response = await fetch(image.value)
    const svgText = await response.text()

    const span = document.createElement('span')
    span.innerHTML = svgText
    const inlineSvg = span.querySelector('svg')

    if (inlineSvg) {
      inlineSvg.id = 'svg-brain'
      inlineSvg.classList.add('nervoso-svg') // A classe é adicionada aqui

      // Aqui, adicionamos o SVG ao container, que faz parte do Vue, então ele receberá o estilo scoped
      const imageToBeHandled = document.getElementById('mainImage')
      if (imageToBeHandled) {
        imageToBeHandled.replaceWith(inlineSvg)
      }

      // Como o Vue está inserindo o SVG, ele deve aplicar o estilo scoped a partir daqui.
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
      <img src="../../img/sistemas/nervoso/nervoso.png" alt="banner nervoso" />
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
  min-height: 30vh;
  max-height: 60vh;
}

#svg-brain {
  border: black solid 1px;
  cursor: pointer;
}

#svg-brain path {
  transition:
    fill 0.3s,
    transform 0.3s;
}

#svg-brain path:hover {
  fill: #4e79a7; /* Cor de destaque ao passar o mouse */
  transform: scale(1.2); /* Leve aumento no tamanho do path */
  position: absolute;
  z-index: 10;
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

main div h1 {
  text-align: center;
  font-size: 2.1rem;
  font-weight: 600;
  margin: 0 0 20px 0;
}

/* Estilo específico para o SVG carregado */
.nervoso-svg {
  max-width: 100%;
  height: auto;
}

.nervoso-svg path:hover {
  fill: #333;
  transform: scale(1.2);
  transition: fill 0.3s ease;
}
</style>
