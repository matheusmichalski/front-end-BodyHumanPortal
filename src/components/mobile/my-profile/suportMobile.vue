<script setup>
import { ref } from 'vue'

const user = ref({
  name: 'Nicole FeMello',
  picture: '/user.jpeg',
  email: 'nicfmello@gmail.com',
  birthday: '27/01/2009',
  create: '30/01/2025',
  doubts: [
    {
      id: 0,
      subject: 'Como faço para acessar o conteúdo?',
      date: '30/01/2025',
    },
    {
      id: 1,
      subject: 'Como faço para acessar o conteúdo?',
      date: '30/01/2025',
    },
  ],
})
</script>

<template>
  <section class="is-mobile">
    <h1>Suporte</h1>
    <p>Qual sua dúvida? Envie ela aqui e logo a equipe do PORTAL DO CORPO HUMANO entrará em contato.</p>

    <form action="#">
      <div>
        <p>
          <label for="assunto">Assunto:</label>
          <textarea name="assunto" id="assunto" placeholder="Digite o assunto (foco principal)..."></textarea>
        </p>
        <p>
          <label for="duvida">Dúvida:</label>
          <textarea name="duvida" id="duvida" placeholder="Digite sua dúvida (completa)..." class="contour"></textarea>
        </p>
      </div>
      <p class="notice">Certifique-se que sua dúvida esteja bem explicada para que não haja erros de
        interpretação e você
        possa ter a melhor reposta.</p>
      <input type="submit" value="Enviar">
    </form>

    <h2>Histórico de Dúvidas</h2>

    <table>
      <thead>
        <tr>
          <th>Assunto</th>

          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="doubt in user.doubts" :key="doubt.id">
          <td>{{ doubt.subject }} <p>Ver mais</p>
          </td>
          <td>
            {{ doubt.date }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>


<style scoped>
section {
  h1 {
    font-family: 'Urbanist';
    text-align: center;
    color: #10293D;
    font-size: clamp(1.5rem, 9vw, 2.5rem);
    font-weight: 600;
    padding: 5vw 0 10vw 0;
    width: 100%;
    min-width: 250px;
    max-width: 100vw;
  }

  p {
    color: #103F65;
    font-family: "Tilt Warp", serif;
    font-weight: 400;
    font-size: clamp(0.8rem, 5.5vw, 2rem);
    width: 100%;
    min-width: 245px;
    max-width: 100vw;
  }

  form {
    div {
      p {
        label {
          font-family: "Tilt Warp", serif;
          font-size: clamp(0.8rem, 4.5vw, 1.3rem);
          font-weight: 400;
          color: #034F85;
          display: block;
          padding: 8vw 0 0 0;
        }

        textarea {
          border: none;
          display: block;
          background-color: #A7E6EB;
          height: 25vw;
          padding: 3vw;
          margin: 5vw 0 0 0;
          border-radius: 8px;
          color: #034F85;
          font-size: clamp(0.6rem, 3.3vw, 1rem);
          width: 100%;
          min-width: 228px;
          max-width: 100vw;
          box-sizing: border-box;
          font-family: 'Urbanist';
        }

        .contour {
          background-color: transparent;
          border: 1px solid #103F65;
        }

        ::placeholder {
          color: #034F85;
        }
      }

    }

    p.notice {
      color: #A7A7A7;
      text-align: center;
      font-size: clamp(0.5rem, 3.3vw, 1rem);
      margin: 10vw auto;
      min-width: 238px;
      max-width: 78vw;
    }

    input {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: clamp(2vw, 2.5vw, 6vw);
      border: none;
      background: linear-gradient(to right, #47ABC6, #1F527C);
      color: white;
      text-align: center;
      border-radius: 10vw;
      min-width: 200px;
      max-width: 85vw;
      margin: auto 10vw;
      font-size: clamp(0.5rem, 5.5vw, 1.2rem);
      font-weight: bold;
      width: 85%;
      cursor: pointer;
    }
  }

  h2 {
    color: #034F85;
    font-size: clamp(1.2rem, 6vw, 1.5rem);
    font-family: "Tilt Warp", serif;
    padding: 12vw 0 0 0;
  }

  table {
    color: #034F85;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    background-color: #fff;
    font-family: 'Urbanist';
    font-size: 4vw;

    thead {
      tr {
        th {
          padding: 5vw 15vw;
          font-size: clamp(1.2rem, 4vw, 2rem);
          font-weight: 600;
        }
      }
    }

    tbody {
      tr {
        td {
          padding: 5vw 3vw 2vw 0vw;
          font-size: clamp(1rem, 5vw, 2rem);

          p {
            font-family: 'Urbanist';
            font-size: 4vw;
            color: #A7A7A7;
            margin-top: 1vw;
          }
        }

        td:nth-child(even) {
          border-left: 1vw solid #103F65;
          padding: 0 5vw;
        }
      }
    }
  }
}
</style>
