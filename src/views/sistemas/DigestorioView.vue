<template>
  <main>
    <section class="banner"> <!--banner-->
      <img src="../../img/sistemas/digestorio/digestorio.png" alt="banner digestorio">
      <h1>SISTEMA DIGESTÓRIO</h1>

      <div>
        <div class="structure">
          <h2>Estrutura</h2>
          <ul>
            <li>O sistema digestivo é composto por:</li>
            <li><br>&bull; Boca;</li>
            <li>&bull; Faringe;</li>
            <li>&bull; esôfago;</li>
            <li>&bull; Estômago;</li>
            <li>&bull; Intestino delgado</li>
            <li>&bull; Intestino grosso;</li>
            <li>&bull; Ânus;</li>
            <li>
              <br>
              <p>Fazem parte também as glândulas acessórias, que são:</p>
            </li>
            <li><br>&bull; Glândulas salivares;</li>
            <li>&bull; Pâncreas;</li>
            <li>&bull; Fígado.</li>
          </ul>
        </div>

        <div class="care">
          <h2>Cuidados</h2>
          <ul>
            <li>&bull; Higiene adequada dos alimentos que ingere;</li>
            <li>&bull; Não comer e já ir se deitar;</li>
            <li>&bull; Tomar cuidados com medicamentos que toma;</li>
            <li>&bull; Beba muita água;</li>
            <li>&bull; Evite o consumo de álcool e cigarro;</li>
            <li>&bull; Realize exames regulares.</li>
          </ul>
        </div>
      </div>
    </section> <!--end banner-->

    <section class="image"> <!--svg-->
      <div id="container">
        <img src="../../img/sistemas/digestorio/digestorio.svg" onload="fetchSvg(this)" />
        <div id="text">
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
                <h3>Doença do Refluxo Gastroesofágico (DRGE)</h3>
              </div>
              <div class="lado-atras">
                <p>Também conhecida como refluxo, essa condição afeta a saúde digestiva. Ela ocorre
                  quando o ácido do estômago flui de volta para o esôfago, provocando sintomas e
                  possíveis complicações. Um dos principais sinais é a azia, que se manifesta como uma
                  sensação de queimação. Além disso, o conteúdo estomacal pode alcançar a boca,
                  resultando em dor de garganta, tosse, rouquidão e uma sensação de aperto na
                  garganta. A DRGE pode ser controlada e gerenciada, mas não há uma cura definitiva.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Gastrite</h3>
              </div>
              <div class="lado-atras">
                <p>É uma doença inflamatória que afeta a mucosa do estômago. Essa inflamação pode ser
                  aguda (de início súbito) ou crônica (de longa duração, que pode persistir por toda a
                  vida). A gastrite aguda pode ser causada pelo consumo excessivo de bebidas
                  alcoólicas, uso de certos medicamentos, estresse, entre outros fatores. Por outro
                  lado, a gastrite crônica é frequentemente causada pela infecção pela bactéria
                  Helicobacter pylori. A gastrite pode ser tratada e, em muitos casos, curada.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Câncer gastrointestinal</h3>
              </div>
              <div class="lado-atras">
                <p>O câncer gastrointestinal alto refere-se a tumores que se formam no esôfago, estômago
                  e duodeno, que são partes essenciais do trato digestivo. Esses órgãos desempenham
                  papeis cruciais na digestão, sendo responsáveis por transportar os alimentos e
                  iniciar o processo de digestão antes que os nutrientes sejam absorvidos no intestino
                  delgado. O câncer gastrointestinal pode ser tratado, e em certas situações, há
                  chance de cura.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> <!--end doenças-->

    <section class="conclusion"> <!--conclusão-->
      <h2>Conclusão</h2>
      <p>O sistema digestivo é fundamental para a saúde, pois realiza a digestão e absorção de nutrientes
        essenciais ao corpo. Composto por órgãos como estômago, intestinos, fígado e pâncreas, ele transforma
        alimentos em energia e elimina resíduos. Manter a saúde digestiva é essencial, já que doenças como
        gastrite, refluxo gastroesofágico e câncer gastrointestinal podem afetar a qualidade de vida. Assim,
        hábitos saudáveis e cuidados regulares são importantes para garantir seu bom funcionamento.</p>
    </section> <!--end conclusão-->

    <section class="reference"> <!--referencias-->
      <details>
        <summary>REFERÊNCIAS</summary>
        <p><a
            href="https://brasilescola.uol.com.br/biologia/sistema-digestivo.htm#:~:text=O%20sistema%20digest%C3%B3rio%20%C3%A9%20formado,gl%C3%A2ndulas%20salivares%2C%20p%C3%A2ncreas%20e%20f%C3%ADgado">Brasil
            Escola</a></p>
        <p><a href="https://www.leforte.com.br/blog/quais-problemas-podem-afetar-a-saude-digestiva/">Leforte</a></p>
        <p><a
            href="https://www.hospitaloswaldocruz.org.br/centro-especializado/oncologia/cancer-gastrointertinal-alto/">Hospital
            Oswaldo Cruz</a></p>
      </details>
    </section> <!--end referencias-->

    <section class="system"> <!--sistemas-->
      <router-link to="/">VEJA OUTROS SISTEMAS</router-link>
    </section> <!--end sitemas-->
  </main>
</template>

<style scoped>
main {
  margin: 0 auto;
}

#svg-digestivo {
  cursor: pointer;
}

#svg-digestivo a:hover path {
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