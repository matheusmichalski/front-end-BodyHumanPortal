<script setup>
import { ref } from 'vue';

const token = ref(true);
</script>

<template>
  <header class="is-desktop">
    <nav>
      <ul>
        <li>
          <RouterLink to="/"><img src="/public/logo.png" alt="Logo Icon" id="logo"></RouterLink>
        </li>

        <li>
          <RouterLink to="/sobre">SOBRE</RouterLink>
        </li>
        <li>
          <RouterLink to="/contato">CONTATO</RouterLink>
        </li>
        <li>
          <details>
            <summary>SISTEMAS <i class="fa-solid fa-arrow-down"></i></summary>
            <div id="menu">
              <img src="/public/home/detail-square.png" alt="Detalhe" id="detail">
              <h3>SISTEMA</h3>
              <div>
                <ul class="line-one">
                  <li>
                    <RouterLink to="/sistema/digestivo">
                      <img src="/public/header/digestive.png" alt="Digestive Icon" class="icon"> <br> DIGESTÓRIO
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/sistema/cardiovascular">
                      <img src="/public/header/circulatory.png" alt="Circulatory Icon" class="icon"> <br>
                      CARDIOVASCULAR
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/sistema/osseo">
                      <img src="/public/header/bone.png" alt="Bone Icon" class="icon"> <br> ÓSSEO
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/sistema/nervoso">
                      <img src="/public/header/nervous.png" alt="Nervous Icon" class="icon"> <br> NERVOSO
                    </RouterLink>
                  </li>
                </ul>
                <ul class="line-two">
                  <li>
                    <RouterLink to="/sistema/muscular">
                      <img src="/public/header/muscle.png" alt="Muscle Icon" class="icon"> <br> MUSCULAR
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/sistema/reprodutor-feminino">
                      <img src="/public/header/reproductive.png" alt="Reproductive Icon" class="icon"> <br> REPRODUTOR
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/sistema/respiratorio">
                      <img src="/public/header/respiratory.png" alt="Respiratory Icon" class="icon"> <br> RESPIRATÓRIO
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/sistema/urinario">
                      <img src="/public/header/urinary.png" alt="Urinary Icon" class="icon"> <br> URINÁRIO
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </li>
      </ul>

      <p v-if="token"><i class="fa-solid fa-user"></i></p>
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
  font-size: 20px;
  line-height: 24px;
  color: #010A5C;
  padding: 1vw;

  nav {
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;

      li {
        margin: 0 1vw 0 1vw;

        #logo {
          width: 80px;
        }

        details {
          summary {
            list-style: none;

            i {
              transition: transform 0.5s ease;
              margin-left: 0.5vw;
            }
          }

          #menu {
            display: flex;
            overflow: hidden;
            margin-left: -15vw;
            height: 350px;
            padding-top: 2vw;

            h3 {
              font-family: 'Poller One';
              font-weight: 400;
              font-size: 64px;
              line-height: 52px;
              color: #1F527C;
              margin: 120px 10vw 0 -25vw;
            }

            #detail {
              width: 571px;
              height: 576px;
              margin: -150px 0 0 -50px;
            }

            .line-one {
              margin: 1vw;

              li {
                text-align: center;
                width: 194px;
                margin: 0 1vw 0 1vw;

                .icon {
                  width: 140px;
                  height: 120px;
                }
              }
            }

            .line-two {
              margin: 1vw;

              li {
                text-align: center;
                width: 194px;
                margin: 0 1vw 0 1vw;

                .icon {
                  width: 140px;
                  height: 120px;
                }
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
          color: #010A5C;
          text-decoration: none;
        }
      }
    }

    i.fa-user {
      font-size: 22px;
    }
  }
}
</style>
