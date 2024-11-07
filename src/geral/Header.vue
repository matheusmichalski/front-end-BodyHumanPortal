<script setup>
import { ref } from 'vue'
const token = ref(localStorage.getItem('token'))
</script>

<template>
  <header id="cabecalho">
    <nav>
      <ul class="paginas">
        <li>
          <router-link to="/"
            ><img src="../img/cabeçalho/logo.png" alt="logo" width="35px"
          /></router-link>
        </li>
        <li><router-link to="/sobre">SOBRE NÓS</router-link></li>
        <li><router-link to="/contato">CONTATO</router-link></li>
        <li>
          <details>
            <summary>SISTEMAS</summary>
            <div class="menuSistemas">
              <ul>
                <div class="coluna1">
                  <li class="cardiovascular">
                    <router-link to="/cardiovascular"
                      ><img
                        src="../img/cabeçalho/heart.png"
                        alt="Sistema Cardiovascular"
                      />
                      <div>
                        <h3>Cardiovascular</h3>
                        <p>
                          Saiba mais sobre o <br />
                          sistema cardiovascular
                        </p>
                      </div>
                    </router-link>
                  </li>
                  <li class="digestorio">
                    <router-link to="/digestorio"
                      ><img
                        src="../img/cabeçalho/digestion.png"
                        alt="Sistema Digestório"
                      />
                      <div>
                        <h3>Digestório</h3>
                        <p>
                          Saiba mais sobre o <br />
                          sistema digestório
                        </p>
                      </div>
                    </router-link>
                  </li>
                </div>

                <div class="coluna2">
                  <li class="nervoso">
                    <router-link to="/nervoso"
                      ><img
                        src="../img/cabeçalho/neuron.png"
                        alt="Sistema Nervoso"
                      />
                      <div>
                        <h3>Nervoso</h3>
                        <p>
                          Saiba mais sobre o <br />
                          sistema nervoso
                        </p>
                      </div>
                    </router-link>
                  </li>
                  <li class="osseo">
                    <router-link to="/esqueletico"
                      ><img
                        src="../img/cabeçalho/human-bones.png"
                        alt="Sistema Ósseo"
                      />
                      <div>
                        <h3>Ósseo</h3>
                        <p>
                          Saiba mais sobre o <br />
                          sistema ósseo
                        </p>
                      </div>
                    </router-link>
                  </li>
                </div>

                <div class="coluna3">
                  <li class="reprodutor">
                    <router-link to="/reprodutor-feminino"
                      ><img
                        src="../img/cabeçalho/sperm.png"
                        alt="Sistema Reprodutor"
                      />
                      <div>
                        <h3>Reprodutor</h3>
                        <p>
                          Saiba mais sobre o <br />
                          sistema reprodutor
                        </p>
                      </div>
                    </router-link>
                  </li>
                  <li class="respiratório">
                    <router-link to="/respiratorio"
                      ><img
                        src="../img/cabeçalho/lung.png"
                        alt="Sistema Respiratório"
                      />
                      <div>
                        <h3>Respiratório</h3>
                        <p>
                          Saiba mais sobre o <br />
                          sistema respiratório
                        </p>
                      </div>
                    </router-link>
                  </li>
                </div>

                <div class="coluna4">
                  <li class="urinario">
                    <router-link to="/urinario"
                      ><img
                        src="../img/cabeçalho/bladder.png"
                        alt="Sistema Urinário"
                      />
                      <div>
                        <h3>Urinário</h3>
                        <p>
                          Saiba mais sobre o <br />
                          sistema urinário
                        </p>
                      </div>
                    </router-link>
                  </li>
                </div>
              </ul>
            </div>
          </details>
        </li>
      </ul>
      <ul class="minha-conta">
        <template v-if="token">
          <li>
            <router-link to="/dashboard"
              ><span class="fa-solid fa-house-chimney">
                M i n h a C o n t a</span
              ></router-link
            >
          </li>
        </template>

        <template v-else>
          <li id="semLogin1">
            <router-link to="/cadastro">SIGN UP</router-link>
          </li>
          <li id="semLogin2">
            <router-link to="/login">LOGIN</router-link>
          </li>
        </template>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #e2f2f0;
  padding: 1vw 1vw 0 1vw;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  width: 98%;
  font-size: calc(1rem + 0.2vw);
  z-index: 10;
}

header nav {
  display: flex;
  justify-content: space-between;
}

header nav ul {
  display: flex;
}

header nav ul.paginas li {
  margin: 1vw 0.5vw 1vw 0.5vw;
}

header nav ul.minha-conta li {
  margin-top: 1vw;
}

header nav ul li a {
  margin: 0 1vw 0 1vw;
  text-decoration: none;
  color: #010a5c;
}

header nav ul li details div.menuSistemas {
  width: 100px;
}

header nav ul li details div.menuSistemas ul li {
  margin: 1vw;
  padding: 1vw;
  border: 2px solid #e2f2f0;
  text-align: center;
}

header nav ul li details div.menuSistemas ul li:hover {
  border: 2px solid white;
  text-decoration: underline;
  border-radius: 20px;
}

#comLogin {
  display: none;
}

#semLogin1,
#semLogin2 {
  display: block;
}

summary {
  list-style: none;
  cursor: pointer;
  color: #010a5c;
}
</style>
