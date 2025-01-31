<script setup>
import { ref } from 'vue'
import FooterView from '../elements/FooterView.vue';

const user = ref({
  name: 'Nicole FeMello',
  picture: '/user.jpeg',
  email: 'nicfmello@gmail.com',
  birthday: '27/01/2009',
  create: '30/01/2025',
  doubts: [
    {
      subject: 'Como faço para acessar o conteúdo?',
      date: '30/01/2025'
    },
    {
      subject: 'Como faço para acessar o conteúdo?',
      date: '30/01/2025'
    }
  ]
});
</script>

<template>
  <section class="is-desktop">
    <nav id="sidebar">
      <h1>Minha conta</h1>

      <ul>
        <li>
          <RouterLink to="/minha-conta"><i class="fa-solid fa-table"></i> Dashboard</RouterLink>
        </li>
        <li>
          <RouterLink to="/suporte"><i class="fa-regular fa-circle-question"></i> Suporte</RouterLink>
        </li>
        <li>
          <RouterLink to="/seguranca"><i class="fa-solid fa-shield-halved"></i> Segurança</RouterLink>
        </li>
      </ul>
    </nav>

    <div id="content">
      <h2>Suporte</h2>
      <p>Qual sua dúvida? Envie ela aqui e logo a equipe do PORTAL DO CORPO HUMANO entrará em contato.</p>

      <div id="info">
        <label>Assunto:<input type="text" placeholder="Digite o assunto (foco principal)..."></label>
        <label>Dúvida:<textarea placeholder="Digite sua dúvida (completa)..."></textarea></label>
        <p>Certifique-se que sua dúvida esteja bem explicada para que não haja erros de interpretação e você possa ter a
          melhor reposta.</p>
        <button>Enviar</button>
      </div>

      <h3>Histórico de dúvidas</h3>
      <table>
        <tr>
          <td><span>Assunto</span></td>
          <td><span>Data</span></td>
        </tr>
        <tr v-for="doubt of user.doubts">
          <td>{{ doubt.subject }}</td>
          <td>
            <p>Ver mais <span>{{ doubt.date }}</span></p> 
          </td>
        </tr>
      </table>

      <FooterView />
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: -3vw;
  display: flex;
  background-color: #A7E6EB;

  #sidebar {
    width: 20.938vw;
    text-align: center;
    padding: 2vw;
    margin: -2vw 0 0 -5vw;

    h1 {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 1.823vw;
      line-height: 2.292vw;
      color: #10293D;
      margin: 1vw 0 1vw 0;
    }

    ul {
      li {
        width: 12.812vw;
        margin: 0.5vw 4vw 0.5vw 4vw;
        text-align: left;
        padding: 1vw 0 1vw 0;

        a {
          font-family: 'Urbanist';
          font-weight: 400;
          font-size: 1.563vw;
          line-height: 1.875vw;
          color: #10293D;
          padding: 0.5vw 0 0.5vw 0;
          text-decoration: none;
          border-bottom: 1px solid #10293D;
        }
      }
    }
  }

  #content {
    width: 100%;
    border-radius: 24px;
    padding: 2vw;
    background-color: #FFFFFF;
    margin-top: -2vw;

    h2 {
      font-family: 'Urbanist';
      font-weight: 600;
      font-size: 2.5vw;
      line-height: 2.24vw;
      text-align: center;
      color: #10293D;
    }

    p {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 1.563vw;
      line-height: 1.979vw;
      color: #103F65;
      margin: 2vw 0 2vw 0;
    }

    #info {
      padding: 0 2vw 2vw 2vw;

      p {
        font-family: 'Urbanist';
        font-weight: 400;
        font-size: 1.198vw;
        line-height: 1.406vw;
        text-align: center;
        color: #A7A7A7;
        margin: 0.5vw 0 0.5vw 0;
      }

      label {
        font-family: 'Tilt Warp';
        font-weight: 400;
        font-size: 1.563vw;
        color: #034F85;
        margin: 1vw 0 2vw 0;
        display: grid;
        position: relative;

        input {
          font-family: 'Urbanist';
          font-weight: 400;
          font-size: 1.563vw;
          color: #034F85;
          width: 90%;
          margin-top: 1vw;
          padding: 1vw 1.875vw 3vw 1.875vw;
          border: none;
          background-color: #A7E6EB;
          border-radius: 24px;
          outline: none;
        }

        textarea {
          font-family: 'Urbanist';
          font-weight: 400;
          font-size: 1.563vw;
          line-height: 1.875vw;
          color: #034F85;
          width: 60vw;
          height: 10vw;
          margin-top: 1vw;
          border-radius: 24px;
          border: 1px solid #103F65;
          padding: 1vw;
          outline: none;
        }
      }

      button {
        width: 70%;
        margin: 2vw 0 0 10vw;
        padding: 1vw;
        border-radius: 100px;
        background: linear-gradient(45deg, #A7E6EB, #007FAA);
        color: #FFFFFF;
        font-family: 'Tilt Warp';
        font-weight: 400;
        font-size: 1.667vw;
        line-height: 2.083vw;
        border: none;
        cursor: pointer;
        transition: font-size 0.3s ease-in-out;
      }

      button:hover {
        font-size: 1.867vw;
      }
    }

    h3 {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 1.563vw;
      line-height: 1.979vw;
      color: #034F85;
      margin: 2vw 0 1vw 0;
    }

    table {
      margin: 0 0 5vw 2vw;
      width: 60.958vw;

      tr {
        td {
          font-family: 'Urbanist';
          font-weight: 400;
          font-size: 1.563vw;
          color: #034F85;
          padding: 0 1vw 0 1vw;

          span {
            font-family: 'Urbanist';
            font-weight: 700;
            font-size: 1.563vw;
            color: #034F85;
          }

          p {
            font-family: 'Urbanist';
            font-weight: 400;
            font-size: 1.563vw;
            color: #A7A7A7;
            cursor: pointer;
          }
        }

        td:first-of-type {
          border-right: 0.5px solid #103F65;
          width: 40vw;
        }

        td:last-of-type {
          text-align: right;
          width: 20.958vw;

          p {
            display: flex;
            justify-content: space-between;
          }
        }

      }
    }
  }
}
</style>