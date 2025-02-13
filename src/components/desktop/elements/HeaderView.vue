<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const detailsRef = ref(null)

watch(route, () => {
  if (detailsRef.value) {
    detailsRef.value.open = false
  }
})

const token = ref(!true)
</script>

<template>
  <header class="is-desktop">
    <nav>
      <ul>
        <li>
          <RouterLink to="/"><img src="/logo.png" alt="Logo Icon" id="logo" /></RouterLink>
        </li>

        <li>
          <RouterLink to="/contato">CONTATO</RouterLink>
        </li>
        <li>
          <details ref="detailsRef">
            <summary>SISTEMAS <i class="fa-solid fa-arrow-down"></i></summary>
            <div id="menu">
              <h3>SISTEMA</h3>
              <ul>
                <li class="blue">
                  <RouterLink to="/sistema/digestivo">
                    <img src="/header/digestive.png" alt="Digestive Icon" class="icon" />
                    <h4>DIGESTÓRIO</h4>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/sistema/cardiovascular">
                    <img src="/header/circulatory.png" alt="Circulatory Icon" class="icon" />
                    <h4>CARDIOVASCULAR</h4>
                  </RouterLink>
                </li>
                <li class="blue">
                  <RouterLink to="/sistema/osseo">
                    <img src="/header/bone.png" alt="Bone Icon" class="icon" />
                    <h4>ÓSSEO</h4>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/sistema/nervoso">
                    <img src="/header/nervous.png" alt="Nervous Icon" class="icon" />
                    <h4>NERVOSO</h4>
                  </RouterLink>
                </li>
              </ul>
              <ul>
                <li>
                  <RouterLink to="/sistema/muscular">
                    <img src="/header/muscle.png" alt="Muscle Icon" class="icon" />
                    <h4>MUSCULAR</h4>
                  </RouterLink>
                </li>
                <li class="blue">
                  <RouterLink to="/sistema/reprodutor-feminino">
                    <img src="/header/reproductive.png" alt="Reproductive Icon" class="icon" />
                    <h4>REPRODUTOR</h4>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/sistema/respiratorio">
                    <img src="/header/respiratory.png" alt="Respiratory Icon" class="icon" />
                    <h4>RESPIRATÓRIO</h4>
                  </RouterLink>
                </li>
                <li class="blue">
                  <RouterLink to="/sistema/urinario">
                    <img src="/header/urinary.png" alt="Urinary Icon" class="icon" />
                    <h4>URINÁRIO</h4>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </details>
        </li>
      </ul>

      <p v-if="token">
        <RouterLink to="/minha-conta/profile"><i class="fa-solid fa-user"></i></RouterLink>
      </p>
      <ul v-else>
        <li>
          <RouterLink to="/auth/login">SIG IN</RouterLink>
        </li>
        <li>
          <RouterLink to="/auth/cadastre-se">CADASTRE-SE</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  font-family: 'Urbanist';
  font-weight: 600;
  font-size: 1.042vw;
  line-height: 1.25vw;
  color: #010a5c;
  padding: 1vw;

  nav {
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;

      li {
        margin: 0 1vw 0 1vw;
        height: 5vw;

        #logo {
          width: 4.167vw;
        }

        details {
          position: relative;

          summary {
            list-style: none;

            i {
              transition: transform 0.5s ease;
              margin-left: 0.5vw;
            }
          }

          #menu {
            padding: 1vw 1.2vw 1vw 1vw;
            margin-top: 1vw;
            box-shadow: 0.521vw 0.521vw 0.521vw rgb(106, 106, 106);
            position: absolute;
            left: -15vw;
            z-index: 3;
            background-color: #FFF;
            width: 1495%;
            text-align: center;

            h3 {
              font-family: 'Tilt Warp';
              font-weight: 400;
              font-size: 3.125vw;
              line-height: 3.5vw;
              color: #1F527C;
              text-align: left;
              margin: 0 0 1vw 3vw;
            }

            ul {
              margin-left: 2vw;

              li {
                width: 20vw;
                padding: 1vw;
                margin: 1vw;
                border-radius: 30px;
                background-color: #FFF;

                a {
                  display: flex;
                  justify-content: left;
                  align-items: center;

                  img {
                    width: 4vw;
                  }

                  h4 {
                    font-family: 'Tilt Warp';
                    font-weight: 400;
                    font-size: 1.563vw;
                    line-height: 2vw;
                    color: #103F65;
                    margin-left: 2vw;
                  }
                }
              }

              .blue {
                background-color: #A8D4F4;
              }

              li:hover {
                background-color: #d6d6d6;
              }

              .blue:hover {
                background-color: #96bdd9;
              }
            }
          }
        }

        details[open] {
          i {
            transform: rotate(180deg);
          }
        }

        a {
          color: #010a5c;
          text-decoration: none;
        }
      }
    }

    i.fa-user {
      font-size: 1.146vw;
    }
  }
}
</style>
