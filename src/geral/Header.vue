<script setup>
import { ref } from 'vue'
const token = ref(localStorage.getItem('token'))
</script>

<template>
  <header id="cabecalho">
    <nav>
      <ul class="paginas">
        <li>
          <router-link to="/"><img src="../img/cabeçalho/logo.png" alt="logo" width="35px" /></router-link>
        </li>
        <li><router-link to="/sobre" style="margin-right: 0.2vw;">SOBRE NÓS</router-link></li>
        <li><router-link to="/contato">CONTATO</router-link></li>
        <li>
          <details>
            <summary>SISTEMAS</summary>
            <div class="menuSistemas">
              <ul>
                <div class="coluna1">
                  <li class="cardiovascular">
                    <router-link to="/cardiovascular"><img src="../img/cabeçalho/heart.png"
                        alt="Sistema Cardiovascular" />
                      <div>
                        <h3>Cardiovascular</h3>
                        <p>
                          Saiba mais sobre o sistema cardiovascular
                        </p>
                      </div>
                    </router-link>
                  </li>
                  <li class="osseo">
                    <router-link to="/esqueletico"><img src="../img/cabeçalho/human-bones.png" alt="Sistema Ósseo" />
                      <div>
                        <h3>Ósseo</h3>
                        <p>
                          Saiba mais sobre o sistema ósseo
                        </p>
                      </div>
                    </router-link>
                  </li>
                </div>

                <div class="coluna2">
                  <li class="digestorio">
                    <router-link to="/digestorio"><img src="../img/cabeçalho/digestion.png" alt="Sistema Digestório" />
                      <div>
                        <h3>Digestório</h3>
                        <p>
                          Saiba mais sobre o digestório
                        </p>
                      </div>
                    </router-link>
                  </li>

                  <li class="reprodutor">
                    <router-link to="/reprodutor-feminino"><img src="../img/cabeçalho/sperm.png"
                        alt="Sistema Reprodutor" />
                      <div>
                        <h3>Reprodutor</h3>
                        <p>
                          Saiba mais sobre o sistema reprodutor
                        </p>
                      </div>
                    </router-link>
                  </li>
                  <li class="urinario">
                    <router-link to="/urinario"><img src="../img/cabeçalho/bladder.png" alt="Sistema Urinário" />
                      <div>
                        <h3>Urinário</h3>
                        <p>
                          Saiba mais sobre o sistema urinário
                        </p>
                      </div>
                    </router-link>
                  </li>
                </div>

                <div class="coluna3">
                  <li class="nervoso">
                    <router-link to="/nervoso"><img src="../img/cabeçalho/neuron.png" alt="Sistema Nervoso" />
                      <div>
                        <h3>Nervoso</h3>
                        <p>
                          Saiba mais sobre o sistema nervoso
                        </p>
                      </div>
                    </router-link>
                  </li>
                  <li class="respiratório">
                    <router-link to="/respiratorio"><img src="../img/cabeçalho/lung.png" alt="Sistema Respiratório" />
                      <div>
                        <h3>Respiratório</h3>
                        <p>
                          Saiba mais sobre o sistema respiratório
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
        <li><router-link to="/feedback">AVALIE-NOS</router-link></li>
        <li v-if="token">
          <router-link to="/dashboard"><span class="fa-solid fa-house-chimney"></span></router-link>
        </li>
        <li v-else>
          <ul>
            <li id="semLogin1">
              <router-link to="/cadastro">SIGN UP</router-link>
            </li>
            <li id="semLogin2">
              <router-link to="/login">LOGIN</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #E2F2F0;
  padding: 1vw;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  width: 98%;
  font-size: calc(1rem + 0.2vw);
  z-index: 2;
}

header nav {
  display: flex;
  justify-content: space-between;
}

header nav ul {
  display: flex;
}

header nav ul.paginas li:not(:first-child) {
  margin-top: 1vw;
}

header nav ul.paginas li:first-child {
  margin-top: 0.2vw;
}

header nav ul.minha-conta li {
  margin-top: 1vw;
}

header nav ul.minha-conta li ul li {
  margin-top: 0;
}

header nav ul li a {
  margin: 0 1vw;
  text-decoration: none;
  color: #010A5C;
}

summary {
  list-style: none;
  cursor: pointer;
  color: #010a5c;
}

header nav ul li details div.menuSistemas {
  width: 100px;
}

header nav ul li details div.menuSistemas ul div li a {
  margin: 1vw;
  padding: 1vw;
  border: 2px solid #e2f2f0;
  text-align: center;
  display: flex;
  color: black;
  height: 130px;
  width: 320px;
}

header nav ul li details div.menuSistemas ul div li a div {
  margin: 0.5vw;
}

header nav ul li details div.menuSistemas ul div li a div h3 {
  margin: 0 0 0.5vw 0.5vw;
}

header nav ul li details div.menuSistemas ul div li a:hover {
  border: 2px solid white;
  text-decoration: underline;
  border-radius: 20px;
}
</style>
