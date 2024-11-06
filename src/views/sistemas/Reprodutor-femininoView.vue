<script setup>
import Footer from '../../geral/Footer.vue'
import Header from '../../geral/Header.vue'
import { ref } from 'vue';
import svgFile from '../../img/sistemas/reprodutor/feminino/feminino.svg'
const orgaos = [];

const image = ref("/img/sistemas/reprodutor/feminino/feminino.svg")

async function fetchSvg() {
  console.log(svgFile)

  fetch(`http://localhost:5173${image.value}`)
    .then((response) => response.text())
    .then((response) => {
      const span = document.createElement('span');
      span.innerHTML = response;
      const inlineSvg = span.getElementsByTagName('svg')[0];

      if (inlineSvg) {
        console.log("SVG encontrado");
        inlineSvg.setAttribute('id', 'svg-feminino');
        const imageToBeHandled = document.getElementById("mainImage")
        imageToBeHandled.parentNode.replaceChild(inlineSvg, imageToBeHandled);
        getActions();
      }
      else {
        console.error("Erro")
      }
      return true;
    })

    .catch((error) => {
      console.error("erro ao carregar imagem: ", error);
    })
}

const getActions = () => { // chamada para ação //
  const organ = document.getElementsByClassName('orgaos'); // buscar elementos de orgão //
  console.log("Elementos encontrados", organ);
  for (let i = 0; i < organ.length; i++) { // adicione 1 estado enquanto o numero de órgãos for maior que o i //
    organ[i].onclick = () => { orgaoClicked(organ[i]); }; // execute a função de gerenciamento stateClicked no estado atual, para cada estado clicado
  }
  getOrgaos(); // preencher a variavel estados = [] // 
};

const getOrgaos = () => {
  fetch('/feminino.json') // puxar órgãos //
    .then((response) => response.text()) // resposta texto // 
    .then((response) => {
      orgaos.push(...JSON.parse(response)); // ... para executar a cada resposta; e .parse para trazer os órgãos // 
      console.log("Dados encontrados", orgaos)
    });
};

const orgaoClicked = (orgao) => { // criação da função orgaoClicked //
  console.log("Órgão encontrado");
  const code = orgao.getAttribute('code'); // pegando o codigo do órgão, que está no JSON //
  console.log("Code do órgão:", code)
  const uf = orgaos.find(orgao => orgao.code === code); // buscando o órgão, que deve ser igual ao code //
  if (!uf) {
    console.log("Não encontrado");
    return; // se não achar, retorna algo vazio //
  }
  fillContent(uf); // preenchimento de conteúdo //
};

const fillContent = ({ nome, descricao }) => { // preenchimento do conteúdo //
  const name = document.getElementById('nomeOrgao'); // nome do  órgão //
  const description = document.getElementById('descOrgao'); // descrição //
  console.log(nome, descricao);

  // innerText para inserir texto em cada variável //
  name.textContent = nome;
  description.textContent = descricao;
};
</script>

<template>
  <Header />
  <main>
    <section class="banner"> <!--banner-->
      <img src="../../img/sistemas/reprodutor/feminino/reprodutor-feminino.png" alt="banner reprodutor feminino">
      <h1>SISTEMA REPRODUTOR FEMININO</h1>
      <div>

        <div class="structure">
          <h2>Estrutura</h2>
          <ul>
            <li>
              <p>O aparelho genital feminino é composto pelos órgãos genitais internos e externos.</p>
              <br>
            </li>
            <li>
              <p>Internos: </p>
            </li>
            <li>&bull; Ovários;</li>
            <li>&bull; Tubas uterinas (Trompas de Falópio);</li>
            <li>&bull; Útero;</li>
            <li>&bull; Vagina.</li>
            <li>
              <br>
              <p>Externos: </p>
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
            <li>&bull; Use lenços umedecidos (hipoalergênicos e sem fragrâncias.);</li>
            <li>&bull; Compreender o ciclo menstrual;</li>
            <li>&bull; Dê preferência a roupas íntimas de algodão;</li>
            <li>&bull; Uso de preservativos.</li>
          </ul>
        </div>
      </div>
    </section> <!--end banner-->

    <section class="image"> <!--svg-->
      <div id="container">
        <img id="mainImage" :src="image" @load="fetchSvg">
        <div>
          <h1 id="nomeOrgao"></h1>
          <p id="descOrgao"></p>
        </div>
      </div>
    </section> <!--end svg-->

    <section class="disease"> <!--doenças-->
      <h2>Princípais Doenças</h2>
      <div>
        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Endometriose</h3>
              </div>
              <div class="lado-atras">
                <p>A endometriose ocorre quando células do endométrio se fixam fora do útero, como nos
                  ovários ou na região abdominal, causando dor, cólicas menstruais intensas, diarreia,
                  dor pélvica e desconforto durante o sexo. Essa condição ginecológica também pode
                  dificultar a gravidez. Embora não tenha cura, a endometriose pode ser tratada para
                  controlar os sintomas e melhorar a qualidade de vida.</p>
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
                <p>O câncer de mama é um tumor causado pela multiplicação de células anormais nas mamas.
                  Existem tipos variados, com diferentes graus de agressividade. Os sintomas incluem
                  nódulos na mama ou axila, mudanças no tamanho ou formato da mama, alterações na
                  pele, como vermelhidão ou descamação, e alterações no mamilo, como inversão. Quanto
                  mais cedo o câncer de mama é detectado, maiores são as chances de cura.</p>
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
                <p>A hiperplasia endometrial é caracterizada pelo aumento da espessura do endométrio
                  devido à multiplicação das células das glândulas e do estroma, que é o tecido de
                  suporte do útero. A principal causa disso é a quantidade excessiva de estrogênio no
                  corpo em comparação com a progesterona e certas condições, como obesidade, diabetes
                  e ciclos menstruais irregulares, podem aumentar esse risco. Além disso, a
                  hiperplasia endometrial é uma condição tratável, com opções que incluem terapia
                  hormonal e, em casos mais graves, procedimentos cirúrgicos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> <!--end doenças-->

    <section class="conclusion"> <!--conclusão-->
      <h2>Conclusão</h2>
      <p>O sistema reprodutor feminino é importante para a saúde das mulheres. Conhecer condições como
        endometriose, hiperplasia endometrial e câncer de mama é essencial para detectar problemas cedo e
        tratá-los corretamente. Adotar hábitos saudáveis, fazer consultas ginecológicas regulares e prestar
        atenção aos sinais do corpo são passos fundamentais para cuidar da saúde reprodutiva. A educação sobre
        essas condições ajuda as mulheres a buscar ajuda e a tomar boas decisões sobre sua saúde.</p>
    </section> <!--conclusão-->

    <section class="reference"> <!--referencias-->
      <details>
        <summary>REFERÊNCIAS</summary>
        <p><a href="https://www.gruposhbrasil.com.br/vida-e-saude/saude-intima-reprodutiva-da-mulher/">Grupo SH
            Brasil</a></p>
        <p><a href="https://bvsms.saude.gov.br/endometriose/">Biblioteca Virtual em Saúde</a></p>
        <p><a href="https://vencerocancer.org.br/tipos-de-cancer/cancer-de-mama-o-que-e/">Instituto Vencer o
            Câncer</a></p>
        <p><a href="https://www.rededorsaoluiz.com.br/doencas/hiperplasia-endometrial">Rede D'or</a></p>
        <p><a href="https://brasilescola.uol.com.br/biologia/aparelho-reprodutor-feminino.htm">Brasil Escola</a>
        </p>
      </details>
    </section> <!--referencias-->

    <section class="system"> <!--sistemas-->
      <router-link to="/">VEJA OUTROS SISTEMAS</router-link>
    </section> <!--end sistemas-->

    <section class="reproduce"> <!--reprodutor masculino-->
      <router-link to="/reprodutor-masculino">SISTEMA REPRODUTOR MASCULINO</router-link>
    </section> <!--end reprodutor masculino-->
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