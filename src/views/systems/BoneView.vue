<script setup>
import systems from '../../components/desktop/systems/systems.vue'
import systemsMobile from '@/components/mobile/systems/systemsMobile.vue'
</script>

<template>
  <main class="is-desktop">
    <systems
      system="Esquelético"
      system-gif="osseo.gif"
      content1p="O corpo humano adulto possui 206 ossos, distribuídos em quatro categorias:
    <ul>
      <li>Ossos longos: Exemplos incluem fêmur e úmero.</li>
      <li>Ossos curtos: Exemplos são os ossos do punho (carpais).</li>
      <li>Ossos chatos: Exemplos incluem esterno e escápula.</li>
      <li>Ossos irregulares: Exemplos são vértebras e ossos da face.</li>
    </ul>
    O esqueleto é dividido em duas partes:
    <ul>
      <li>Esqueleto axial: Composto pelo crânio, osso hioide, vértebras, costelas e esterno.</li>
      <li>Esqueleto apendicular: Formado pelos membros superiores e inferiores, além das cinturas escapular e pélvica.</li>
    </ul>"
      content1Reference=""
      content2p="<ul>
      <li>Exponha-se mais ao sol (de maneira moderada);</li>
      <li>Alimentação rica em cálcio;</li>
      <li>Tenha o peso adequado (proporcional a altura);</li>
      <li>Evitar o tabagismo e o alcoolismo;</li>
      <li>Prática regular de exercícios físicos;</li>
      <li>Modere a cafeína.</li>
    </ul>"
      content2Reference=""
      organImage="osseo.svg"
      organ-data="osseo.json"
      illness1h3="Osteoporose"
      illness1p="Ela diminui a densidade óssea e faz com que os ossos fiquem enfraquecidos  ampliando o risco de fratura. Causa diminuição de altura e postura curvada. Não tem cura, no entanto, encontra-se tratamentos que aumentam a qualidade de vida do paciente."
      illness1Reference=""
      illness2h3="Câncer ósseo"
      illness2p="É uma doença rara que prejudica os ossos. Pode ser primário, quando é produzido diretamente no osso, incluem osteossarcoma, o condrossarcoma e o sarcoma de Ewing , ou pode ser secundário, que se espalha de outra parte do corpo (metástase).  Alguns sintomas são dor nos ossos, fragilidade (o que aumenta o risco de fraturas), inchaço, entre outros. Não há uma causa exata, mas se tem fatores que facilitam o seu desenvolvimento, como a genética, idade, exposição a radiação e doenças ósseas preexistentes. Ainda não há cura, porém, existem tratamentos para amenizar os efeitos."
      illness2Reference=""
      illness3h3="Doença de Paget (DPO)"
      illness3p="É um distúrbio crônico que afeta a renovação dos ossos. Nessa condição, há um aumento na destruição dos ossos, causado por células chamadas osteoclastos, que reabsorvem o osso de maneira excessiva. Após essa reabsorção, o corpo tenta consertar os ossos, mas o faz de forma desorganizada. Isso pode levar a grandes deformidades, especialmente nos ossos longos do corpo e no crânio. É uma doença que não tem cura, mas pode ser tratada para aliviar os sintomas."
      illness3Reference="https://bestpractice.bmj.com/topics/pt-br/525#:~:text=A%20doen%C3%A7a%20de%20Paget%20%C3%B3ssea,maioria%20dos%20pacientes%20%C3%A9%20assintom%C3%A1tica"
      content3p="Esse sistema é de suma importância para o corpo humano, é ele quem sustenta o corpo humano e permite os movimentos do mesmo. Para manter seu bom funcionamento deve-se aderir a práticas boas. Prevenir doenças ósseas é essencial para uma vida longa e ativa."
    />
  </main>
  <main class="is-mobile">
    <systemsMobile
      system="Esquelético"
      system-gif="osseo.gif"
      top-gif="2vw"
      sizeGif="40vw"
      rigth-gif="-3vw"
      content1p="O corpo humano adulto possui 206 ossos, distribuídos em quatro categorias:
    <ul>
      <li>Ossos longos: Exemplos incluem fêmur e úmero.</li>
      <li>Ossos curtos: Exemplos são os ossos do punho (carpais).</li>
      <li>Ossos chatos: Exemplos incluem esterno e escápula.</li>
      <li>Ossos irregulares: Exemplos são vértebras e ossos da face.</li>
    </ul>
    O esqueleto é dividido em duas partes:
    <ul>
      <li>Esqueleto axial: Composto pelo crânio, osso hioide, vértebras, costelas e esterno.</li>
      <li>Esqueleto apendicular: Formado pelos membros superiores e inferiores, além das cinturas escapular e pélvica.</li>
    </ul>"
      content1Reference=""
      content2p="<ul>
      <li>Exponha-se mais ao sol (de maneira moderada);</li>
      <li>Alimentação rica em cálcio;</li>
      <li>Tenha o peso adequado (proporcional a altura);</li>
      <li>Evitar o tabagismo e o alcoolismo;</li>
      <li>Prática regular de exercícios físicos;</li>
      <li>Modere a cafeína.</li>
    </ul>"
      content2Reference=""
      organImage="osseo.svg"
      organ-data="osseo.json"
      illness1h3="Osteoporose"
      illness1p="Ela diminui a densidade óssea e faz com que os ossos fiquem enfraquecidos  ampliando o risco de fratura. Causa diminuição de altura e postura curvada. Não tem cura, no entanto, encontra-se tratamentos que aumentam a qualidade de vida do paciente."
      illness1Reference=""
      illness2h3="Câncer ósseo"
      illness2p="É uma doença rara que prejudica os ossos. Pode ser primário, quando é produzido diretamente no osso, incluem osteossarcoma, o condrossarcoma e o sarcoma de Ewing , ou pode ser secundário, que se espalha de outra parte do corpo (metástase).  Alguns sintomas são dor nos ossos, fragilidade (o que aumenta o risco de fraturas), inchaço, entre outros. Não há uma causa exata, mas se tem fatores que facilitam o seu desenvolvimento, como a genética, idade, exposição a radiação e doenças ósseas preexistentes. Ainda não há cura, porém, existem tratamentos para amenizar os efeitos."
      illness2Reference=""
      illness3h3="Doença de Paget (DPO)"
      illness3p="É um distúrbio crônico que afeta a renovação dos ossos. Nessa condição, há um aumento na destruição dos ossos, causado por células chamadas osteoclastos, que reabsorvem o osso de maneira excessiva. Após essa reabsorção, o corpo tenta consertar os ossos, mas o faz de forma desorganizada. Isso pode levar a grandes deformidades, especialmente nos ossos longos do corpo e no crânio. É uma doença que não tem cura, mas pode ser tratada para aliviar os sintomas."
      illness3Reference="https://bestpractice.bmj.com/topics/pt-br/525#:~:text=A%20doen%C3%A7a%20de%20Paget%20%C3%B3ssea,maioria%20dos%20pacientes%20%C3%A9%20assintom%C3%A1tica"
      content3p="Esse sistema é de suma importância para o corpo humano, é ele quem sustenta o corpo humano e permite os movimentos do mesmo. Para manter seu bom funcionamento deve-se aderir a práticas boas. Prevenir doenças ósseas é essencial para uma vida longa e ativa."
    />
  </main>
</template>
