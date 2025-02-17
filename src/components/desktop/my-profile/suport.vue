<script setup>
import { ref } from 'vue'
import FooterView from '../elements/FooterView.vue'

const user = ref({
  name: 'Nicole FeMello',
  picture: '/user.jpeg',
  email: 'nicfmello@gmail.com',
  birthday: '27/01/2009',
  create: '30/01/2025',
  doubts: [
    {
      subject: 'Como faço para acessar o conteúdo?',
      date: '30/01/2025',
    },
    {
      subject: 'Como faço para acessar o conteúdo?',
      date: '30/01/2025',
    },
  ],
})
</script>

<template>
  <section class="is-desktop">
    <h2>Suporte</h2>
    <p>
      Qual sua dúvida? Envie ela aqui e logo a equipe do PORTAL DO CORPO HUMANO entrará em contato.
    </p>

    <div id="info">
      <label
        >Assunto:<input type="text" placeholder="Digite o assunto (foco principal)..."
      /></label>
      <label>Dúvida:<textarea placeholder="Digite sua dúvida (completa)..."></textarea></label>
      <p>
        Certifique-se que sua dúvida esteja bem explicada para que não haja erros de interpretação e
        você possa ter a melhor reposta.
      </p>
      <button>Enviar</button>
    </div>

    <h3>Histórico de dúvidas</h3>
    <table>
      <thead>
        <tr>
          <th>Assunto</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="doubt in user.doubts" :key="doubt.id">
          <td>{{ doubt.subject }}</td>
          <td>
            <p>
              Ver mais <span>{{ doubt.date }}</span>
            </p>
          </td>
        </tr>
      </tbody>
    </table>

    <footer>
      <FooterView />
    </footer>
  </section>
</template>

<style scoped>
section {
  h2 {
    font-family: 'Urbanist';
    font-weight: 600;
    font-size: 2.5vw;
    line-height: 2.24vw;
    text-align: center;
    color: #10293d;
  }

  p {
    font-family: 'Tilt Warp';
    font-weight: 400;
    font-size: 1.5vw;
    line-height: 1.979vw;
    color: #103f65;
    margin: 2vw 0 2.5vw 1vw;
  }

  #info {
    padding: 0 2vw 4vw 2.5vw;

    p {
      font-family: 'Urbanist';
      font-weight: 400;
      font-size: 1.6vw;
      line-height: 1.406vw;
      text-align: center;
      color: #a7a7a7;
      margin: 0.5vw 0 0.5vw 0;
    }

    label {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 1.5vw;
      color: #034f85;
      margin: 1vw 0 2vw 0;
      display: grid;
      position: relative;

      input {
        font-family: 'Urbanist';
        font-weight: 400;
        font-size: 1.563vw;
        color: #034f85;
        width: 90%;
        margin-top: 1vw;
        padding: 1vw 1.875vw 3vw 1.875vw;
        border: none;
        background-color: #a7e6eb;
        border-radius: 24px;
        outline: none;
      }

      textarea {
        font-family: 'Urbanist';
        font-weight: 400;
        font-size: 1.563vw;
        line-height: 1.875vw;
        color: #034f85;
        width: 60vw;
        height: 10vw;
        margin-top: 1vw;
        border-radius: 24px;
        border: 1px solid #103f65;
        padding: 1vw;
        outline: none;
      }
    }

    button {
      width: 70%;
      margin: 2vw 0 0 10vw;
      padding: 1vw;
      border-radius: 100px;
      background: linear-gradient(45deg, #a7e6eb, #007faa);
      color: #ffffff;
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 1.667vw;
      line-height: 2.083vw;
      border: none;
      cursor: pointer;
    }

    button:hover {
      background: linear-gradient(to right, #278ca8, #1f527c);
      transition: font-size 0.3s ease-in-out;
    }
  }

  h3 {
    font-family: 'Tilt Warp';
    font-weight: 400;
    font-size: 1.563vw;
    line-height: 1.979vw;
    color: #034f85;
    margin: 2vw 0 1vw 1vw;
  }

  table {
      color: #034F85;
      align-items: center;
      background-color: #fff;
      font-family: 'Urbanist';

      thead {
        tr {
          th {
            padding: 1vw 10vw;
            font-size: 2.5vw;
            font-weight: 700;
          }

          th:nth-child(even) {
            padding: 1vw;
          }
        }
      }

      tbody {
        tr {
          td {
            padding: 1.6925vw 3vw 1.6925vw 0vw;
            font-size: 1.5vw;
          }

          td:nth-child(1) {
            padding-right: 20vw;
          }

          td:nth-child(even) {
            border-left: 0.15vw solid #103F65;
            padding-left: 3vw;
            text-align: center;
          }
        }
      }
    }
}
</style>
