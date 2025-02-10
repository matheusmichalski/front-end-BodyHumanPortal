<script setup>
import systems from '../../components/desktop/systems/systems.vue'
</script>

<template>
  <main>
    <systems
      system="Reprodutor Masculino"
      content1p="O aparelho genital masculino é composto pelos órgãos genitais internos e externos.
    <ul>
      <li>Internos: Testículos, epidídimo, canal deferente, vesículas seminais, uretra, ducto ejaculatório, próstata e glândulas bulbouretrais.</li>
      <li>Externos: Pênis e saco escrotal.</li>
    </ul>"
      content1Reference="ref"
      content2p=" <ul>
      <li>Higiene adequada;</li>
      <li>Exames de rotina;</li>
      <li>Evitar exposição prolongada ao calor na área genital (como banhos quente);</li>
      <li>Uso de preservativos;</li>
      <li>Realizar autoexame dos testículos;</li>
      <li>Higienize o pênis após a relação sexual.</li>
    </ul>"
      content2Reference="https://medprev.online/blog/saude/dia-internacional-do-homem-cuidados-com-a-higiene-intima-masculina/"
      organImage="/header/sperm.png"
      illness1h3="Câncer de próstata"
      illness1p="O câncer de próstata é o tumor mais frequente entre os homens, especialmente a partir dos 50 anos. Ele afeta a próstata, uma glândula localizada abaixo da bexiga, responsável por parte do fluido seminal. Nos estágios iniciais, o câncer de próstata costuma não apresentar sintomas, mas, em fases mais avançadas, pode provocar dificuldades para urinar, dor durante a ejaculação e desconforto na região lombar ou quadris. O diagnóstico é realizado através do exame de PSA (Antígeno Prostático Específico) e do toque retal. O câncer de próstata pode ser tratado de forma eficaz, especialmente quando detectado precocemente, e em muitos casos, é curável."
      illness1Reference="ref"
      illness2h3="Infecções Sexualmente Transmissíveis (IST)"
      illness2p="São infecções que são transmitidas através de relações sexuais desprotegidas. Elas podem afetar tanto homens quanto mulheres e, se não tratadas, podem causar complicações graves à saúde. Algumas das IST mais comuns em homens são a sífilis, herpes genital, gonorreia. A maioria das ISTs pode ser tratada com medicamentos, e algumas têm cura, enquanto outras podem ser controladas, mas não curadas."
      illness2Reference="ref"
      illness3h3="Disfunção erétil (DE)"
      illness3p="Refere-se à dificuldade contínua de conseguir ou manter uma ereção rígida o bastante para a relação sexual. É uma condição comum que pode afetar homens de qualquer idade, embora seja mais frequente entre aqueles mais velhos. A DE pode indicar a presença de problemas de saúde subjacentes e tem o potencial de afetar de forma significativa a qualidade de vida e a autoconfiança da pessoa. Não tem uma cura geral para a disfunção erétil, mas existem tratamentos."
      illness3Reference="ref"
      content3p="O sistema reprodutor masculino desempenha um papel crucial na reprodução e na saúde sexual. Composto por órgãos internos e externos, ele é responsável pela produção de espermatozoides e hormônios sexuais, além de facilitar a fertilização. A saúde desse sistema é essencial para o bem-estar geral do homem, e problemas como disfunção erétil, infecções e câncer de próstata podem afetar significativamente a qualidade de vida. A conscientização sobre essas doenças e a importância de exames regulares são fundamentais para a detecção precoce de condições negativas."
      content3Reference="ref"
    />

    <RouterLink to="/sistema/reprodutor-feminino" id="button"
      ><button>REPRODUTOR FEMININO</button></RouterLink
    >
  </main>
</template>

<style scoped>
main {
  text-align: center;

  #button {
    padding: 3vw 3vw 2vw 3vw;
    border-radius: 24px;
    background: linear-gradient(45deg, #103f65, #47abc6);

    button {
      font-family: 'Urbanist';
      font-weight: 700;
      font-size: 36px;
      line-height: 40px;
      color: #ffffff;
      text-decoration: none;
      background-color: transparent;
      border: none;
      margin: 3vw 0 7vw 0;
      cursor: pointer;
    }
  }
}
</style>
