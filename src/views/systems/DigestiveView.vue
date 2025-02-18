<script setup>
import systems from '../../components/desktop/systems/systems.vue'
import systemsMobile from '@/components/mobile/systems/systemsMobile.vue'
</script>

<template>
  <main class="is-desktop">
    <systems
      system="Digestório"
      system-gif="digestivo.gif"
      content1p="O sistema digestivo é composto por: boca, faringe, esôfago, estômago, intestino delgado, intestino grosso e ânus. Fazem parte também as glândulas acessórias, que são glândulas salivares, pâncreas e fígado."
      content1Reference="https://brasilescola.uol.com.br/biologia/sistema-digestivo.htm#:~:text=O%20sistema%20digest%C3%B3rio%20%C3%A9%20formado,gl%C3%A2ndulas%20salivares%2C%20p%C3%A2ncreas%20e%20f%C3%ADgado"
      content2p="<ul>
      <li>Higiene adequada dos alimentos que ingere;</li>
      <li>Não comer e já ir se deitar;</li>
      <li>Tomar cuidados com medicamentos que toma;</li>
      <li>Beba muita água;</li>
      <li>Evite o consumo de álcool e cigarro;</li>
      <li>Realize exames regulares.</li>
    </ul>"
      content2Reference=""
      organImage="digestivo.svg"
      organ-data="digestivo.json"
      illness1h3="Doença do Refluxo Gastroesofágico (DRGE)"
      illness1p="Também conhecida como refluxo, essa condição afeta a saúde digestiva. Ela ocorre quando o ácido do estômago flui de volta para o esôfago, provocando sintomas e possíveis complicações. Um dos principais sinais é a azia, que se manifesta como uma sensação de queimação. Além disso, o conteúdo estomacal pode alcançar a boca, resultando em dor de garganta, tosse, rouquidão e uma sensação de aperto na garganta. A DRGE pode ser controlada e gerenciada, mas não há uma cura definitiva."
      illness1Reference=""
      illness2h3="Gastrite"
      illness2p="É uma doença inflamatória que afeta a mucosa do estômago. Essa inflamação pode ser aguda (de início súbito) ou crônica (de longa duração, que pode persistir por toda a vida). A gastrite aguda pode ser causada pelo consumo excessivo de bebidas alcoólicas, uso de certos medicamentos, estresse, entre outros fatores. Por outro lado, a gastrite crônica é frequentemente causada pela infecção pela bactéria Helicobacter pylori. A gastrite pode ser tratada e, em muitos casos, curada."
      illness2Reference="https://www.leforte.com.br/blog/quais-problemas-podem-afetar-a-saude-digestiva/"
      illness3h3="Câncer gastrointestinal"
      illness3p="O câncer gastrointestinal alto refere-se a tumores que se formam no esôfago, estômago e duodeno, que são partes essenciais do trato digestivo. Esses órgãos desempenham papeis cruciais na digestão, sendo responsáveis por transportar os alimentos e iniciar o processo de digestão antes que os nutrientes sejam absorvidos no intestino delgado. O câncer gastrointestinal pode ser tratado, e em certas situações,  há chance de cura."
      illness3Reference="https://www.hospitaloswaldocruz.org.br/centro-especializado/oncologia/cancer-gastrointertinal-alto/"
      content3p="O sistema digestivo é fundamental para a saúde, pois realiza a digestão e absorção de nutrientes essenciais ao corpo. Composto por órgãos como estômago, intestinos, fígado e pâncreas, ele transforma alimentos em energia e elimina resíduos. Manter a saúde digestiva é essencial, já que doenças como gastrite, refluxo gastroesofágico e câncer gastrointestinal podem afetar a qualidade de vida. Assim, hábitos saudáveis e cuidados regulares são importantes para garantir seu bom funcionamento."
    />
  </main>
  <main class="is-mobile">
    <systemsMobile
      system="Digestório"
      system-gif="digestivo.gif"
      sizeGif="35vw"
      top-gif="2vw"
      rigth-gif="4vw"
      content1p="O sistema digestivo é composto por: boca, faringe, esôfago, estômago, intestino delgado, intestino grosso e ânus. Fazem parte também as glândulas acessórias, que são glândulas salivares, pâncreas e fígado."
      content1Reference="https://brasilescola.uol.com.br/biologia/sistema-digestivo.htm#:~:text=O%20sistema%20digest%C3%B3rio%20%C3%A9%20formado,gl%C3%A2ndulas%20salivares%2C%20p%C3%A2ncreas%20e%20f%C3%ADgado"
      content2p="<ul>
      <li>Higiene adequada dos alimentos que ingere;</li>
      <li>Não comer e já ir se deitar;</li>
      <li>Tomar cuidados com medicamentos que toma;</li>
      <li>Beba muita água;</li>
      <li>Evite o consumo de álcool e cigarro;</li>
      <li>Realize exames regulares.</li>
    </ul>"
      content2Reference=""
      organImage="digestivo.svg"
      organ-data="digestivo.json"
      illness1h3="Doença do Refluxo Gastroesofágico (DRGE)"
      illness1p="Também conhecida como refluxo, essa condição afeta a saúde digestiva. Ela ocorre quando o ácido do estômago flui de volta para o esôfago, provocando sintomas e possíveis complicações. Um dos principais sinais é a azia, que se manifesta como uma sensação de queimação. Além disso, o conteúdo estomacal pode alcançar a boca, resultando em dor de garganta, tosse, rouquidão e uma sensação de aperto na garganta. A DRGE pode ser controlada e gerenciada, mas não há uma cura definitiva."
      illness1Reference=""
      illness2h3="Gastrite"
      illness2p="É uma doença inflamatória que afeta a mucosa do estômago. Essa inflamação pode ser aguda (de início súbito) ou crônica (de longa duração, que pode persistir por toda a vida). A gastrite aguda pode ser causada pelo consumo excessivo de bebidas alcoólicas, uso de certos medicamentos, estresse, entre outros fatores. Por outro lado, a gastrite crônica é frequentemente causada pela infecção pela bactéria Helicobacter pylori. A gastrite pode ser tratada e, em muitos casos, curada."
      illness2Reference="https://www.leforte.com.br/blog/quais-problemas-podem-afetar-a-saude-digestiva/"
      illness3h3="Câncer gastrointestinal"
      illness3p="O câncer gastrointestinal alto refere-se a tumores que se formam no esôfago, estômago e duodeno, que são partes essenciais do trato digestivo. Esses órgãos desempenham papeis cruciais na digestão, sendo responsáveis por transportar os alimentos e iniciar o processo de digestão antes que os nutrientes sejam absorvidos no intestino delgado. O câncer gastrointestinal pode ser tratado, e em certas situações,  há chance de cura."
      illness3Reference="https://www.hospitaloswaldocruz.org.br/centro-especializado/oncologia/cancer-gastrointertinal-alto/"
      content3p="O sistema digestivo é fundamental para a saúde, pois realiza a digestão e absorção de nutrientes essenciais ao corpo. Composto por órgãos como estômago, intestinos, fígado e pâncreas, ele transforma alimentos em energia e elimina resíduos. Manter a saúde digestiva é essencial, já que doenças como gastrite, refluxo gastroesofágico e câncer gastrointestinal podem afetar a qualidade de vida. Assim, hábitos saudáveis e cuidados regulares são importantes para garantir seu bom funcionamento."
    />
  </main>
</template>
