<template>
  <main>
    <section class="banner"> <!--banner-->
      <img src="../../img/sistemas/urinario/urinario.png" alt="banner urinario">
      <h1>SISTEMA URINÁRIO</h1>
      <div>
        <div class="structure">
          <h2>Estrutura</h2>
          <ul>
            <li>O sistema urinário é composto por:</li>
            <li><br>&bull; Dois rins;</li>
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
            <li>&bull; Cuide da higiene na área genital para prevenir infecções;</li>
            <li>&bull; Pratique exercícios regularmente;</li>
            <li>&bull; Consulte seu médico regularmente.</li>
          </ul>
        </div>
      </div>
    </section> <!--end banner-->

    <section class="image"> <!--svg-->
      <div id="container">
        <img src="../../img/sistemas/urinario/urinario.svg" onload="fetchSvg(this)">
        <div class="text">
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
                <h3>Infecção urinária</h3>
              </div>
              <div class="lado-atras">
                <p> É uma condição comum causada pela proliferação de microrganismos, como bactérias ou
                  fungos, em partes do sistema urinário (rins, ureteres, bexiga e uretra). Geralmente,
                  afeta a bexiga (cistite) e a uretra (uretrite), com sintomas como dor, desconforto e
                  queimação ao urinar. Pode ocorrer devido ao desbalanço da microbiota da região
                  genital, causado por fatores como estresse ou higiene inadequada. A infecção
                  urinária tem cura, sendo tratada normalmente com antibióticos para eliminar as
                  bactérias.</p>
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
                <p>A uretrite é um tipo de infecção urinária que afeta a uretra, o canal responsável
                  pela eliminação da urina. Essa condição provoca sintomas como vontade frequente de
                  urinar, dor ou ardor ao urinar e corrimento amarelo. Normalmente, a uretrite é
                  causada por infecções sexualmente transmissíveis, como clamídia, gonorreia,
                  tricomoníase e herpes, mas também pode ocorrer devido a traumas ou irritações na
                  uretra, que podem ser provocadas por produtos químicos. Além disso, infecções
                  bacterianas e virais também podem levar à inflamação da uretra. A uretrite costuma
                  ser curada.</p>
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
                <p>A insuficiência renal, ou falência renal, é a perda da capacidade dos rins de filtrar
                  o sangue, levando ao acúmulo de toxinas no corpo. Pode ser aguda (causada por
                  desidratação, infecções ou medicamentos) ou crônica (relacionada a doenças como
                  diabetes e hipertensão). Causa complicações como pressão alta e acidose, com
                  sintomas de falta de ar, palpitações e confusão mental. Embora não tenha cura, o
                  tratamento adequado melhora a qualidade de vida e pode retardar a progressão da
                  doença.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> <!--doenças-->

    <section class="conclusion"> <!--conclusão-->
      <h2>Conclusão</h2>
      <p>O sistema urinário desempenha um papel fundamental na manutenção da homeostase do organismo, sendo
        responsável pela filtração de resíduos, regulação do equilíbrio hídrico e eletrolítico, além da
        eliminação de substâncias tóxicas. A prevenção de doenças, como infecções urinárias e insuficiência
        renal, pode ser alcançada por meio de hábitos saudáveis, como a hidratação adequada, higiene pessoal e
        consultas médicas regulares. É crucial cuidar da saúde do sistema urinário, pois seu funcionamento
        eficiente impacta diretamente na qualidade de vida e na prevenção de complicações graves.</p>
    </section> <!--conclusão-->

    <section class="reference"> <!--referencias-->
      <details>
        <summary>REFERÊNCIAS</summary>
        <p><a href="https://clinicacub.com.br/10-habitos-saudaveis-para-um-sistema-urinario-saudavel/">Clínica
            Urológica da Bahia</a></p>
        <p><a href="https://www.tuasaude.com/doencas-do-sistema-urinario/">Rede D'or</a></p>
        <p><a
            href="https://www.oncoguia.org.br/conteudo/a-bexiga/655/120/#:~:text=A%20sua%20principal%20fun%C3%A7%C3%A3o%20%C3%A9,%C3%A9%20eliminada%20atrav%C3%A9s%20da%20uretra">Oncoguia</a>
        </p>
        <p><a
            href="https://www.unifal-mg.edu.br/histologiainterativa/sistema-urinario/#:~:text=O%20aparelho%20urin%C3%A1rio%20%C3%A9%20constitu%C3%ADdo,ou%20produzidas%20pelo%20metabolismo%20corporal">Unifal
            MG</a></p>
        <p><a href="https://drauziovarella.uol.com.br/corpo-humano/ureter/">Uol</a></p>
      </details>
    </section> <!--end referencias-->

    <section class="system"> <!--sistemas-->
      <router-link to="/">VEJA OUTROS SISTEMAS</router-link>
    </section> <!--end sistemas-->
  </main>
</template>

<style scoped>
main {
  margin: 0 auto;
}

#svg-urninario {
  cursor: pointer;
}

#svg-urninario a:hover path {
  fill: black !important;
}

.orgao:hover path {
  fill: #78866b !important;
  background: red;
}

#container {
  display: flex;
  justify-content: center;
  padding-top: 100px;
}

#text {
  width: 350px;
  height: auto;
  padding-left: 100px;
  text-align: center;
  color: black;
  text-shadow: 1px 1px 1px white;
  max-width: 30vw;
  min-width: 30vw;
  margin: 5vw 10vw 0 0;
}

main div h1 {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 5vw 2vw 0 0.5vw;
}
</style>