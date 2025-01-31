<script setup>
defineProps([
  'system',
  'content1p',
  'content1Reference', //content1
  'content2p',
  'content2Reference', //content2
  'organImage',
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
</script>

<template>
  <section class="is-desktop">
    <h1>
      Sistema <span>{{ system }}</span>
    </h1>
    <img src="/systems/squareDetail.png" alt="Detalhe" id="detail1" />

    <div class="content">
      <h3>Estrutura</h3>
      <p v-html="content1p"></p>
      <p>
        <a :href="content1Reference"><span>Referência</span></a>
      </p>
    </div>
    <img src="/systems/bigSquare.png" alt="Detalhe" id="detail2" />
    <div class="content">
      <h3>Cuidados</h3>
      <ul>
        <li v-for="care of content2p" :key="care.id">{{ care.content }}</li>
      </ul>
      <p v-html="content2p"></p>
      <p><a :href="content2Reference">Referência</a></p>
    </div>

    <div class="organ">
      <img :src="organImage" :alt="organName" />

      <div></div>
    </div>

    <img src="/systems/squareSmall.png" alt="Detalhe" id="detail3" />

    <h2>Doenças</h2>
    <div class="illnesses">
      <div class="illness">
        <h3>{{ illness1h3 }}</h3>
        <p>{{ illness1p }}</p>
        <p><a :href="illness1Reference">Referência</a></p>
      </div>
      <div class="illness">
        <h3>{{ illness2h3 }}</h3>
        <p>{{ illness2p }}</p>
        <p><a :href="illness2Reference">Referência</a></p>
      </div>
      <div class="illness">
        <h3>{{ illness3h3 }}</h3>
        <p>{{ illness3p }}</p>
        <p><a :href="illness3Reference">Referência</a></p>
      </div>
    </div>

    <div class="content">
      <h3>Conclusão</h3>
      <p>{{ content3p }}</p>
      <p><a :href="content3Reference">Referência</a></p>
    </div>

    <img src="/systems/miniSquare.png" alt="Detalhe" id="detail4" />

    <RouterLink to="/" id="button"><button>OUTROS SISTEMAS</button></RouterLink>
  </section>
</template>

<style scoped>
section {
  text-align: center;

  h1 {
    font-family: 'Tilt Warp';
    font-weight: 400;
    font-size: 6.667vw;
    line-height: 5.906vw;
    color: #1f527c;
    text-align: center;
    width: 31.25vw;

    span {
      font-size: 7vw;
      color: #10293d;
    }
  }

  .content {
    margin: 4vw;
    width: 70.708vw;
    background-color: #f5f5f5;
    padding: 1vw 3vw 1vw 5vw;
    border-radius: 24px;
    box-shadow: 1.563vw 1.563vw 0.104vw #a7e6eb;

    h3 {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 2.583vw;
      line-height: 3.906vw;
      color: #103f65;
      text-align: left;
    }

    p {
      font-family: 'Urbanist';
      font-weight: 500;
      font-size: 1.302vw;
      line-height: 2.083vw;
      color: #474747;
      text-align: left;

      a {
        text-decoration: none;
        font-family: 'Tilt Warp';
        font-weight: 400;
        font-size: 1.25vw;
        line-height: 3.906vw;
        color: #103f65;
      }
    }
  }

  .organ {
    display: flex;
    justify-content: space-between;
    width: 75vw;
    margin: 5vw 4vw 5vw 4vw;

    img {
      width: 36vw;
    }

    div {
      width: 36.458vw;
      border: 1px solid #103f65;
      border-radius: 24px;
      padding: 3vw 2vw 1vw 3vw;
      margin: 0.7vw 0 0.5vw 5vw;
      background-color: #ffffff;

      h3 {
        font-family: 'Tilt Warp';
        font-weight: 400;
        font-size: 2.083vw;
        line-height: 3.906vw;
        color: #103f65;
        text-align: left;
      }

      p {
        font-family: 'Urbanist';
        font-weight: 500;
        font-size: 1.302vw;
        line-height: 2.083vw;
        color: #474747;
        text-align: left;

        a {
          text-decoration: none;
          font-family: 'Tilt Warp';
          font-weight: 400;
          font-size: 1.25vw;
          line-height: 3.906vw;
          color: #103f65;
        }
      }
    }
  }

  h2 {
    font-family: 'Tilt Warp';
    font-weight: 400;
    font-size: 3.333vw;
    line-height: 3.906vw;
    color: #103f65;
    text-align: left;
    margin-left: 5vw;
  }

  .illnesses {
    display: flex;
    justify-content: center;

    .illness {
      margin: 2vw;
      width: 20.833vw;
      border: 1px solid #103f65;
      border-radius: 24px;
      padding: 2vw;

      h3 {
        font-family: 'Tilt Warp';
        font-weight: 400;
        font-size: 2.083vw;
        line-height: 3.906vw;
        color: #103f65;
        text-align: left;
      }

      p {
        font-family: 'Urbanist';
        font-weight: 500;
        font-size: 1.302vw;
        line-height: 2.083vw;
        color: #474747;
        text-align: left;

        a {
          text-decoration: none;
          font-family: 'Tilt Warp';
          font-weight: 400;
          font-size: 1.25vw;
          line-height: 3.906vw;
          color: #103f65;
        }
      }
    }
  }

  #button {
    padding: 2vw 3vw 2vw 3vw;
    border-radius: 24px;
    background: linear-gradient(45deg, #103f65, #47abc6);

    button {
      width: 70%;
      margin: 7vw 0 0 0;
      padding: 1vw;
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

  #detail1 {
    position: absolute;
    left: 90.125vw;
    top: 0;
    width: 9.688vw;
    z-index: -1;
  }

  #detail2 {
    position: absolute;
    left: 0px;
    top: 37.188vw;
    width: 15.625vw;
    z-index: -1;
  }

  #detail3 {
    position: absolute;
    left: 89.331vw;
    top: 99.688vw;
    width: 10.417vw;
    z-index: -1;
  }

  #detail4 {
    position: absolute;
    left: 0px;
    top: 183.854vw;
    width: 10.417vw;
    z-index: -1;
  }
}
</style>
