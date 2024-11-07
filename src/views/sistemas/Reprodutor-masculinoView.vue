<script setup>
import Footer from '../../geral/Footer.vue'
import Header from '../../geral/Header.vue'
import { ref, onMounted } from 'vue'
import svgFile from '../../img/sistemas/reprodutor/masculino/masculino.svg'

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
    const response = await fetch('/masculino.json')
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
        src="../../img/sistemas/reprodutor/masculino/reprodutor-masculino.png"
        alt="banner reprodutor masculino"
      />
      <h1>SISTEMA REPRODUTOR MASCULINO</h1>
      <div>
        <div class="structure">
          <h2>Estrutura</h2>
          <ul>
            <li>
              <p>
                O aparelho genital masculino é composto pelos órgãos genitais
                internos e externos.
              </p>
              <br />
            </li>
            <li>
              <p>Internos:</p>
            </li>
            <li>&bull; Testículos;</li>
            <li>&bull; Epidídimo;</li>
            <li>&bull; Canal deferente;</li>
            <li>&bull; Vesículas seminais;</li>
            <li>&bull; Uretra;</li>
            <li>&bull; Ducto ejaculatório;</li>
            <li>&bull; Próstata;</li>
            <li>&bull; Glândulas bulbouretrais.</li>
            <li>
              <br />
              <p>Externos:</p>
            </li>
            <li>&bull; Pênis</li>
            <li>&bull; Saco escrotal.</li>
          </ul>
        </div>

        <div class="care">
          <h2>Cuidados</h2>
          <ul>
            <li>&bull; Higiene adequada;</li>
            <li>&bull; Exames de rotina;</li>
            <li>
              &bull; Evitar exposição prolongada ao calor na área genital (como
              banhos quente);
            </li>
            <li>&bull; Uso de preservativos;</li>
            <li>&bull; Realizar autoexame dos testículos;</li>
            <li>&bull; Higienize o pênis após a relação sexual.</li>
          </ul>
        </div>
      </div>
    </section>
    <!--end banner-->

    <section class="image">
      <!--svg-->
      <div id="container">
        <img id="mainImage" :src="image" @load="fetchSvg" />
        <div>
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
                <h3>Câncer de próstata</h3>
              </div>
              <div class="lado-atras">
                <p>
                  O câncer de próstata é o tumor mais comum em homens,
                  principalmente a partir dos 50 anos, e afeta a próstata, uma
                  glândula abaixo da bexiga. Inicialmente, costuma ser
                  assintomático, mas em estágios avançados pode causar
                  dificuldade para urinar, dor na ejaculação e desconforto na
                  região lombar ou quadris. O diagnóstico é feito pelo exame de
                  PSA e toque retal. Quando detectado precocemente, o câncer de
                  próstata tem alto potencial de cura e pode ser tratado de
                  maneira eficaz.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Infecções Sexualmente Transmissíveis (IST)</h3>
              </div>
              <div class="lado-atras">
                <p>
                  São infecções que são transmitidas através de relações sexuais
                  desprotegidas. Elas podem afetar tanto homens quanto mulheres
                  e, se não tratadas, podem causar complicações graves à saúde.
                  Algumas das IST mais comuns em homens são a sífilis, herpes
                  genital, gonorreia. A maioria das ISTs pode ser tratada com
                  medicamentos, e algumas têm cura, enquanto outras podem ser
                  controladas, mas não curadas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Disfunção erétil (DE)</h3>
              </div>
              <div class="lado-atras">
                <p>
                  Refere-se à dificuldade contínua de conseguir ou manter uma
                  ereção rígida o bastante para a relação sexual. É uma condição
                  comum que pode afetar homens de qualquer idade, embora seja
                  mais frequente entre aqueles mais velhos. A DE pode indicar a
                  presença de problemas de saúde subjacentes e tem o potencial
                  de afetar de forma significativa a qualidade de vida e a
                  autoconfiança da pessoa. Não tem uma cura geral para a
                  disfunção erétil, mas existem tratamentos.
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
        O sistema reprodutor masculino desempenha um papel crucial na reprodução
        e na saúde sexual. Composto por órgãos internos e externos, ele é
        responsável pela produção de espermatozoides e hormônios sexuais, além
        de facilitar a fertilização. A saúde desse sistema é essencial para o
        bem-estar geral do homem, e problemas como disfunção erétil, infecções e
        câncer de próstata podem afetar significativamente a qualidade de vida.
        A conscientização sobre essas doenças e a importância de exames
        regulares são fundamentais para a detecção precoce de condições
        negativas.
      </p>
    </section>
    <!--end conclusão-->

    <section class="reference">
      <!--referencias-->
      <details>
        <summary>REFERÊNCIAS</summary>
        <p>
          <a
            href="https://medprev.online/blog/saude/dia-internacional-do-homem-cuidados-com-a-higiene-intima-masculina/"
            >MED PREV</a
          >
        </p>
        <p>
          <a
            href="https://uromed.com.br/artigos/doencas-que-mais-afetam-o-penis/"
            >Uromed</a
          >
        </p>
        <p>
          <a
            href="https://brasilescola.uol.com.br/biologia/sistema-reprodutor-masculino.htm"
            >Brasil Escola</a
          >
        </p>
      </details>
    </section>
    <!--referencias-->

    <section class="system">
      <!--sistemas-->
      <router-link to="/">VEJA OUTROS SISTEMAS</router-link>
    </section>
    <!--end sistemas-->

    <section class="reproduce">
      <!--reprodutor feminino-->
      <router-link to="/reprodutor-feminino"
        >SISTEMA REPRODUTOR FEMININO</router-link
      >
    </section>
    <!--end reprodutor feminino-->
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
