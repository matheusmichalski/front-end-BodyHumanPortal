<script setup>
import systems from '@/components/desktop/systems/systems.vue'
import systemsMobile from '@/components/mobile/systems/systemsMobile.vue'
</script>

<template>
  <main class="is-desktop">
    <systems
      system="Reprodutor Masculino"
      content1p="O aparelho genital masculino é composto pelos órgãos genitais internos e externos.
    <ul>
      <li>Internos: Testículos, epidídimo, canal deferente, vesículas seminais, uretra, ducto ejaculatório, próstata e glândulas bulbouretrais.</li>
      <li>Externos: Pênis e saco escrotal.</li>
    </ul>"
      content1Reference=""
      content2p=" <ul>
      <li>Higiene adequada;</li>
      <li>Exames de rotina;</li>
      <li>Evitar exposição prolongada ao calor na área genital (como banhos quente);</li>
      <li>Uso de preservativos;</li>
      <li>Realizar autoexame dos testículos;</li>
      <li>Higienize o pênis após a relação sexual.</li>
    </ul>"
      content2Reference="https://medprev.online/blog/saude/dia-internacional-do-homem-cuidados-com-a-higiene-intima-masculina/"
      organ-image="masculino.svg"
      organ-data="masculino.json"
      illness1h3="Câncer de próstata"
      illness1p="O câncer de próstata é o tumor mais frequente entre os homens, especialmente a partir dos 50 anos. Ele afeta a próstata, uma glândula localizada abaixo da bexiga, responsável por parte do fluido seminal. Nos estágios iniciais, o câncer de próstata costuma não apresentar sintomas, mas, em fases mais avançadas, pode provocar dificuldades para urinar, dor durante a ejaculação e desconforto na região lombar ou quadris. O diagnóstico é realizado através do exame de PSA (Antígeno Prostático Específico) e do toque retal. O câncer de próstata pode ser tratado de forma eficaz, especialmente quando detectado precocemente, e em muitos casos, é curável."
      illness1Reference=""
      illness2h3="Infecções Sexualmente Transmissíveis (IST)"
      illness2p="São infecções que são transmitidas através de relações sexuais desprotegidas. Elas podem afetar tanto homens quanto mulheres e, se não tratadas, podem causar complicações graves à saúde. Algumas das IST mais comuns em homens são a sífilis, herpes genital, gonorreia. A maioria das ISTs pode ser tratada com medicamentos, e algumas têm cura, enquanto outras podem ser controladas, mas não curadas."
      illness2Reference=""
      illness3h3="Disfunção erétil (DE)"
      illness3p="Refere-se à dificuldade contínua de conseguir ou manter uma ereção rígida o bastante para a relação sexual. É uma condição comum que pode afetar homens de qualquer idade, embora seja mais frequente entre aqueles mais velhos. A DE pode indicar a presença de problemas de saúde subjacentes e tem o potencial de afetar de forma significativa a qualidade de vida e a autoconfiança da pessoa. Não tem uma cura geral para a disfunção erétil, mas existem tratamentos."
      illness3Reference=""
      content3p="O sistema reprodutor masculino desempenha um papel crucial na reprodução e na saúde sexual. Composto por órgãos internos e externos, ele é responsável pela produção de espermatozoides e hormônios sexuais, além de facilitar a fertilização. A saúde desse sistema é essencial para o bem-estar geral do homem, e problemas como disfunção erétil, infecções e câncer de próstata podem afetar significativamente a qualidade de vida. A conscientização sobre essas doenças e a importância de exames regulares são fundamentais para a detecção precoce de condições negativas."
      content3Reference=""
    />
    <RouterLink to="/sistema/reprodutor-feminino" class="button"
      ><button id="desktop">REPRODUTOR FEMININO</button>
    </RouterLink>
  </main>
  <main class="is-mobile">
    <systemsMobile
      system="Reprodutor Masculino"
      content1p="O aparelho genital masculino é composto pelos órgãos genitais internos e externos.
    <ul>
      <li>Internos: Testículos, epidídimo, canal deferente, vesículas seminais, uretra, ducto ejaculatório, próstata e glândulas bulbouretrais.</li>
      <li>Externos: Pênis e saco escrotal.</li>
    </ul>"
      content1Reference=""
      content2p=" <ul>
      <li>Higiene adequada;</li>
      <li>Exames de rotina;</li>
      <li>Evitar exposição prolongada ao calor na área genital (como banhos quente);</li>
      <li>Uso de preservativos;</li>
      <li>Realizar autoexame dos testículos;</li>
      <li>Higienize o pênis após a relação sexual.</li>
    </ul>"
      content2Reference="https://medprev.online/blog/saude/dia-internacional-do-homem-cuidados-com-a-higiene-intima-masculina/"
      organ-image="masculino.svg"
      organ-data="masculino.json"
      illness1h3="Câncer de próstata"
      illness1p="O câncer de próstata é o tumor mais frequente entre os homens, especialmente a partir dos 50 anos. Ele afeta a próstata, uma glândula localizada abaixo da bexiga, responsável por parte do fluido seminal. Nos estágios iniciais, o câncer de próstata costuma não apresentar sintomas, mas, em fases mais avançadas, pode provocar dificuldades para urinar, dor durante a ejaculação e desconforto na região lombar ou quadris. O diagnóstico é realizado através do exame de PSA (Antígeno Prostático Específico) e do toque retal. O câncer de próstata pode ser tratado de forma eficaz, especialmente quando detectado precocemente, e em muitos casos, é curável."
      illness1Reference=""
      illness2h3="Infecções Sexualmente Transmissíveis (IST)"
      illness2p="São infecções que são transmitidas através de relações sexuais desprotegidas. Elas podem afetar tanto homens quanto mulheres e, se não tratadas, podem causar complicações graves à saúde. Algumas das IST mais comuns em homens são a sífilis, herpes genital, gonorreia. A maioria das ISTs pode ser tratada com medicamentos, e algumas têm cura, enquanto outras podem ser controladas, mas não curadas."
      illness2Reference=""
      illness3h3="Disfunção erétil (DE)"
      illness3p="Refere-se à dificuldade contínua de conseguir ou manter uma ereção rígida o bastante para a relação sexual. É uma condição comum que pode afetar homens de qualquer classe, embora seja mais frequente entre aqueles mais velhos. A DE pode indicar a presença de problemas de saúde subjacentes e tem o potencial de afetar de forma significativa a qualidade de vida e a autoconfiança da pessoa. Não tem uma cura geral para a disfunção erétil, mas existem tratamentos."
      illness3Reference=""
      content3p="O sistema reprodutor masculino desempenha um papel crucial na reprodução e na saúde sexual. Composto por órgãos internos e externos, ele é responsável pela produção de espermatozoides e hormônios sexuais, além de facilitar a fertilização. A saúde desse sistema é essencial para o bem-estar geral do homem, e problemas como disfunção erétil, infecções e câncer de próstata podem afetar significativamente a qualidade de vida. A conscientização sobre essas doenças e a importância de exames regulares são fundamentais para a detecção precoce de condições negativas."
      content3Reference=""
    />
    <RouterLink to="/sistema/reprodutor-feminino" class="button"
      ><button id="mobile">REPRODUTOR FEMININO</button></RouterLink
    >
  </main>
</template>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  text-decoration: none;

  button {
    width: 50%;
    margin: -2vw 0 5vw 0;
    padding: 2vw;
    border-radius: 100px;
    background: linear-gradient(45deg, #a7e6eb, #007faa);
    font-family: 'Urbanist';
    font-weight: 700;
    font-size: 1.875vw;
    line-height: 2.083vw;
    color: #ffffff;
    text-decoration: none;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background: linear-gradient(to right, #278ca8, #1f527c);
  }
}

#mobile {
  font-size: 4vw;
  line-height: 4.5vw;
}
</style>
