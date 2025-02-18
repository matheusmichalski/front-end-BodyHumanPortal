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
    {
      id: 2,
      subject: 'Como faço para acessar o conteúdo?',
      date: '30/01/2025',
    },
    {
      id: 3,
      subject: 'Como faço para acessar o conteúdo?',
      date: '30/01/2025',
    },
    {
      id: 4,
      subject: 'Como faço para acessar o conteúdo?',
      date: '30/01/2025',
    },
    {
      id: 5,
      subject: 'Como faço para acessar o conteúdo?',
      date: '30/01/2025',
    },
    {
      id: 6,
      subject: 'Como faço para acessar o conteúdo?',
      date: '30/01/2025',
    },
    {
      id: 7,
      subject: 'Como faço para acessar o conteúdo?',
      date: '30/01/2025',
    },
    {
      id: 8,
      subject: 'Como faço para acessar o conteúdo?',
      date: '30/01/2025',
    },
    {
      id: 9,
      subject: 'Como faço para acessar o conteúdo?',
      date: '30/01/2025',
    },
  ],
})
</script>

<template>
  <section>
    <div>
      <RouterLink to="/minha-conta/suporte"><span class="fa-solid fa-arrow-left"></span></RouterLink>
      <img src="/logo.png" alt="Logo">
    </div>
    <h1>Histórico de Dúvidas</h1>
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
            {{ doubt.date }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
@media (max-width: 767px) {
  section {
    padding-bottom: 15vw;

    div {
      display: flex;
      justify-content: center;
      margin-bottom: 10vw;

      a {
        cursor: pointer;
        position: absolute;
        left: 5vw;
        margin-top: 5vw;

       span {
          color: #010A5C;
          font-size: 5vw;
        }
      }

      img {
        width: 30vw;
      }
    }

    h1 {
      font-family: 'Urbanist';
      font-weight: 600;
      font-size: 10vw;
      text-align: center;
      color: #10293D;
      margin-bottom: 5vw;
    }

    table {
      color: #034F85;
      align-items: center;
      background-color: #fff;
      font-family: 'Urbanist';
      font-size: 4vw;
      margin: 0 7vw;

      thead {
        tr {
          th {
            padding: 5vw 15vw;
            font-size: clamp(1.2rem, 4vw, 2rem);
            font-weight: 700;
          }
        }
      }

      tbody {
        tr {
          td {
            padding: 5vw 3vw 2vw 0vw;
            font-size: clamp(1rem, 5vw, 2rem);
          }

          td:nth-child(even) {
            border-left: 0.5vw solid #103F65;
            padding: 0 5vw;
          }
        }
      }
    }
  }
}

@media (min-width: 768px) {
  section {
    div {
      display: flex;
      justify-content: center;
      margin-bottom: 10vw;

      a {
        cursor: pointer;
        position: absolute;
        left: 24vw;
        margin-top: -2vw;

       span {
          color: #010A5C;
          font-size: 2vw;
        }
      }

      img {
        width: 20vw;
      }
    }

    h1 {
      font-family: 'Urbanist';
      font-weight: 600;
      font-size: 5vw;
      text-align: center;
      color: #10293D;
      margin: -5vw 0 5vw 0;
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
}
</style>
