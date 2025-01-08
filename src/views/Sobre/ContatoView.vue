<script setup>
import Footer from '../../geral/Footer.vue'
import Header from '../../geral/Header.vue'
</script>

<template>
    <Header />
    <main>
        <section class="contato">
            <h1> ENTRE EM CONTATO</h1>
            <div class="linhaUm">
                <ul>
                    <li>
                        <img src="../../img/contato/bianca.png" alt="Bianca">
                        <h3>Bianca Isadora Joselli de Souza</h3>
                        <p class="negrito">E-mail:</p>
                        <p>biancajoselli.ifc@gmail.com</p>
                        <p class="negrito">Telefone:</p>
                        <p>(47) 99790-4799</p>
                    </li>
                    <li>
                        <img src="../../img/contato/helena.png" alt="Helena">
                        <h3>Helena Soares Pereira</h3>
                        <p class="negrito">E-mail:</p>
                        <p>helenasoarees23@gmail.com</p>
                        <p class="negrito">Telefone:</p>
                        <p>(47) 99776-0827</p>
                    </li>
                    <li>
                        <img src="../../img/contato/luiza.png" alt="Luiza">
                        <h3>Luiza Westrupp do Carmo</h3>
                        <p class="negrito">E-mail:</p>
                        <p>luizawestruppdocarmo@gmail.com</p>
                        <p class="negrito">Telefone:</p>
                        <p>(47) 99200-7063</p>
                    </li>
                </ul>
            </div>
            <div class="linhaDois">
                <ul>
                    <li>
                        <img src="../../img/contato/matheus.png" alt="Matheus">
                        <h3>Matheus Miguel Michalski</h3>
                        <p class="negrito">E-mail:</p>
                        <p>matheus.michalskifc@gmail.com</p>
                        <p class="negrito">Telefone:</p>
                        <p>(47) 99622-1285</p>
                    </li>
                    <li>
                        <img src="../../img/contato/nicole.png" alt="Nicole">
                        <h3>Nicole Ferreira Mello</h3>
                        <p class="negrito">E-mail:</p>
                        <p>nicfmello@gmail.com</p>
                        <p class="negrito">Telefone:</p>
                        <p>(47) 99113-8151</p>
                    </li>
                    <li>
                        <img src="../../img/contato/rafael.png" alt="Rafael">
                        <h3>Rafael August Otto</h3>
                        <p class="negrito">E-mail:</p>
                        <p>rafael.august.otto.ifc@gmail.com</p>
                        <p class="negrito">Telefone:</p>
                        <p>(47) 98867-2983</p>
                    </li>
                </ul>
            </div>
            <div class="linhaTres">
                <ul>
                    <li>
                        <img src="../../img/contato/vitor.png" alt="Vitor">
                        <h3>Vitor André da SIlva</h3>
                        <p class="negrito">E-mail:</p>
                        <p>alunovitorandre@gmail.com</p>
                        <p class="negrito">Telefone:</p>
                        <p>(47) 99157-8502</p>
                    </li>
                </ul>
            </div>
        </section>
    </main>
    <Footer />
</template>

<style scoped>
.contato {
    margin: 0 10vw 0 10vw;
    background-color: #E2F2F0;
    padding: 1vw 0 2vw 0;
    margin-top: 10vw;
    border-radius: 108px;
    margin-bottom: 5vw;
    box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.495);
}

.negrito {
    font-weight: 600;
}

.contato h1 {
    font-size: 2rem;
    text-align: center;
    margin: 2vw 0 5vw 0;
    font-weight: 600;
    text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.463);
    color: #010A5C;
}

.contato h3 {
    font-weight: 600;
    font-size: 1.2rem;
}

.contato div ul {
    display: flex;
    justify-content: space-evenly;
}

.contato div ul li img {
    width: 70%;
}

.contato div ul li {
    text-align: center;
    margin: 0 0 5vw 0;
    line-height: 1.3;
    color: #010A5C;
}

.contato div.linhaDois ul li {
    margin: 0 0.3vw 0 0.3vw;
}

.contato div.linhaTres ul li {
    margin-top: 5vw;
}
</style>