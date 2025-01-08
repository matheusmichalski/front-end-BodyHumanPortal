<template>
  <section id="about-team">
    <details>
      <summary>NOSSO TIME <i class="fa-solid fa-chevron-down"></i></summary>
      <p>Em setembro de 2024, um grupo de alunos do curso técnico em Informática do Instituto Federal Catarinense - IFC
        recebeu a missão de criar um site voltado para a saúde. Em meio a tantas ideias, surgiu um conceito inovador:
        não apenas focar em saúde, mas explorar de forma completa o <strong>Corpo Humano</strong>.
      </p>
      <p>Observando que muitos sites sobre o tema eram confusos e apresentavam uma linguagem técnica difícil de
        entender, os alunos pensaram: <strong>e se existisse um portal que fosse completo, intuitivo e acessível a
          todos</strong>?
      </p>
      <p>Depois de um período pensando em cada detalhe, criando estratégias para fazer o melhor, o grupo finalmente
        tinha um nome para esse projeto desafiador, o <strong>PORTAL DO CORPO HUMANO</strong>.</p>
      <p>Mas um nome não faz um site. Trabalhando duro em conjunto, integrando tecnologias, buscando ajuda de pessoas
        experientes e combinando conhecimentos, o projeto saiu do papel e se transformou em uma plataforma inovadora e
        eficiente.
      </p>
    </details>

    <details>
      <summary>OBJETIVOS <i class="fa-solid fa-chevron-down"></i></summary>
      <p>O <strong>PORTAL DO CORPO HUMANO</strong> foi criado com o objetivo de ajudar seus usuários a compreender o corpo humano de
        maneira lúdica e acessível, oferecendo informações claras e fáceis de entender. Nosso foco é ser inovador, com
        uma interface envolvente que capte o interesse do usuário em um tema tão vasto e fascinante quanto o corpo
        humano.</p>
      <p>Mais do que isso, valorizamos a confiança. Nosso portal oferece informações precisas e completas, garantindo
        que todos — independentemente da idade ou nível de conhecimento — possam aprender de forma acessível e
        confiável.
        Estamos sempre à disposição para tirar dúvidas e buscamos manter uma conexão constante com nossos usuários.
        Nosso compromisso é proporcionar a melhor experiência possível, tornando a descoberta sobre o corpo humano
        interessante e informativa para todos.</p>
    </details>
  </section>
</template>

<style scoped>
#about-team {
  padding: 4vw;

  details {
    margin: 2vw 0 2vw 2vw;

    summary {
      font-family: "Climate Crisis", sans-serif;
      font-weight: 400;
      font-size: 40px;
      color: #033B85;
      line-height: 85px;
      list-style: none;

      i {
        transition: transform 0.5s ease;
        margin-left: 0.5vw;
      }
    }

    p {
      font-size: 24px;
      font-weight: 600;
      line-height: 33px;
      margin-bottom: 0.5vw;

      strong {
        color: #6d6d6d;
      }
    }
  }

  details[open] {
    i {
      transform: rotate(180deg);
    }
  }
}
</style>
