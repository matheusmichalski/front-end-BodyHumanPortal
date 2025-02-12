<script setup>
import HeaderView from '@/components/desktop/elements/HeaderView.vue'
import HeaderMobileView from '@/components/mobile/elements/HeaderMobileView.vue';
import FooterMobileView from '@/components/mobile/elements/FooterMobileView.vue';
</script>
<template>
  <div class="is-desktop">
    <HeaderView />
    <section>
      <nav id="sidebar">
        <h1>Minha conta</h1>
        <ul>
          <li>
            <RouterLink to="/minha-conta/profile"
              ><i class="fa-solid fa-table"></i> Dashboard</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/minha-conta/suporte"><i class="fa-regular fa-circle-question"></i> Suporte</RouterLink>
          </li>
          <li>
            <RouterLink to="/minha-conta/seguranca"><i class="fa-solid fa-shield-halved"></i> Segurança</RouterLink>
          </li>
        </ul>
      </nav>
      <div id="routerContainer">
        <RouterView />
      </div>
    </section>
  </div>
  <div class="is-mobile">
    <HeaderMobileView />
    <RouterView />
    <FooterMobileView />
  </div>
</template>

<style scoped>
.is-desktop {
  section {
    margin-top: -3vw;
    margin-left: -5vw;
    display: flex;
    background-color: #a7e6eb;

    #routerContainer {
      width: 100%;
      border-radius: 24px;
      background-color: #ffffff;
    }

    #sidebar {
      width: 20.938vw;
      text-align: center;
      margin: 0vw 0 0 0vw;

      h1 {
        font-family: 'Tilt Warp';
        font-weight: 400;
        font-size: 1.823vw;
        line-height: 2.292vw;
        color: #10293d;
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
            color: #10293d;
            padding: 0.5vw 0 0.5vw 0;
            text-decoration: none;
            border-bottom: 1px solid #10293d;
          }
        }
      }
    }
  }
}

.is-mobile {
  margin-bottom: 0;
}
</style>
