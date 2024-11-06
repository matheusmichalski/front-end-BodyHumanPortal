<template>
    <header id="cabecalho">
        <nav>
            <ul class="paginas">
                <li><router-link to="/"><img src="../img/cabeçalho/logo.png" alt="logo" width="35px"></router-link></li>
                <li><router-link to="/sobre">SOBRE NÓS</router-link></li>
                <li><router-link to="/contato">CONTATO</router-link></li>
                <li>
                    <details>
                        <summary>SISTEMAS</summary>
                            <div class="menuSistemas">
                                <ul>

                                    <div class="coluna1">
                                        <li class="cardiovascular">
                                            <router-link to="/cardiovascular"><img src="../img/cabeçalho/heart.png"
                                                    alt="Sistema Cardiovascular">
                                                <div>
                                                    <h3>Cardiovascular</h3>
                                                    <p>Saiba mais sobre o <br> sistema cardiovascular</p>
                                                </div>
                                            </router-link>
                                        </li>
                                        <li class="digestorio">
                                            <router-link to="/digestorio"><img src="../img/cabeçalho/digestion.png"
                                                    alt="Sistema Digestório">
                                                <div>
                                                    <h3>Digestório</h3>
                                                    <p>Saiba mais sobre o <br> sistema digestório</p>
                                                </div>
                                            </router-link>
                                        </li>
                                    </div>

                                    <div class="coluna2">
                                        <li class="nervoso">
                                            <router-link to="/nervoso"><img src="../img/cabeçalho/neuron.png"
                                                    alt="Sistema Nervoso">
                                                <div>
                                                    <h3>Nervoso</h3>
                                                    <p>Saiba mais sobre o <br> sistema nervoso</p>
                                                </div>
                                            </router-link>
                                        </li>
                                        <li class="osseo">
                                            <router-link to="/esqueletico"><img src="../img/cabeçalho/human-bones.png"
                                                    alt="Sistema Ósseo">
                                                <div>
                                                    <h3>Ósseo</h3>
                                                    <p>Saiba mais sobre o <br> sistema ósseo</p>
                                                </div>
                                            </router-link>
                                        </li>
                                    </div>

                                    <div class="coluna3">
                                        <li class="reprodutor">
                                            <router-link to="/reprodutor-feminino"><img src="../img/cabeçalho/sperm.png"
                                                    alt="Sistema Reprodutor">
                                                <div>
                                                    <h3>Reprodutor</h3>
                                                    <p>Saiba mais sobre o <br> sistema reprodutor</p>
                                                </div>
                                            </router-link>
                                        </li>
                                        <li class="respiratório">
                                            <router-link to="/respiratorio"><img src="../img/cabeçalho/lung.png"
                                                    alt="Sistema Respiratório">
                                                <div>
                                                    <h3>Respiratório</h3>
                                                    <p>Saiba mais sobre o <br> sistema respiratório</p>
                                                </div>
                                            </router-link>
                                        </li>
                                    </div>

                                    <div class="coluna4">
                                        <li class="urinario">
                                            <router-link to="/urinario"><img src="../img/cabeçalho/bladder.png"
                                                    alt="Sistema Urinário">
                                                <div>
                                                    <h3>Urinário</h3>
                                                    <p>Saiba mais sobre o <br> sistema urinário</p>
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
                <li><router-link to="/dashboard"><span class="fa-solid fa-house-chimney"></span></router-link></li>
                <li id="semLogin1"><router-link to="/cadastro">SIGN UP</router-link></li>
                <li id="semLogin2"><router-link to="/login">LOGIN</router-link></li>
                <li id="comLogin"><router-link to="/dashboard">MY ACCOUNT</router-link></li>
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

header nav ul li a {
    margin: 0 1vw;
    text-decoration: none;
    color: #010A5C;
}

#comLogin {
    display: none;
}

#semLogin1,
#semLogin2 {
    display: block;
}

.paginaAtual {
    color: #7A0000;
    text-decoration: underline #7A0000;
}

/* Estilos do pop-up */

.popup {
    display: none;
    /* Oculta o pop-up por padrão */
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin-top: 4vw;
}

.popup-content {
    background-color: #E2F2F0;
    padding: 1vw;
    width: 98%;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
}

div.popup-content ul {
    display: flex;
    text-align: center;
    justify-content: space-between;
    margin: 0 15vw 0 15vw;
}

div.popup-content ul li {
    padding: 1vw;
    border: 3px solid transparent;
    border-radius: 20px;
}

div.popup-content ul li a {
    text-decoration: none;
    color: black;
}

div.popup-content ul li a img {
    width: 80%;
}

div.popup-content ul li a h3 {
    color: #010A5C;
    font-size: 1.1rem;
}

div.popup-content ul li:hover {
    border: 3px solid white;
}

div.popup-content ul li p {
    margin-top: 0.50vw;
    font-size: 0.9rem;
}

.cardiovascular {
    margin: 0;
}

.digestorio {
    margin: 1.7vw;
}

.nervoso {
    margin-top: 1vw;
}

.osseo {
    margin-top: 3.39vw;
}

.reprodutor {
    margin: 1.15vw;
}

.respiratório {
    margin-top: 1vw;
}

.urinario {
    margin: 1.22vw;
}

summary {
    list-style: none;
    cursor: pointer;
    color: #010A5C;
}
</style>