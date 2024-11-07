<script setup>
import Footer from '../../geral/Footer.vue'
import Header from '../../geral/Header.vue'
import { ref, onMounted } from 'vue'
import svgFile from '../../img/sistemas/osseo/ossos.svg'

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
    const response = await fetch('/ossos.json')
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
      <img src="../../img/sistemas/osseo/osseo.png" alt="banner osseo" />
      <h1>SISTEMA ÓSSEO</h1>
      <div>
        <div class="structure">
          <h2>Estrutura</h2>
          <ul>
            <li>
              <p>
                O corpo humano adulto possui 206 ossos, distribuídos em quatro
                categorias:
              </p>
            </li>
            <li>
              &bull; Ossos longos:
              <ul class="sublist">
                <li>&bull; Fêmur;</li>
                <li>&bull; Úmero.</li>
              </ul>
            </li>
            <li>
              &bull; Ossos curtos:
              <ul class="sublist">
                <li>&bull; Ossos do punho (carpais)</li>
              </ul>
            </li>
            <li>
              &bull; Ossos chatos:
              <ul class="sublist">
                <li>&bull; Esterno;</li>
                <li>&bull; Escápula.</li>
              </ul>
            </li>
            <li>
              &bull; Ossos irregulares:
              <ul class="sublist">
                <li>&bull; Vértebras</li>
                <li>&bull; Ossos da face.</li>
              </ul>
            </li>
            <li>
              <br />
              <p>O esqueleto é dividido em duas partes:</p>
              <ul class="sublist">
                <li>
                  &bull; Esqueleto axial:
                  <ul class="sublist">
                    <li>-Crânio;</li>
                    <li>-Osso hioide;</li>
                    <li>-Vértebras;</li>
                    <li>-Costelas;</li>
                    <li>-Esterno.</li>
                  </ul>
                </li>
                <li>
                  &bull; Esqueleto apendicular:
                  <ul class="sublist">
                    <li>-Membros superiores e inferiores;</li>
                    <li>-Cinturas escapular;</li>
                    <li>-pélvica.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="care">
          <h2>Cuidados</h2>
          <ul>
            <li>&bull; Exponha-se mais ao sol (de maneira moderada);</li>
            <li>&bull; Alimentação rica em cálcio;</li>
            <li>&bull; Tenha o peso adequado (proporcional a altura);</li>
            <li>&bull; Evitar o tabagismo e o alcoolismo;</li>
            <li>&bull; Prática regular de exercícios físicos;</li>
            <li>&bull; Modere a cafeína.</li>
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
                <h3>Osteoporose</h3>
              </div>
              <div class="lado-atras">
                <p>
                  Ela diminui a densidade óssea e faz com que os ossos fiquem
                  enfraquecidos ampliando o risco de fratura. Causa diminuição
                  de altura e postura curvada. Não tem cura, no entanto,
                  encontra-se tratamentos que aumentam a qualidade de vida do
                  paciente.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Câncer ósseo</h3>
              </div>
              <div class="lado-atras">
                <p>
                  É uma doença rara que prejudica os ossos. Pode ser primário,
                  quando é produzido diretamente no osso, incluem osteossarcoma,
                  o condrossarcoma e o sarcoma de Ewing , ou pode ser
                  secundário, que se espalha de outra parte do corpo
                  (metástase). Alguns sintomas são dor nos ossos, fragilidade (o
                  que aumenta o risco de fraturas), inchaço, entre outros. Não
                  há uma causa exata, mas se tem fatores que facilitam o seu
                  desenvolvimento, como a genética, idade, exposição a radiação
                  e doenças ósseas preexistentes. Ainda não há cura, porém,
                  existem tratamentos para amenizar os efeitos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Doença de Paget (DPO)</h3>
              </div>
              <div class="lado-atras">
                <p>
                  É um distúrbio crônico que afeta a renovação dos ossos. Nessa
                  condição, há um aumento na destruição dos ossos, causado por
                  células chamadas osteoclastos, que reabsorvem o osso de
                  maneira excessiva. Após essa reabsorção, o corpo tenta
                  consertar os ossos, mas o faz de forma desorganizada. Isso
                  pode levar a grandes deformidades, especialmente nos ossos
                  longos do corpo e no crânio. É uma doença que não tem cura,
                  mas pode ser tratada para aliviar os sintomas.
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
        Esse sistema é de suma importância para o corpo humano, é ele quem
        sustenta o corpo humano e permite os movimentos do mesmo. Para manter
        seu bom funcionamento deve-se aderir a práticas boas. Prevenir doenças
        ósseas é essencial para uma vida longa e ativa.
      </p>
    </section>
    <!--end conclusão-->

    <section class="reference">
      <!--referencias-->
      <details>
        <summary>REFERÊNCIAS</summary>
        <p>
          <a
            href="https://bestpractice.bmj.com/topics/pt-br/525#:~:text=A%20doen%C3%A7a%20de%20Paget%20%C3%B3ssea,maioria%20dos%20pacientes%20%C3%A9%20assintom%C3%A1tica"
            >BMJ Best Practice</a
          >
        </p>
        <p>
          <a href="https://www.kenhub.com/pt/library/anatomia/cranio">Kenhub</a>
        </p>
        <p>
          <a href="https://www.kenhub.com/pt/library/anatomia/a-mandibula"
            >Kenhub</a
          >
        </p>
        <p>
          <a href="https://www.kenhub.com/pt/library/anatomia/a-mandibula"
            >Kenhub</a
          >
        </p>
        <p>
          <a href="https://www.kenhub.com/pt/library/anatomia/costelas"
            >Kenhub</a
          >
        </p>
        <p>
          <a href="https://pt.wikipedia.org/wiki/V%C3%A9rtebra">Wikipédia</a>
        </p>
        <p>
          <a href="https://www.kenhub.com/pt/library/anatomia/coccix">Kenhub</a>
        </p>
        <p>
          <a href="https://www.kenhub.com/pt/library/anatomia/escapula"
            >Kenhub</a
          >
        </p>
        <p>
          <a href="https://www.kenhub.com/pt/library/anatomia/escapula"
            >Kenhub</a
          >
        </p>
        <p>
          <a href="https://www.kenhub.com/pt/library/anatomia/femur-pt"
            >Kenhub</a
          >
        </p>
        <p>
          <a href="https://www.kenhub.com/pt/library/anatomia/osso-tibia"
            >Kenhub</a
          >
        </p>
        <p>
          <a href="https://www.kenhub.com/pt/library/anatomia/osso-fibula"
            >Kenhub</a
          >
        </p>
        <p>
          <a href="https://www.kenhub.com/pt/library/anatomia/falanges-da-mao"
            >Kenhub</a
          >
        </p>
        <p>
          <a href="https://www.kenhub.com/pt/library/anatomia/metatarso"
            >Kenhub</a
          >
        </p>
        <p>
          <a href="https://www.kenhub.com/pt/library/anatomia/ossos-do-tarso"
            >Kenhub</a
          >
        </p>
        <p>
          <a
            href="https://pt.wikipedia.org/wiki/Man%C3%BAbrio#:~:text=O%20man%C3%BAbrio%20constitui%20a%20parte"
            >Wikipédia</a
          >
        </p>
        <p>
          <a href="https://www.kenhub.com/pt/library/anatomia/clavicula"
            >Kenhub</a
          >
        </p>
        <p>
          <a href="https://www.kenhub.com/pt/library/anatomia/umero">Kenhub</a>
        </p>
        <p>
          <a
            href="https://pt.wikipedia.org/wiki/R%C3%A1dio_(osso)#:~:text=O%20r%C3%A1dio%20%C3%A9%20o%20osso,e%20medialmente%20com%20a%20ulna"
            >Wikipédia</a
          >
        </p>
        <p>
          <a
            href="https://pt.wikipedia.org/wiki/R%C3%A1dio_(osso)#:~:text=O%20r%C3%A1dio%20%C3%A9%20o%20osso,e%20medialmente%20com%20a%20ulna"
            >Wikipédia</a
          >
        </p>
        <p>
          <a
            href="https://pt.wikipedia.org/wiki/Ulna#:~:text=O%20c%C3%BAbitoou%20a%20ulna,em%20rela%C3%A7%C3%A3o%20ao%20osso%20r%C3%A1dio"
            >Wikipédia</a
          >
        </p>
        <p>
          <a
            href="https://www.kenhub.com/pt/library/anatomia/ossos-do-metacarpo"
            >Kenhub</a
          >
        </p>
        <p>
          <a href="https://www.kenhub.com/pt/library/anatomia/patela">Kenhub</a>
        </p>
      </details>
    </section>
    <!--referencias-->

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
