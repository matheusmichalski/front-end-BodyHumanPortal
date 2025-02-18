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
           filter: brightness(50%);
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

    <div class="info-box is-mobile is-desktop">
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
.container {
  margin: 20vw 0 20vw 0;
  gap: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .svg-wrapper {
    width: 100%;
    text-align: center;
  }

  .info-box {
    max-width: 75vw;
    text-align: left;
    border: 2px solid #103f65;
    border-radius: 40px;
    padding: 35px;

    h2 {
      font-family: 'Tilt Warp';
      color: #103f65;
      font-size: clamp(1.4rem, 4vw, 3rem);
      margin-bottom: 20px;
    }

    p {
      font-family: 'Urbanist';
      font-size: clamp(1.2rem, 1.6vw, 1.8rem);
      line-height: 25px;
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
