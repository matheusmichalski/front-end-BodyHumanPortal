<script setup>
import systems from '../../components/desktop/systems/systems.vue'
import systemsMobile from '@/components/mobile/systems/systemsMobile.vue'
</script>

<template>
  <main class="is-desktop">
    <systems
      system="Urinário"
      system-gif="urinario.gif"
      content1p="Os componentes do sistema urinário incluem: dois rins, dois ureteres, a bexiga urinária e a uretra."
      content1Reference=""
      content2p="<ul>
      <li>Beba bastante água;</li>
      <li>Evite prender a urina;</li>
      <li>Reduza o consumo de sal e cafeína;</li>
      <li>Cuide da higiene na área genital para prevenir infecções;</li>
      <li>Pratique exercícios regularmente;</li>
      <li>Consulte seu médico regularmente.</li>
    </ul>"
      content2Reference="https://clinicacub.com.br/10-habitos-saudaveis-para-um-sistema-urinario-saudavel/"
      organImage="urinario.svg"
      organ-data="urinario.json"
      illness1h3="Infecção urinária"
      illness1p="A infecção urinária é uma condição comum que ocorre devido à proliferação de microrganismos, como bactérias ou fungos, em qualquer parte do sistema urinário, que inclui os rins, ureteres, bexiga e uretra. Essa infecção pode afetar diversas áreas, mas é mais frequente na bexiga (cistite) e na uretra (uretrite). Os sintomas típicos incluem dor, desconforto e sensação de queimação ao urinar. Na maioria das vezes, esses sintomas surgem devido ao desbalanço da microbiota da região genital, que pode ser causado por fatores como estresse ou falta de higiene. A infecção urinária geralmente tem cura. O tratamento mais comum envolve o uso de antibióticos, que eliminam as bactérias responsáveis pela infecção."
      illness1Reference=""
      illness2h3="Uretrite"
      illness2p="A uretrite é um tipo de infecção urinária que afeta a uretra, o canal responsável pela eliminação da urina. Essa condição provoca sintomas como vontade frequente de urinar, dor ou ardor ao urinar e corrimento amarelo. Normalmente, a uretrite é causada por infecções sexualmente transmissíveis, como clamídia, gonorreia, tricomoníase e herpes, mas também pode ocorrer devido a traumas ou irritações na uretra, que podem ser provocadas por produtos químicos. Além disso, infecções bacterianas e virais também podem levar à inflamação da uretra. A uretrite costuma ser curada."
      illness2Reference=""
      illness3h3="Insuficiência renal"
      illness3p="Também conhecida como falência renal, é a perda da capacidade dos rins de filtrar o sangue e eliminar toxinas do corpo, resultando em seu acúmulo no organismo. Essa condição pode ser aguda, surgindo rapidamente devido a fatores como desidratação, infecções, obstruções ou uso de medicamentos que afetam a função renal, ou crônica, desenvolvendo-se ao longo do tempo devido a doenças como diabetes, hipertensão e glomerulonefrite. A insuficiência renal pode levar a complicações, como aumento da pressão arterial e acidose sanguínea, manifestando sintomas característicos como falta de ar, palpitações e desorientação. A insuficiência renal não pode ser curada de forma a restaurar completamente a função dos rins, especialmente em casos crônicos. Entretanto, é possível tratá-la e administrá-la de modo a melhorar a qualidade de vida e atrasar a evolução da doença. O tratamento varia conforme o tipo de insuficiência, seja aguda ou crônica."
      illness3Reference="https://www.tuasaude.com/doencas-do-sistema-urinario/"
      content3p="O sistema urinário desempenha um papel fundamental na manutenção da homeostase do organismo, sendo responsável pela filtração de resíduos, regulação do equilíbrio hídrico e eletrolítico, além da eliminação de substâncias tóxicas. A prevenção de doenças, como infecções urinárias e insuficiência renal, pode ser alcançada por meio de hábitos saudáveis, como a hidratação adequada, higiene pessoal e consultas médicas regulares. É crucial cuidar da saúde do sistema urinário, pois seu funcionamento eficiente impacta diretamente na qualidade de vida e na prevenção de complicações graves."
      content3Reference=""
    />
  </main>
  <main class="is-mobile">
    <systemsMobile
      system="Urinário"
      content1p="Os componentes do sistema urinário incluem: dois rins, dois ureteres, a bexiga urinária e a uretra."
      content1Reference=""
      content2p="<ul>
      <li>Beba bastante água;</li>
      <li>Evite prender a urina;</li>
      <li>Reduza o consumo de sal e cafeína;</li>
      <li>Cuide da higiene na área genital para prevenir infecções;</li>
      <li>Pratique exercícios regularmente;</li>
      <li>Consulte seu médico regularmente.</li>
    </ul>"
      content2Reference="https://clinicacub.com.br/10-habitos-saudaveis-para-um-sistema-urinario-saudavel/"
      organImage="urinario.svg"
      organ-data="urinario.json"
      illness1h3="Infecção urinária"
      illness1p="A infecção urinária é uma condição comum que ocorre devido à proliferação de microrganismos, como bactérias ou fungos, em qualquer parte do sistema urinário, que inclui os rins, ureteres, bexiga e uretra. Essa infecção pode afetar diversas áreas, mas é mais frequente na bexiga (cistite) e na uretra (uretrite). Os sintomas típicos incluem dor, desconforto e sensação de queimação ao urinar. Na maioria das vezes, esses sintomas surgem devido ao desbalanço da microbiota da região genital, que pode ser causado por fatores como estresse ou falta de higiene. A infecção urinária geralmente tem cura. O tratamento mais comum envolve o uso de antibióticos, que eliminam as bactérias responsáveis pela infecção."
      illness1Reference=""
      illness2h3="Uretrite"
      illness2p="A uretrite é um tipo de infecção urinária que afeta a uretra, o canal responsável pela eliminação da urina. Essa condição provoca sintomas como vontade frequente de urinar, dor ou ardor ao urinar e corrimento amarelo. Normalmente, a uretrite é causada por infecções sexualmente transmissíveis, como clamídia, gonorreia, tricomoníase e herpes, mas também pode ocorrer devido a traumas ou irritações na uretra, que podem ser provocadas por produtos químicos. Além disso, infecções bacterianas e virais também podem levar à inflamação da uretra. A uretrite costuma ser curada."
      illness2Reference=""
      illness3h3="Insuficiência renal"
      illness3p="A insuficiência renal, ou falência renal, é a perda da capacidade dos rins de filtrar o sangue, causando o acúmulo de toxinas no organismo. Pode ser aguda, surgindo rapidamente por infecções, desidratação ou medicamentos, ou crônica, desenvolvendo-se ao longo do tempo por doenças como diabetes e hipertensão.
Os sintomas incluem falta de ar, palpitações e desorientação. Embora não tenha cura completa, o tratamento pode melhorar a qualidade de vida e retardar a progressão da doença, variando entre controle medicamentoso, dieta, hemodiálise ou transplante renal."
      illness3Reference="https://www.tuasaude.com/doencas-do-sistema-urinario/"
      content3p="O sistema urinário desempenha um papel fundamental na manutenção da homeostase do organismo, sendo responsável pela filtração de resíduos, regulação do equilíbrio hídrico e eletrolítico, além da eliminação de substâncias tóxicas. A prevenção de doenças, como infecções urinárias e insuficiência renal, pode ser alcançada por meio de hábitos saudáveis, como a hidratação adequada, higiene pessoal e consultas médicas regulares. É crucial cuidar da saúde do sistema urinário, pois seu funcionamento eficiente impacta diretamente na qualidade de vida e na prevenção de complicações graves."
      content3Reference=""
    />
  </main>
</template>
