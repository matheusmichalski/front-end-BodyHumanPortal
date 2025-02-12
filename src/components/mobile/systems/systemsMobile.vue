  <script setup>
  import { ref } from 'vue'
  defineProps([
    'system',
    'content1p',
    'content1Reference', //content1
    'content2p',
    'content2Reference', //content2
    'organImage',
    'organName',
    'organh3',
    'organp',
    'organReference', //organ
    'illness1h3',
    'illness1p',
    'illness1Reference', //illness1
    'illness2h3',
    'illness2p',
    'illness2Reference', //illness2
    'illness3h3',
    'illness3p',
    'illness3Reference', //illness3
    'content3p',
    'content3Reference', //content3
  ])

  const indexStart = ref(0);
  function getCardStartStyle(cardIndex) {
    const position = (cardIndex - indexStart.value + 3) % 3

    const styles = [
      {
        transform: "translateX(-80vw)",
        opacity: 0
      },
      {
        transform: 'translateX(0vw) scale(1)',
        opacity: 1,
      },
      {
        transform: "translateX(75vw)",
        opacity: 0
      }
    ]

    return styles[position] || styles[0] // Garante o estilo mesmo para índices fora do alcance
  }
  function nextStart() {
    indexStart.value = (indexStart.value + 1) % 3
  }
  function prevStart() {
    indexStart.value = (indexStart.value - 1 + 3) % 3
  }
</script>

<template>
  <section class="is-mobile">
    <div class="banner">
      <h1>
        Sistema <span>{{ system }}</span>
      </h1>
    </div>

    <div class="content">
      <h3>Estrutura</h3>
      <p v-html="content1p"></p>
      <p>
        <a :href="content1Reference"><span>Referência</span></a>
      </p>
    </div>

    <div class="content">
      <h3>Cuidados</h3>
      <p v-html="content2p"></p>
      <p><a :href="content2Reference">Referência</a></p>
    </div>

    <div class="organ">
      <div class="svg">
        <img :src="organImage" :alt="organName" />
      </div>
      <div class="text">
        <h3></h3>
        <p></p>
        <p><a :href="organReference">Referência</a></p>
      </div>
      <div class="text">
        <h3></h3>
        <p></p>
        <p><a :href="organReference">Referência</a></p>
      </div>
    </div>


    <div class="illnesses">
      <div class="title">
        <h2>Doenças</h2>
        <<<<<<< HEAD=======</div>
          <div class="illness">
            <h3>{{ illness1h3 }}</h3>
            <p>{{ illness1p }}</p>
            <p><a :href="illness1Reference">Referência</a></p>
            >>>>>>> 013d505 (STYLE: Formatting system pages (mobile version), the carousel is still missing)
          </div>
          <div id="container">
            <i class="fa-solid fa-chevron-left button-start" id="prev-start" @click="prevStart"></i>
            <i class="fa-solid fa-chevron-right button-start" id="next-start" @click="nextStart"></i>
            <div class="illness" :style="getCardStartStyle(1)">
              <h3>{{ illness1h3 }}</h3>
              <p>{{ illness1p }}</p>
              <p><a :href="illness1Reference">Referência</a></p>
            </div>
            <div class="illness" :style="getCardStartStyle(2)">
              <h3>{{ illness2h3 }}</h3>
              <p>{{ illness2p }}</p>
              <p><a :href="illness2Reference">Referência</a></p>
            </div>
            <div class="illness" :style="getCardStartStyle(3)">
              <h3>{{ illness3h3 }}</h3>
              <p>{{ illness3p }}</p>
              <p><a :href="illness3Reference">Referência</a></p>
            </div>
          </div>
      </div>
      <div id="container">
        <i class="fa-solid fa-chevron-left button-start" id="prev-start" @click="prevStart"></i>
        <i class="fa-solid fa-chevron-right button-start" id="next-start" @click="nextStart"></i>
        <div class="illness" :style="getCardStartStyle(1)">
          <h3>{{ illness1h3 }}</h3>
          <p>{{ illness1p }}</p>
          <p><a :href="illness1Reference">Referência</a></p>
        </div>
        <div class="illness" :style="getCardStartStyle(2)">
          <h3>{{ illness2h3 }}</h3>
          <p>{{ illness2p }}</p>
          <p><a :href="illness2Reference">Referência</a></p>
        </div>
        <div class="illness" :style="getCardStartStyle(3)">
          <h3>{{ illness3h3 }}</h3>
          <p>{{ illness3p }}</p>
          <p><a :href="illness3Reference">Referência</a></p>
        </div>
      </div>
    </div>

      <div class="content">
        <h3>Conclusão</h3>
        <p v-html="content3p"></p>
        <p><a :href="content3Reference">Referência</a></p>
      </div>
  </section>

  <RouterLink to="/" id="button"><button>OUTROS SISTEMAS</button></RouterLink>
</template>

<style scoped>
.is-mobile {
  padding: 0;
  background: url(/systems/Fundo.png) no-repeat top center;
  background-size: 100%;

  .banner {
    display: flex;

    h1 {
      padding-left: 10vw;
      padding-top: 5vw;
      font-family: "Tilt Warp";
      font-size: 10vw;
      display: grid;
      justify-content: left;
      margin-top: 5vw;
      text-align: left;
      color: #1F527C;

      span {
        color: #10293D;
        margin-bottom: 10vw;
      }
    }
  }

  .content {
    background-color: #A7E6EB;
    padding: 5vw;
    border-radius: 24px;
    margin: 0 4vw 6vw 4vw;
    text-align: left;

    h3 {
      font-size: 7vw;
      color: #10293D;
      font-family: "Tilt Warp";
    }

    p {
      font-family: "Urbanist";
      font-size: 5vw;
      line-height: 5.5vw;
      color: #474747;
      margin: 2vw 0 2vw 0;
    }

    a {
      color: #103F65;
      font-weight: 900;
      font-size: 4vw;
      text-decoration: none;
    }
  }

  .organ {
    .svg {
      text-align: center;
    }

    h3 {
      font-size: 7vw;
      color: #103F65;
      font-family: "Tilt Warp";
      margin-bottom: 2vw;
    }

    p {
      font-family: "Urbanist";
      color: #474747;
      margin-bottom: 2vw;
      font-size: 5vw;
      line-height: 5.5vw;
    }

    .text {
      border: #103F65 2px solid;
      margin: 5vw;
      padding: 5vw;
      border-radius: 24px;

      a {
        color: #103F65;
        font-weight: 900;
        font-size: 4vw;
        text-decoration: none;
      }
    }
  }

  .illnesses {
    margin-top: 5vw;
    padding-top: 3vw;
    position: relative;
    overflow: hidden;

    h2 {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 7vw;
      color: #103f65;
      text-align: left;
      margin-left: 5vw;
    }

    #container {
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
      height: 180vw;
      margin-top: 5vw;

      .button-start {
        width: 8vw;
        height: 8vw;
        border-radius: 50%;
        background-color: #4A899A;
        font-size: 4vw;
        color: #010A5C;
        position: absolute;
        cursor: pointer;
        z-index: 2;
        top: 30%;
        transform: translateY(250%);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #prev-start {
        left: 3vw;
      }

      #next-start {
        right: 3vw;
      }

      .illness {
        width: 70vw;
        height: 90%;
        border-radius: 1.5vw;
        border: 1px solid #103F65;
        padding: 5vw;
        margin: 0vw 2vw 0 2vw;
        position: absolute;
        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;

        h3 {
          font-family: 'Tilt Warp';
          font-weight: 400;
          font-size: 6vw;
          line-height: 6.5vw;
          color: #103f65;
          text-align: left;
          margin: 1vw 0;
        }

        p {
          font-family: 'Urbanist';
          font-weight: 500;
          font-size: 5vw;
          line-height: 5.5vw;
          color: #474747;
          text-align: left;
          margin-top: 3vw;

          a {
            text-decoration: none;
            font-family: 'Tilt Warp';
            font-weight: 400;
            font-size: 4vw;
            color: #103f65;
          }
        }
      }
    }
  }

  #button {
    display: flex;
    justify-content: center;
    text-decoration: none;

    button {
      width: 70%;
      margin-bottom: 7vw;
      padding: 3vw;
      border-radius: 100px;
      background: linear-gradient(45deg, #a7e6eb, #007faa);
      font-family: 'Urbanist';
      font-weight: 700;
      font-size: 4vw;
      line-height: 2.083vw;
      color: #ffffff;
      text-decoration: none;
      border: none;
      cursor: pointer;
    }
  }
}

.content {
  background-color: #A7E6EB;
  padding: 5vw;
  border-radius: 24px;
  margin: 0 4vw 6vw 4vw;

  h3 {
    font-size: 1.5rem;
    color: white;
    font-family: "Tilt Warp";
  }

  p {
    font-family: "Urbanist";
    color: #474747;
    margin: 2vw 0 2vw 0;
  }

  a {
    color: #103F65;
    font-weight: 900;
    font-size: 0.8rem;
    text-decoration: none;
  }
}

.organ {
  .svg {
    text-align: center;
  }

  h3 {
    font-size: 1.5rem;
    color: #103F65;
    font-family: "Tilt Warp";
    margin-bottom: 2vw;
  }

  p {
    font-family: "Urbanist";
    color: #474747;
    margin-bottom: 2vw;
  }

  .text {
    border: #103F65 2px solid;
    margin: 5vw;
    padding: 5vw;
    border-radius: 24px;

    a {
      color: #103F65;
      font-weight: 900;
      font-size: 0.8rem;
      text-decoration: none;
    }
  }
}

.illnesses {
  h2 {
    font-size: 1.8rem;
    color: #103F65;
    font-family: "Tilt Warp";
    margin-bottom: 2vw;
  }
}

  .illnesses {
    margin: 4vw 0 5vw 0;
    padding: 3vw 0 5vw 0;
    height: 25vw;
    position: relative;
    overflow: hidden;

    h2 {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 7vw;
      color: #103f65;
      text-align: left;
      margin-left: 5vw;
    }

    #container {
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
      height: 180vw;
      margin-top: 5vw;

      .button-start {
        width: 5.823vw;
        height: 5.823vw;
        border-radius: 50%;
        background-color: #4A899A;
        font-size: 2.5vw;
        color: #010A5C;
        position: absolute;
        cursor: pointer;
        z-index: 2;
        top: 30%;
        transform: translateY(250%);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #prev-start {
        left: 3vw;
      }

      #next-start {
        right: 3vw;
      }

      .illness {
        width: 70vw;
        height: 90%;
        border-radius: 1.5vw;
        border: 1px solid #103F65;
        padding: 5vw;
        margin: 0vw 2vw 0 2vw;
        position: absolute;
        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;

        h3 {
          font-family: 'Tilt Warp';
          font-weight: 400;
          font-size: 6vw;
          line-height: 6.5vw;
          color: #103f65;
          text-align: left;
          margin: 1vw 0;
        }

        p {
          font-family: 'Urbanist';
          font-weight: 500;
          font-size: 5vw;
          line-height: 5.5vw;
          color: #474747;
          text-align: left;
          margin-top: 3vw;

          a {
            text-decoration: none;
            font-family: 'Tilt Warp';
            font-weight: 400;
            font-size: 4vw;
            color: #103f65;
          }
        }
      }
    }
  }

  #button {
    display: flex;
    justify-content: center;
    text-decoration: none;

    button {
      width: 70%;
      margin-bottom: 7vw;
      padding: 3vw;
      border-radius: 100px;
      background: linear-gradient(45deg, #a7e6eb, #007faa);
      font-family: 'Urbanist';
      font-weight: 700;
      font-size: 4vw;
      line-height: 2.083vw;
      color: #ffffff;
      text-decoration: none;
      border: none;
      cursor: pointer;
    }
  }
}
</style>
