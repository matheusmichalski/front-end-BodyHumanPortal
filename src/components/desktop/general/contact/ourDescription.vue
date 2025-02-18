<script setup>
import { ref } from 'vue'

const technologies = [
  {
    id: 0,
    tecnologie: 'Figma',
    icon: '/contact/tecnologies/figma.png',
    description:
      'O Figma é uma ferramenta de design colaborativa baseada na nuvem, amplamente utilizada para criar interfaces de usuário (UI), protótipos interativos, design gráfico, wireframes e fluxos de trabalho. Sua principal vantagem é permitir que equipes trabalhem simultaneamente em tempo real, promovendo colaboração eficiente e integração em projetos de design. Por ser acessível e fácil de usar, o Figma é amplamente adotado por freelancers, pequenas startups e grandes empresas.',
  },
  {
    id: 1,
    tecnologie: 'Vue.js',
    icon: '/contact/tecnologies/vue.png',
    description: 'O Vue.js foi utilizado no frontend para criar uma interface dinâmica e interativa. Com ele, foi possível construir componentes reutilizáveis que facilitam a manutenção e a escalabilidade do site. A reatividade do Vue permite que os dados sejam atualizados automaticamente na interface, proporcionando uma experiência de usuário mais fluida e sem a necessidade de recarregar a página. O Vue também foi integrado de forma simples ao projeto, permitindo o desenvolvimento de funcionalidades de forma rápida e eficiente, tornando o site mais leve e responsivo.',
  },
  {
    id: 2,
    tecnologie: 'Node.js',
    icon: '/contact/tecnologies/node.png',
    description: 'Um ambiente de execução que permite rodar JavaScript no servidor, tornando possível o desenvolvimento Full Stack utilizando a mesma linguagem no frontend e backend. Ele permite criar servidores e APIs independentes, como servidores HTTP, sem depender do navegador. Além disso, o Node.js é altamente performático e escalável, sendo ideal para lidar com múltiplas requisições simultâneas, como chats em tempo real, streaming de mídia e serviços que exigem alta disponibilidade.',
  },
  {
    id: 3,
    tecnologie: 'TypeScript',
    icon: '/contact/tecnologies/typescript.png',
    description: 'Linguagem que expande o JavaScript, adicionando tipagem estática e recursos como interfaces e classes, melhorando a organização e legibilidade do código. Com TypeScript, é possível detectar erros mais cedo, antes mesmo da execução, tornando o desenvolvimento mais seguro e confiável. Além disso, ele facilita o trabalho em equipe, pois a tipagem permite uma melhor compreensão da estrutura e dos dados utilizados no projeto. Com isso, o código se torna mais robusto e escalável, reduzindo erros em produção.',
  },

  {
    id: 4,
    tecnologie: 'Prisma',
    icon: '/contact/tecnologies/prisma.png',
    description: 'ORM (Object-Relational Mapping) que simplifica a interação entre o código e o banco de dados. Ele permite realizar consultas de forma mais intuitiva e segura, sem a necessidade de escrever SQL manualmente. Com o Prisma, é possível mapear tabelas do banco de dados para objetos no código, facilitando o gerenciamento e evitando erros comuns. Além disso, ele oferece recursos como migrações automatizadas e validação de dados, garantindo uma estrutura mais organizada e de fácil manutenção.',
  },
  {
    id: 5,
    tecnologie: 'MongoDB',
    icon: '/contact/tecnologies/mongodb.png',
    description: 'Banco de dados NoSQL que armazena informações em documentos JSON, oferecendo flexibilidade e escalabilidade. Ideal para aplicações que lidam com grandes volumes de dados ou estruturas não rígidas, garantindo consultas rápidas e eficientes.',
  },
  {
    id: 6,
    tecnologie: 'Redis',
    icon: '/contact/tecnologies/redis.png',
    description: 'Sistema de cache que armazena dados temporários na memória, acelerando respostas do servidor e reduzindo a carga no banco de dados. Ele melhora a performance do site, sendo útil para armazenar sessões de usuários e consultas frequentes.',
  },
]

const index = ref(0)

function prev() {
  index.value = index.value === 0 ? technologies.length - 1 : index.value - 1
}

function next() {
  index.value = index.value === technologies.length - 1 ? 0 : index.value + 1
}
</script>

<template>
  <section class="is-desktop">
    <h2>OBJETIVOS</h2>
    <div id="objectives">
      <h3>O PORTAL DO CORPO HUMANO foi criado com o objetivo de:</h3>
      <ul>
        <li>
          <p>Ajudar seus usuários a compreender o corpo humano de maneira lúdica e acessível;</p>
        </li>
        <li>
          <p>
            Nosso foco é ser inovador, com uma interface envolvente que capte o interesse do usuário
            em um tema tão vasto e fascinante quanto o corpo humano;
          </p>
        </li>
        <li>
          <p>
            Transmitir informações precisas e completas, garantindo que todos — independentemente da
            idade ou nível de conhecimento — possam aprender de forma acessível e confiável;
          </p>
        </li>
        <li>
          <p>Tornando a descoberta sobre o corpo humano interessante e informativa para todos.</p>
        </li>
      </ul>
    </div>

    <h2>NOSSA HISTÓRIA</h2>
    <p id="history">
      O PORTAL DO CORPO HUMANO foi criado com o objetivo de ajudar seus usuários a compreender o
      corpo humano de maneira lúdica e acessível, oferecendo informações claras e fáceis de
      entender. Nosso foco é ser inovador, com uma interface envolvente que capte o interesse do
      usuário em um tema tão vasto e fascinante quanto o corpo humano. Mais do que isso, valorizamos
      a confiança. Nosso portal oferece informações precisas e completas, garantindo que todos —
      independentemente da idade ou nível de conhecimento — possam aprender de forma acessível e
      confiável. Estamos sempre à disposição para tirar dúvidas e buscamos manter uma conexão
      constante com nossos usuários. Nosso compromisso é proporcionar a melhor experiência possível,
      tornando a descoberta sobre o corpo humano interessante e informativa para todos.
    </p>

    <img src="/contact/detailSquare-light.png" alt="Detalhe" id="detail" />

    <h2>Tecnologias</h2>

    <div id="slider">
      <div v-for="tec of technologies" :key="tec.id" class="slide">
        <div class="card" v-if="index == tec.id">
          <img :src="tec.icon" :alt="tec.tecnologie" />

          <div id="info">
            <h3>{{ tec.tecnologie }}</h3>
            <p>{{ tec.description }}</p>
          </div>
        </div>
      </div>
      <div class="buttons">
        <span class="fa-solid fa-chevron-left" @click="prev" id="prev"></span>
        <span class="fa-solid fa-chevron-right" @click="next" id="next"></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 7vw 12vw 5vw 12vw;

  h2 {
    font-family: 'Climate Crisis';
    font-weight: 400;
    font-size: 3.497vw;
    line-height: 0.392vw;
    color: #034f85;
  }

  #objectives {
    width: 77.113vw;
    background-color: #a7e6eb;
    border-radius: 24px;
    padding: 2vw 0 2vw 5vw;
    margin: 3vw 0 5vw -2.5vw;

    h3 {
      font-family: 'Urbanist';
      font-weight: 800;
      font-size: 1.5vw;
      line-height: 2vw;
      color: #474747;
      margin-bottom: 1vw;
    }

    ul {
      list-style-image: url(/contact/list-decoration.png);

      li {
        margin: -3vw 0 -3vw 1vw;

        p {
          font-family: 'Urbanist';
          font-weight: 500;
          font-size: 1.25vw;
          line-height: 2vw;
          color: #474747;
          margin: 2vw 0 5vw 0.6vw;
        }
      }

      li:first-of-type {
        margin-top: 0;
      }
    }
  }

  p {
    font-family: 'Urbanist';
    font-weight: 500;
    font-size: 1.25vw;
    line-height: 2vw;
    color: #474747;
    margin: 2vw 0 8vw -2vw;
  }

  #detail {
    position: absolute;
    left: -2.5vw;
    top: 190vw;
    width: 10vw;
  }

  #slider {
    width: 82vw;
    height: 24.349999999999998vw;
    border: 1px solid #034f85;
    border-radius: 24px;
    margin: 2vw 0 0 -2vw;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;

    .card {
      width: 61.1vw;
      position: relative;
      display: flex;
      justify-content: center;
      padding: 2vw;

      img {
        width: 13.75vw;
        height: 14.49vw;
        margin: 3vw 3vw 3vw -1vw;
      }

      #info {
        width: 35vw;
        margin-left: 3vw;

        h3 {
          font-family: 'Tilt Warp';
          font-weight: 400;
          font-size: 2vw;
          line-height: 3.5vw;
          color: #103f65;
          margin: 0 0 1vw -2vw;
        }

        p {
          font-family: 'Urbanist';
          font-weight: 500;
          font-size: 1.25vw;
          line-height: 2vw;
          color: #474747;
          margin-top: -1vw;
        }
      }
    }

    .buttons {
      #prev {
        position: absolute;
        transform: translateY(10vw) translateX(-70vw);
        font-size: 2.56vw;
        cursor: pointer;
        color: #033b85;
      }

      #next {
        position: absolute;
        transform: translateY(10vw) translateX(3vw);
        font-size: 2.5vw;
        cursor: pointer;
        color: #033b85;
      }
    }
  }
}
</style>
