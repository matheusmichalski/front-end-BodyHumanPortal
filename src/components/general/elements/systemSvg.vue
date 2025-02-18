<script setup>
import { ref, onMounted, reactive } from 'vue'

const props = defineProps({
  imageUrl: reactive({ type: String, required: true }),
  jsonUrl: reactive({ type: String, required: true }),
  defaultMessage: {
    type: String,
    default: 'Clique em um órgão para mais informações.',
  },
})

const svgContainer = ref(null)
const orgaosData = ref([])
const selectedOrgao = ref(null)

const fetchOrgaos = async () => {
  try {
    const response = await fetch(`/systems/jsons/${props.jsonUrl}`)
    orgaosData.value = await response.json()
  } catch (error) {
    console.error('Erro ao carregar órgãos:', error)
  }
}

const fetchSvg = async () => {
  try {
    const response = await fetch(`/systems/svgs/${props.imageUrl}`)
    const svgText = await response.text()

    if (svgContainer.value) {
      svgContainer.value.innerHTML = svgText
      const inlineSvg = svgContainer.value.querySelector('svg')

      if (inlineSvg) {
        inlineSvg.setAttribute('id', `svg-arterial`)
        inlineSvg.classList.add('nervoso-svg')

        const styleElement = document.createElement('style')
        styleElement.innerHTML = `
          #svg-arterial a:hover path {
                      cursor: pointer;
            fill: black !important;
            transition: fill 0.3s;
          }
        `
        inlineSvg.prepend(styleElement)

        getActions()
      } else {
        console.error('SVG não encontrado.')
      }
    }
  } catch (error) {
    console.error('Erro ao carregar SVG:', error)
  }
}

const getActions = () => {
  if (!svgContainer.value) return
  const organElements = svgContainer.value.getElementsByClassName('orgaos')
  for (const organ of organElements) {
    organ.addEventListener('click', () => orgaoClicked(organ))
  }
}

const orgaoClicked = (orgao) => {
  const code = orgao.getAttribute('code')
  selectedOrgao.value = orgaosData.value.find((o) => o.code === code) || null
}

onMounted(async () => {
  await fetchOrgaos()
  await fetchSvg()
})
</script>

<template>
  <div class="container">
    <div ref="svgContainer" class="svg-wrapper"></div>

    <div class="info-box">
      <h2 v-if="selectedOrgao">{{ selectedOrgao.nome }}</h2>
      <p v-if="selectedOrgao">{{ selectedOrgao.descricao }}</p>
      <a :href="selectedOrgao?.referencia" v-if="selectedOrgao?.referencia">
        <span v-if="selectedOrgao?.referencia">Referência</span>
      </a>
      <span v-if="!selectedOrgao" class="message">{{ defaultMessage }}</span>
    </div>
  </div>
</template>

<style scoped>
.is-mobile {
  flex-direction: column;
}
.container {
  margin: 12vw 0 12vw 0;

  display: flex;
  align-items: center;
  justify-content: center;

  .svg-wrapper {
    width: 80vw;
    min-width: 25vw;
    max-width: 90vw;
  }

  .info-box {
    width: 60vw;
    min-width: 15vw;
    max-width: 80vw;
    text-align: left;
    border: 2px solid #103f65;
    border-radius: 40px;
    padding: 4vw;
    margin: 0 4vw 0 0;

    h2 {
      font-family: 'Tilt Warp';
      color: #103f65;
      font-size: clamp(1.4rem, 2.7vw, 2.9rem);
      margin-bottom: 3vw;
    }

    p {
      font-family: 'Urbanist';
      font-size: clamp(0.4rem, 1.5vw, 2vw);
      line-height: 2.5vw;
      margin-bottom: 40px;
    }

    a {
      text-decoration: none;
      span {
        font-family: 'Tilt Warp';
        color: #103f65;
        font-size: clamp(1rem, 1.5vw, 1.8vw);
      }
    }
  }

  .message {
    font-style: italic;
    font-size: clamp(1.4rem, 2vw, 2.3rem);
  }
}
</style>
