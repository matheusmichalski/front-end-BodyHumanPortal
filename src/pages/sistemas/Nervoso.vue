<template>
  <main>
    <section class="banner"> <!--banner-->
      <img src="../../img/sistemas/nervoso/nervoso.png" alt="banner nervoso">
      <h1>SISTEMA NERVOSO</h1>
      <div>
        <div class="structure">
          <h2>Estrutura</h2>
          <ul>
            <li>
              <p>Esse sistema é dividido em duas partes:</p>
              <ul class="sublist">
                <li>Sistema Nervoso Central (SNC)
                  <ul class="sublist">
                    <li>&bull; Encéfalo:
                      <ul class="sublist">
                        <li>-Cérebro;</li>
                        <li>-Tronco Encefálico;</li>
                        <li>-Cerebelo.</li>
                      </ul>
                    </li>
                    <li>&bull; Medula espinhal.</li>
                  </ul>
                </li>
                <li>Sistema Nervoso Periférico (SNP)
                  <ul class="sublist">
                    <li>&bull; Terminações Nervosas;</li>
                    <li>&bull; Nervos;</li>
                    <li>&bull; Gânglios.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="care">
          <h2>Cuidados</h2>
          <ul>
            <li>&bull; Alimentação adequada;</li>
            <li>&bull; Prática regular de exercícios físicos;</li>
            <li>&bull; Ter uma rotina de sono de qualidade;</li>
            <li>&bull; Interações sociais;</li>
            <li>&bull; Evitar o tabagismo e o alcoolismo;</li>
            <li>&bull; Administrar o estresse do cotidiano.</li>
          </ul>
        </div>
      </div>
    </section> <!--end banner-->

    <section class="image"> <!--svg-->
      <img src="#" alt="image svg"> <!-- Image SVG -->
    </section> <!--end svg-->

    <section class="disease"> <!--doenças-->
      <h2>Princípais Doenças</h2>
      <div>
        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Mal de Alzheimer</h3>
              </div>
              <div class="lado-atras">
                <p>Doença neurodegenerativa. Esse transtorno causa principalmente a perda de memória (
                  sobretudo a curto prazo), perda de capacidade cognitiva, perda de habilidades
                  motoras, pode causar também depressão, ansiedade, entre outros aspectos. A causa
                  ainda não se sabe, porém, considera-se que seja algo relacionado a genética
                  (predisposição). Essa doença não tem cura, mas já existe tratamento que pode
                  diminuir os sintomas ou desacelerar o seu avanço.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Esclerose múltipla</h3>
              </div>
              <div class="lado-atras">
                <p> Doença autoimune crônica que prejudica o sistema imunológico. Distúrbio que pode
                  causar exaustão, tremores, espasmos musculares, dificuldade de concentração,
                  problemas para caminhar, perda de visão (pode ser em um ou nos dois olhos), entre
                  outros. Supõe que seja causada por fatores ambientais e genéticos. Não tem cura, mas
                  já se encontra tratamentos para amenizar os sintomas dessa doença.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Mal de Parkinson</h3>
              </div>
              <div class="lado-atras">
                <p>É uma doença neurodegenerativa. Condição qualificada pela diminuição criação de
                  neurotransmissores (dopamina). Essa enfermidade pode causar tremedeiras, lentidão de
                  reflexos musculares, redução de movimentos corporais, confusão mental, dificuldade
                  na fala, rigidez muscular, entre outros. Causada por fatores genéticos, ambientais e
                  etários ( geralmente a doença surge após idades mais avançadas). Não tem cura, mas
                  existem diversos tipos de tratamentos para retardar e diminuir os efeitos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> <!--end doenças-->

    <section class="conclusion"> <!--conclusão-->
      <h2>Conclusão</h2>
      <p> Esse sistema é essencial para o funcionamento do corpo humano. Cuidar dele de forma adequada garante
        tanto o bem-estar físico como o bem-estar mental. Ter uma vida saudável é assegurar que o corpo funcione
        em harmonia.</p>
    </section> <!--end conclusão-->

    <section class="reference"> <!--referencias-->
      <details>
        <summary>REFERÊNCIAS</summary>
        <p><a href="https://brasilescola.uol.com.br/biologia/sistema-nervoso.htm">Brasil Escola</a></p>
        <p><a
            href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/eu-quero-me-exercitar/noticias/2022/cuidados-com-a-alimentacao-ao-praticar-atividade-fisica">Gov.br</a>
        </p>
        <p><a href="https://www.hcor.com.br/especialidades-servicos/especialidades/neurologia/doencas/">hcor</a>
        </p>
        <p><a
            href="https://brasil.un.org/pt-br/74566-sa%C3%BAde-mental-depende-de-bem-estar-f%C3%ADsico-e-social-diz-oms-em-dia-mundial">Nações
            Unidas Brasil</a></p>
        <p><a href="https://mundoeducacao.uol.com.br/psicologia/aparelho-psiquico.htm">Mundo Educação</a></p>
        <p><a href="https://brasilescola.uol.com.br/biologia/cerebro-humano.htm">Brasil Escola</a></p>
      </details>
    </section> <!--end referencias-->

    <section class="system"> <!--outros sistemas-->
      <a href="#">VEJA OUTROS SISTEMAS</a>
    </section> <!--end outros sistemas-->
  </main>
</template>

<style>
/*=======================
    FORMATAÇÃO MAIN
========================*/

section.banner img {
  width: 100%;
  box-shadow: 2vw 1vw 3vw rgba(0.5, 0, 0, 0.5);
}


section.banner h1 {
  font-size: 2.9rem;
  font-weight: bolder;
  color: #010A5C;
  text-align: center;
  margin: 8vw 25vw 3vw 25vw;
  text-shadow: 7px 5px 8px rgba(0.3, 0, 0, 0.3);
  ;

}

section.banner>div {
  display: flex;
  justify-content: center;

}

section.banner div.structure {
  margin: 3vw 1vw 5vw 0;
  display: column;

}



section.banner div.structure ul {
  background-color: #010A5C;
  text-align: center;
  color: white;
  padding: 30px 10vw 30px 10vw;
  border-radius: 25px;
  box-shadow: 2vw 1vw 3vw rgba(0.5, 0, 0, 0.5);
  margin: 0 0 0 35px;

}

section.banner div.structure ul.sublist {
  background-color: #010A5C;
  color: white;
  box-shadow: none;
  padding: 0 6.5vw 0 0;
  text-align: end;
}

section.banner div.structure ul li {
  font-size: 1rem;
  text-align: justify;
  line-height: 25px;

}

section.banner div.care {
  margin: 3vw 0 3vw 1vw;

  display: column;

}

section.banner div>h2 {
  margin: 0 0 20px 0;
  text-align: center;
  font-size: 2rem;
  text-shadow: 1vw 2vw 3vw rgba(0.5, 0, 0, 0.5);
  ;
  color: #010A5C;

}

section.banner div.care ul {
  background-color: #C6E1F4;
  text-align: center;
  color: #010A5C;
  padding: 30px 10vw 30px 10vw;
  border-radius: 25px;
  box-shadow: 0.5vw 1vw 2vw rgba(0.5, 0, 0, 0.5);
  margin: 0 40px 0 0;


}

section.banner div.care ul li {
  font-size: 1rem;
  text-align: justify;
  line-height: 25px;

}

section.image {
  background-color: #E2F2F0;
  border-radius: 40px;
  margin: 40px 3.5vw 40px 3.5vw;
  box-shadow: 2vw 1vw 3vw rgba(0.5, 0, 0, 0.5);
}

section.image img {
  padding: 30px 0 30px 20px;
}

section.disease h2 {
  margin: 0 0 20px 0;
  text-align: center;
  font-size: 2rem;
  text-shadow: 1vw 2vw 5vw rgba(0.5, 0, 0, 0.5);
  ;
  color: #010A5C;
}

/*=======================
    FORMATAÇÃO CARD
========================*/

section.disease div {
  display: flex;
}

.cartoes {
  /*container*/
  position: relative;
  z-index: 5;
  width: 100%;
  margin: 2vw 0 0 0;
  perspective: 1000px;
}

.cartao {
  /*flip-card*/
  height: 29vw;
  width: 25vw;
  text-align: center;
  margin: 0 3.5vw 0 3.5vw;
  position: relative;
}

.cartaoInterno {
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  transform-origin: center;
}

.cartao:hover .cartaoInterno {
  transform: rotateX(-180deg);
}

.cartao .lado-frente {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cartao .lado-atras {
  transform: rotateX(180deg);
}

.lado-frente,
.lado-atras {
  position: absolute;
  backface-visibility: hidden;
  border-radius: 25px;
  background-color: #010A5C;
  height: 29vw;
  width: 25vw;
  box-shadow: 1vw 1vw 3vw rgba(0.5, 0, 0, 0.5);
}

.cartao h3 {
  font-size: 2.5rem;
  color: white;
}



.cartao p {
  font-size: 1rem;
  color: white;
  margin: 2vw 2vw;
  justify-content: center;
  text-align: justify;
}

/*==========================
    FIM DA FORMATAÇÃO CARD
===========================*/

section.conclusion h2 {
  margin: 40px 0 20px 0;
  text-align: center;
  font-size: 2rem;
  color: #010A5C;
  text-shadow: 1vw 2vw 5vw rgba(0.5, 0, 0, 0.5);
  ;
}

section.conclusion p {
  background-color: #C6E1F4;
  text-align: justify;
  margin: 40px 3.5vw 40px 3.5vw;
  padding: 3vw;
  border-radius: 25px;
  box-shadow: 1vw 1vw 3vw rgba(0.5, 0, 0, 0.5);
  color: #010A5C;
}

section.reference {
  background-color: #010A5C;
  color: white;
  border-radius: 19px;
  margin: 50px 3.5vw 40px 3.5vw;
  box-shadow: 2vw 1vw 2vw rgba(0.5, 0, 0, 0.5);


}

section.reference details summary {
  padding: 1vw;
  text-align: center;
  font-size: 1.15rem;
}

section.reference details p {
  margin: 15px 3.5vw 15px 3.5vw;
  text-align: center;
  padding: 0.2vw 0 2vw 0;
}

section.reference details a {
  text-decoration: none;
  color: white;

}

section.system {
  font-weight: bold;
  font-size: 1.3rem;
  text-align: center;
  text-shadow: 1vw 2vw 3vw rgba(0.5, 0, 0, 0.5);
  ;
  border-radius: 25vw;
  background-color: #010A5C;
  margin: 5vw 37vw 5vw 37vw;
  box-shadow: 1vw 1vw 2vw rgba(0.5, 0, 0, 0.5);
  padding: 1.3vw;
  justify-content: center;
}

section.system a {
  color: white;
  text-decoration: none;
  text-align: center;
}

/*===============================
    FORMATAÇÃO BOTÃO REPRODUTOR
=================================*/


section.reproduce {
  text-align: center;
  margin: 9vw;
  justify-content: center;

}

section.reproduce a {
  text-decoration: none;
  background-color: #C6E1F4;
  padding: 3vw;
  border-radius: 25px;
  color: #010A5C;
  font-weight: bold;
}
</style>
