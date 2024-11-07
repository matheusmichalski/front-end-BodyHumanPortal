<script setup>
import Footer from '../../geral/Footer.vue'
import Header from '../../geral/Header.vue'
import { ref, onMounted } from 'vue'
import svgFile from '../../img/sistemas/reprodutor/feminino/feminino.svg'

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
    const response = await fetch('/feminino.json')
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
    <section class="banner feminino">
      <!--banner-->
      <img src="../../img/sistemas/reprodutor/feminino/reprodutor-feminino.png" alt="banner reprodutor feminino" />
      <h1>SISTEMA REPRODUTOR FEMININO</h1>
      <div>
        <div class="structure">
          <h2>Estrutura</h2>
          <ul>
            <li>
              <p>
                O aparelho genital feminino é composto pelos órgãos genitais
                internos e externos.
              </p>
              <br />
            </li>
            <li>
              <p>Internos:</p>
            </li>
            <li>&bull; Ovários;</li>
            <li>&bull; Tubas uterinas (Trompas de Falópio);</li>
            <li>&bull; Útero;</li>
            <li>&bull; Vagina.</li>
            <li>
              <br />
              <p>Externos:</p>
            </li>
            <li>&bull; Vestíbulo;</li>
            <li>&bull; Clitóris;</li>
            <li>&bull; Pequenos lábios;</li>
            <li>&bull; Grandes lábios.</li>
          </ul>
        </div>

        <div class="care">
          <h2>Cuidados</h2>
          <ul>
            <li>&bull; Higienizar a região genital de forma correta;</li>
            <li>&bull; Consultas ginecológicas frequentes;</li>
            <li>
              &bull; Use lenços umedecidos (hipoalergênicos e sem fragrâncias.);
            </li>
            <li>&bull; Compreender o ciclo menstrual;</li>
            <li>&bull; Dê preferência a roupas íntimas de algodão;</li>
            <li>&bull; Uso de preservativos.</li>
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
                <h3>Endometriose</h3>
              </div>
              <div class="lado-atras">
                <p>
                  A endometriose ocorre quando células do endométrio se fixam
                  fora do útero, como nos ovários ou na região abdominal,
                  causando dor, cólicas menstruais intensas, diarreia, dor
                  pélvica e desconforto durante o sexo. Essa condição
                  ginecológica também pode dificultar a gravidez. Embora não
                  tenha cura, a endometriose pode ser tratada para controlar os
                  sintomas e melhorar a qualidade de vida.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Câncer de mama</h3>
              </div>
              <div class="lado-atras">
                <p>
                  O câncer de mama é um tumor causado pela multiplicação de
                  células anormais nas mamas. Existem tipos variados, com
                  diferentes graus de agressividade. Os sintomas incluem nódulos
                  na mama ou axila, mudanças no tamanho ou formato da mama,
                  alterações na pele, como vermelhidão ou descamação, e
                  alterações no mamilo, como inversão. Quanto mais cedo o câncer
                  de mama é detectado, maiores são as chances de cura.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Hiperplasia endometrial</h3>
              </div>
              <div class="lado-atras">
                <p>
                  A hiperplasia endometrial é caracterizada pelo aumento da
                  espessura do endométrio devido à multiplicação das células das
                  glândulas e do estroma, que é o tecido de suporte do útero. A causa é a quantidade excessiva de
                  estrogênio
                  no corpo em comparação com a progesterona e certas condições,
                  como obesidade, diabetes e ciclos menstruais irregulares,
                  podem aumentar esse risco. Além disso, a hiperplasia
                  endometrial é uma condição tratável, com opções que incluem
                  terapia hormonal e, em casos graves, procedimentos
                  cirúrgicos.
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
        O sistema reprodutor feminino é importante para a saúde das mulheres.
        Conhecer condições como endometriose, hiperplasia endometrial e câncer
        de mama é essencial para detectar problemas cedo e tratá-los
        corretamente. Adotar hábitos saudáveis, fazer consultas ginecológicas
        regulares e prestar atenção aos sinais do corpo são passos fundamentais
        para cuidar da saúde reprodutiva. A educação sobre essas condições ajuda
        as mulheres a buscar ajuda e a tomar boas decisões sobre sua saúde.
      </p>
    </section>
    <!--conclusão-->

    <section class="reference">
      <!--referencias-->
      <h2>Confira as referências científicas utilizadas para a criação desta pagina:</h2>
      <details>
        <summary>REFERÊNCIAS</summary>
          <a href="https://www.gruposhbrasil.com.br/vida-e-saude/saude-intima-reprodutiva-da-mulher/">Grupo SH
            Brasil</a>
          <a href="https://bvsms.saude.gov.br/endometriose/">Biblioteca Virtual em Saúde</a>
          <a href="https://vencerocancer.org.br/tipos-de-cancer/cancer-de-mama-o-que-e/">Instituto Vencer o Câncer</a>
          <a href="https://www.rededorsaoluiz.com.br/doencas/hiperplasia-endometrial">Rede D'or</a>
          <a href="https://brasilescola.uol.com.br/biologia/aparelho-reprodutor-feminino.htm">Brasil Escola</a>
      </details>
    </section>
    <!--referencias-->

    <section class="system">
      <!--sistemas-->
      <router-link to="/">VEJA OUTROS SISTEMAS</router-link>
    </section>
    <!--end sistemas-->

    <section class="reproduce">
      <!--reprodutor masculino-->
      <router-link to="/reprodutor-masculino">SISTEMA REPRODUTOR MASCULINO</router-link>
    </section>
    <!--end reprodutor masculino-->
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
