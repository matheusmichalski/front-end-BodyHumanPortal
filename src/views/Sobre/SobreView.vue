<script setup>
import Footer from '../../geral/Footer.vue'
import Header from '../../geral/Header.vue'
</script>

<template>
    <Header />
    <main>
        <section class="banner"> <!--banner-->
            <div>
                <img src="../../img/sobre-nos/sobre-nos.png" alt="banner sistema urinario">
            </div>
            <h1>SOBRE NÓS</h1>
        </section> <!--end banner-->

        <section class="history"> <!--historia-->
            <ul>
                <li>
                    <details class="doing">
                        <summary>
                            <h2>Fazendo História</h2><span class="fa-solid fa-plus"></span>
                        </summary>
                        <hr>
                        <p>Em setembro de 2024, um grupo de alunos do curso técnico em Informática do Instituto Federal
                            Catarinense - IFC recebeu a missão de criar um site voltado para a saúde. Em meio a tantas
                            ideias, surgiu um conceito inovador: não apenas focar em saúde, mas explorar de forma
                            completa o <span>Corpo Humano</span>.</p>
                        <p>Observando que muitos sites sobre o tema eram confusos e apresentavam uma linguagem técnica
                            difícil de entender, os alunos pensaram: e se existisse um portal que fosse completo,
                            intuitivo e acessível a todos?</p>
                        <p>Depois de um período pensando em cada detalhe, criando estratégias para fazer o melhor, o
                            grupo finalmente tinha um nome para esse projeto desafiador, o <span>PORTAL DO CORPO
                                HUMANO</span>. </p>
                        <p>Mas um nome não faz um site. Trabalhando duro em conjunto, integrando tecnologias, buscando
                            ajuda de pessoas experientes e combinando conhecimentos, o projeto saiu do papel e se
                            transformou em uma plataforma inovadora e eficiente.</p>

                    </details>
                </li>
                <li>
                    <details>
                        <summary>
                            <h2>Nosso Objetivo</h2><span class="fa-solid fa-plus"></span>
                        </summary>
                        <hr>
                        <p>O<span>PORTAL DO CORPO HUMANO</span> foi criado com o objetivo de ajudar seus usuários a
                            compreender o
                            corpo humano de maneira lúdica e acessível, oferecendo informações claras e fáceis de
                            entender. Nosso foco é ser inovador, com uma interface envolvente que capte o interesse do
                            usuário em um tema tão vasto e fascinante quanto o <span>Corpo humano</span> .</p>
                        <p>Mais do que isso, valorizamos a confiança. Nosso portal oferece informações precisas e
                            completas, garantindo que todos — independentemente da idade ou nível de conhecimento —
                            possam aprender de forma acessível e confiável.</p>
                        <p>Estamos sempre à disposição para tirar dúvidas e buscamos manter uma conexão constante com
                            nossos usuários. Nosso compromisso é proporcionar a melhor experiência possível, tornando a
                            descoberta sobre o corpo humano interessante e informativa para todos.</p>

                    </details>
                </li>
            </ul>
        </section> <!--end historia-->
    </main>
    <Footer />
</template>

<style scoped>
section.banner div img {
    width: 100%;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.466);
}

section.banner div h1 {
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    color: #010A5C;
    text-shadow: 6px 5px 7px rgba(0.5, 0, 0, 0.5);
    border-radius: 30px;
    background-color: #C6E1F4;
    margin: 8vw 40vw 3vw 40vw;
    box-shadow: 5px 5px 15px rgba(0.5, 0, 0, 0.5);
    padding: 20px;
    width: 300px;
}

section.history ul details.doing {
    text-align: center;
    background-color: #C6E1F4;
    border-radius: 30px;
    margin: 5vw auto;
    color: #010A5C;
    box-shadow: 5px 12px 15px rgba(0.5, 0, 0, 0.5);
}

section.history ul details summary {
    display: flex;
    justify-content: space-between;
}

section.history ul details {
    text-align: center;
    background-color: #010A5C;
    border-radius: 30px;
    margin: 5vw auto;
    color: white;
    padding: 1vw 4vw 1vw 4vw;
    box-shadow: 5px 15px 15px rgba(0.5, 0, 0, 0.5);
}

section.history ul {
    margin: 1vw 7vw 1vw 7vw;
}

section.history ul li {
    padding: 8px 15px 8px 15px;
}

section.history ul li details summary {
    cursor: pointer;
    list-style: none;
    padding: 20px 15px 20px 15px;
    font-size: 1.5rem;
}

section.history ul li details summary h2 {
    padding: 2vw 5vw 2vw 5vw;
    font-size: 2.3rem;
}

section.history ul li details summary span {
    padding: 2vw 5vw 2vw 5vw;
}

section.history ul li details p {
    padding: 15px 45px 15px 45px;
}

section.history ul li details.doing p {
    padding: 15px 45px 15px 45px;
}

section.history ul li details hr {
    border-top: 1px #C6E1F4 solid;
}

section.history ul li details.doing hr {
    border-top: 1px #010A5C solid;
}
</style>