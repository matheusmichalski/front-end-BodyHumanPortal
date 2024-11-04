<template>
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
        <img src="../../img/sistemas/reprodutor/feminino/feminino.svg" onload="fetchSvg(this)">
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
</template>

<style scoped>
main {
  margin: 0 auto;
}

#svg-feminino {
  cursor: pointer;
}

#svg-feminino a:hover path {
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