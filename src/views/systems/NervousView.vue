<script setup>
import systems from '../../components/desktop/systems/systems.vue'
import systemsMobile from '@/components/mobile/systems/systemsMobile.vue'
</script>

<template>
  <main>
    <systems
      system="Nervoso"
      content1p="Esse sistema é dividido em duas partes:
    <ul>
      <li>Sistema Nervoso Central (SNC):
        <ul>
          <li>Composto pelo encéfalo (cérebro, tronco encefálico, cerebelo) e pela medula espinhal.</li>
          <li>Parte que recebe e interpreta os estímulos.</li>
        </ul>
      </li>
      <li>Sistema Nervoso Periférico (SNP):
        <ul>
          <li>Composto por terminações nervosas, nervos e gânglios.</li>
          <li>Parte que transmite as informações entre o SNC e o restante do corpo.</li>
        </ul>
      </li>
    </ul>"
      content1Reference="ref"
      content2p="<ul>
      <li>Alimentação adequada;</li>
      <li>Prática regular de exercícios físicos;</li>
      <li>Ter uma rotina de sono de qualidade;</li>
      <li>Interações sociais;</li>
      <li>Evitar o tabagismo e o alcoolismo;</li>
      <li>Administrar o estresse do cotidiano.</li>
    </ul>"
      content2Reference="ref"
      organImage="/header/nervous.png"
      illness1h3="Mal de Alzheimer"
      illness1p="Doença neurodegenerativa. Esse transtorno causa principalmente a perda de memória ( sobretudo a curto prazo), perda de capacidade cognitiva, perda de habilidades motoras, pode causar também depressão, ansiedade, entre outros aspectos. A causa ainda não se sabe, porém, considera-se que seja algo relacionado a genética (predisposição). Essa doença não tem cura, mas já existe tratamento que pode diminuir os sintomas ou desacelerar o seu avanço."
      illness1Reference="ref"
      illness2h3="Esclerose múltipla"
      illness2p="Doença autoimune crônica que prejudica o sistema imunológico. Distúrbio que pode causar exaustão, tremores, espasmos musculares, dificuldade de concentração, problemas para caminhar, perda de visão (pode ser em um ou nos dois olhos), entre outros. Supõe que seja causada por fatores ambientais e genéticos. Não tem cura, mas já se encontra tratamentos para amenizar os sintomas dessa doença."
      illness2Reference="ref"
      illness3h3="Mal de Parkinson"
      illness3p="É uma doença neurodegenerativa. Condição qualificada pela diminuição criação de neurotransmissores (dopamina). Essa enfermidade pode causar tremedeiras, lentidão de reflexos musculares, redução de movimentos corporais, confusão mental, dificuldade na fala, rigidez muscular, entre outros. Causada por fatores genéticos, ambientais e etários ( geralmente a doença surge após idades mais avançadas). Não tem cura, mas existem diversos tipos de tratamentos para retardar e diminuir os efeitos."
      illness3Reference="ref"
      content3p="Esse sistema é essencial para o funcionamento do corpo humano. Cuidar dele de forma adequada garante tanto o bem-estar físico como o bem-estar mental. Ter uma vida saudável é assegurar que o corpo funcione em harmonia."
      content3Reference="ref"
    />
    <systemsMobile />
  </main>
</template>
