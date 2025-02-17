<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const detailsRef = ref(null)

watch(route, () => {
  if (detailsRef.value) {
    detailsRef.value.open = false
  }
})

const token = ref(true)
</script>

<template>
  <header class="is-mobile">
    <nav>
    <!--<p>
        <RouterLink to="/chat"><i class="fa-solid fa-robot"></i></RouterLink>
      </p>-->
      <div>
        <ul>
          <li>
            <RouterLink to="/">
              <i class="fa-solid fa-house"></i>
              <p>HOME</p>
            </RouterLink>

          </li>

          <li>
            <details ref="detailsRef">
              <summary>
                <i class="fa-solid fa-person"></i>
                <p>SISTEMAS</p>
              </summary>

              <ul>
                <li>
                  <RouterLink to="/sistema/digestivo">
                    <img src="/header/digestive.png" alt="Digestive Icon" class="icon" />
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/sistema/cardiovascular">
                    <img src="/header/circulatory.png" alt="Circulatory Icon" class="icon" />
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/sistema/osseo">
                    <img src="/header/bone.png" alt="Bone Icon" class="icon" />
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/sistema/nervoso">
                    <img src="/header/nervous.png" alt="Nervous Icon" class="icon" />
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/sistema/muscular">
                    <img src="/header/muscle.png" alt="Muscle Icon" class="icon" />
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/sistema/reprodutor-feminino">
                    <img src="/header/reproductive.png" alt="Reproductive Icon" class="icon" />
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/sistema/respiratorio">
                    <img src="/header/respiratory.png" alt="Respiratory Icon" class="icon" />
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/sistema/urinario">
                    <img src="/header/urinary.png" alt="Urinary Icon" class="icon" />
                  </RouterLink>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <RouterLink to="/contato">
              <i class="fa-solid fa-users"></i>
              <p>CONTATO</p>
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/minha-conta/profile">
              <i class="fa-solid fa-user"></i>
              <P>MINHA CONTA</P>
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  z-index: 10;
  bottom: 0;
  width: 100%;
  overflow: visible;

  nav {
    p {
      font-family: "Urbanist";
      font-weight: 700;
      text-align: right;

      i {
        color: #ffff;
        padding: clamp(0.3rem, 4vw, 2rem);
        background-color: #A7E6EB;
        border-radius: 100vw;
        font-size: clamp(0.2rem, 5vw, 2rem);
        margin: 2vw;
      }
    }

    div {
      ul {
        text-align: center;
        display: flex;
        justify-content: space-between;
        color: #103F65;
        font-size: clamp(0.2rem, 4vw, 2.3rem);
        background-color: #f5f5f5;
        border-radius: 24px 24px 0 0;
        padding: 3vw;

        li {
          a {
            text-decoration: none;

            i {
              padding: 2vw 0;
              color: #103F65;
              font-size: clamp(0.2rem, 6vw, 2.5rem);
            }

            p {
              font-family: "Urbanist";
              font-weight: 700;
            }
          }

          details {
            position: relative;

            summary {
              list-style: none;
              cursor: pointer;

              i {
                padding: 2vw 0;
                color: #103F65;
                font-size: clamp(0.2rem, 6vw, 2.5rem);
              }
            }

            summary::-webkit-details-marker {
              display: none;
            }

            ul {
              position: absolute;
              bottom: 140%;
              left: 50%;
              transform: translateX(-50%);
              display: grid;
              background: white;
              box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
              border-radius: 2vw;
              padding: 3vw;
              opacity: 0.5;
              transition: opacity 0.3s ease;

              li {
                a {
                  img {
                    width: 10vw;
                  }
                }
              }
            }
          }

          details[open] {
            ul {
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
</style>
