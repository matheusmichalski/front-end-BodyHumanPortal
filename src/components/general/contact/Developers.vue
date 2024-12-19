<script setup>
import DevelopersCards from './DevelopersCards.vue';
</script>

<template>
  <section id="developers">
    <div class="line">
      <DevelopersCards
      name="Bianca Isadora Joselli de Souza"
      position="FRONT-END"
      email="biancajoselli.ifc@gmail.com"
      number="(47) 99790-4799"
      picture="/img/general/contact/developers/bianca.png"
      description="Desenvolvedora Bianca" />
    </div>

    <div class="line">
      <DevelopersCards
      name="Helena Soares Pereira"
      position="FRONT-END"
      email="helenasoarees23@gmail.com"
      number="(47) 99776-0827"
      picture="/img/general/contact/developers/helena.png"
      description="Desenvolvedora Helena" />

      <DevelopersCards
      name="Luiza Westrupp do Carmo"
      position="FRONT-END"
      email="luizawestruppdocarmo@gmail.com"
      number="(47) 99200-7063"
      picture="/img/general/contact/developers/luiza.png"
      description="Desenvolvedora Luiza" />
    </div>

    <div class="line">
      <DevelopersCards
      name="Matheus Miguel Michalski"
      position="DBA"
      email="matheus.michalskifc@gmail.com"
      number="(47) 99622-1285"
      picture="/img/general/contact/developers/matheus.png"
      description="Desenvolvedor Matheus" />
    </div>

    <div class="line">
      <DevelopersCards
      name="Nicole Ferreira Mello"
      position="FRONT-END"
      email="nicfmello@gmail.com"
      number="(47) 99113-8151"
      picture="/img/general/contact/developers/"
      description="Desenvolvedora Nicole" />

      <DevelopersCards
      name="Rafael August Otto"
      position="FRONT-END"
      email="rafael.august.otto.ifc@gmail.com"
      number="(47) 98867-2983"
      picture="/img/general/contact/developers/rafael.png"
      description="Desenvolvedor Rafael" />
    </div>

    <div class="line">
      <DevelopersCards
      name="Vitor André da Silva"
      position="FRONT-END"
      email="alunovitorandre@gmail.com"
      number="(47) 99157-8502"
      picture="/img/general/contact/developers/vitor.png"
      description="Desenvolvedor Vitor" />
    </div>
  </section>
</template>

<style scoped>
#developers {
  padding: 0 5vw 5vw 5vw;
  display: block;
  justify-content: center;
  margin-top: -13vw;

  .line {
    display: flex;
    justify-content: center;
    margin-top: -20vw;
  }

  .line:first-of-type {
    margin-top: -10vw;
  }
}
</style>
