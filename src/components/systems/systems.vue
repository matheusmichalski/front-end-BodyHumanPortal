<script setup>
import { defineProps } from 'vue';
defineProps(['system', 'image', 'description',
  'title1', 'text1', 'reference1',
  'title2', 'text2', 'reference2', //banner
  'imageInfo', 'descriptionInfo', 'textInfo', 'referenceInfo', //info
  'illnesse1', 'textIllnesse1', 'referenceIlnesse1',
  'illnesse2', 'textIllnesse2', 'referenceIlnesse2',
  'illnesse3', 'textIllnesse3', 'referenceIlnesse3', //illnesses
  'conclusion', 'referenceConclusion']);
</script>

<template>
  <section class="banner-system"> <!--banner-->
    <div id="banner">
      <h1>Sistema <span>{{ system }}</span></h1>
      <img src="/public/img/systems/fundo-irregular.png" alt="Fundo Irregular" id="fundo-irregular">
      <img src="/public/img/systems/pebble.png" alt="Pebble" id="pebble">
      <img :src="image" :alt="description" id="organ">
    </div>

    <div id="banner-text">
      <div>
        <h2>{{ title1 }}</h2>
        <p>{{ text1 }}</p>
        <a :href="reference1">Referência</a>
      </div>

      <div>
        <h2>{{ title2 }}</h2>
        <p>{{ text2 }}</p>
        <a :href="reference2">Referência</a>
      </div>
    </div>
  </section> <!--end banner-->

  <section class="info-system"> <!--info-->
    <img :src="imageInfo" :alt="descriptionInfo">
    <p>{{ textInfo }}</p>
    <a :href="['referenceInfo']">Referência</a>
  </section> <!--info-->

  <section class="illnesses"> <!--illnesses-->
    <h2>Doenças</h2>

    <div class="principal-div">
      <div class="illnesse">
        <h3>{{ illnesse1 }}</h3>
        <p>{{ textIlnesse1 }}</p>
        <a :href="referenceIlnesse1">Referência</a>
      </div>

      <div class="illnesse">
        <h3>{{ illnesse2 }}</h3>
        <p>{{ textIlnesse2 }}</p>
        <a :href="referenceIlnesse2">Referência</a>
      </div>

      <div class="illnesse">
        <h3>{{ illnesse3 }}</h3>
        <p>{{ textIlnesse3 }}</p>
        <a :href="referenceIlnesse3">Referência</a>
      </div>
    </div>
  </section> <!--end illnesses-->

  <section class="conclusion"> <!--conclusion-->
    <h2>Conclusão</h2>
    <p>{{ conclusion }}</p>
    <a :href="referenceConclusion">Referência</a>
  </section> <!--end conclusion-->
</template>

<style scoped>
.banner-system {
  margin: 5vw;

  #banner {
    display: flex;

    h1 {
      font-family: 'Tilt Warp', sans-serif;
      font-size: 128px;
      line-height: 75px;
      text-align: center;
      color: #1F527C;
      margin: 5vw 0 0 1vw;

      span {
        font-size: 96px;
        color: #10293D;
      }
    }

    #fundo-irregular {
      width: 801px;
      height: 646px;
      margin-left: 8vw;
      position: relative;
      margin-top: -4vw;
    }

    #pebble {
      width: 725px;
      height: 675px;
      position: absolute;
      transform: rotate(-7deg);
      top: 135px;
      left: 1083px;
      margin-top: -2vw;
    }

    #organ {
      width: 740px;
      height: 524px;
      position: absolute;
      top: 260px;
      left: 1090px;
      margin-top: -1vw;
    }
  }

  #banner-text {
    display: flex;
    justify-content: center;
    margin-bottom: 5vw;

    div {
      width: 700px;
      height: 538px;
      border: 5px solid #D9D9D9;
      margin: 2vw 3vw 0 3vw;

      h2 {
        font-family: "Tilt Warp", sans-serif;
        font-size: 40px;
        line-height: 75px;
        text-align: center;
        color: #103F65;
        padding: 20px;
      }

      p {
        font-family: "Urbanist", sans-serif;
        font-weight: 500;
        font-size: 25px;
        line-height: 40px;
        color: #474747;
        padding: 20px;
      }

      a {
        font-family: "Tilt Warp", sans-serif;
        font-size: 24px;
        color: #103F65;
        padding: 20px;
      }
    }

    div:first-of-type {
      margin-top: -4vw;
    }
  }
}

.info-system {
  margin: 5vw;
}
</style>
