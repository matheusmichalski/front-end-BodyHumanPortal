<script setup>
import Footer from '../../geral/Footer.vue'
import Header from '../../geral/Header.vue'
import { ref } from 'vue';

const formData = ref({ //dados do form
    usuario: '',
    telefone: '',
    email: '',
    facilidadeNavegacao: 0,
    aparencia: 0,
    velocidade: 0,
    problema: '',
    descricaoProblema: '',
    adicional: ''
});

// Função para atualizar a avaliação das estrelas
function rate(field, rating) {
    formData.value[field] = rating;
}

// Função para resetar o formulário
function resetForm() {
    formData.value = {
        usuario: '',
        telefone: '',
        email: '',
        facilidadeNavegacao: 0,
        aparencia: 0,
        velocidade: 0,
        problema: '',
        descricaoProblema: '',
        adicional: ''
    };
}

// Função para enviar o formulário
function submitForm() {
    console.log('Formulário enviado:', formData.value);
}
</script>

<template>
    <Header />
    <main>
        <section>
            <h1>Feedback</h1>
            <form id="feedback">
                <div class="input-group">
                    <label for="usuario"><strong>Nome:</strong></label>
                    <input type="text" id="usuario" placeholder="Escreva o seu nome" required>
                </div>
                <div class="input-group">
                    <label for="telefone"><strong>Número de telefone:</strong></label>
                    <input type="tel" id="telefone" placeholder="(XX) XXXXX-XXXX" required>
                </div>
                <div class="input-group">
                    <label for="email"><strong>E-mail:</strong></label>
                    <input type="email" id="email" placeholder="seuemail@email.com" required>
                </div>
                <div class="avaliacoes">
                    <fieldset>
                        <p><strong>Avalie os seguintes aspectos do nosso site:</strong></p>

                        <fieldset>
                            <p><strong>Facilidade de navegação:</strong></p>
                            <p>(1 estrela = Muito difícil, 5 estrelas = Muito fácil)</p>
                            <div class="stars">
                                <label v-for="i in 5" :key="'facilidade-navegacao-' + i" class="radio-estrela"
                                    @click="rate('facilidadeNavegacao', i)">
                                    <span
                                        :class="{ 'fa-solid': formData.facilidadeNavegacao >= i, 'fa-regular': formData.facilidadeNavegacao < i }"
                                        class="fa-star fa-xl" style="color: #005db4;" :data-star="i"></span>
                                    <input type="radio" :name="'facilidade-navegacao'" :value="i"
                                        :checked="formData.facilidadeNavegacao === i">
                                </label>
                            </div>
                        </fieldset>

                        <fieldset>
                            <p><strong>Aparência:</strong></p>
                            <p>(1 estrela = Muito insatisfeito, 5 estrelas = Muito satisfeito)</p>
                            <div class="stars">
                                <label v-for="i in 5" :key="'aparencia-' + i" class="radio-estrela"
                                    @click="rate('aparencia', i)">
                                    <span
                                        :class="{ 'fa-solid': formData.aparencia >= i, 'fa-regular': formData.aparencia < i }"
                                        class="fa-star fa-xl" style="color: #005db4;" :data-star="i"></span>
                                    <input type="radio" :name="'aparencia'" :value="i"
                                        :checked="formData.aparencia === i">
                                </label>
                            </div>
                        </fieldset>

                        <fieldset>
                            <p><strong>Velocidade de carregamento:</strong></p>
                            <p>(1 estrela = Muito ruim, 5 estrelas = Excelente)</p>
                            <div class="stars">
                                <label v-for="i in 5" :key="'velocidade-' + i" class="radio-estrela"
                                    @click="rate('velocidade', i)">
                                    <span
                                        :class="{ 'fa-solid': formData.velocidade >= i, 'fa-regular': formData.velocidade < i }"
                                        class="fa-star fa-xl" style="color: #005db4;" :data-star="i"></span>
                                    <input type="radio" :name="'velocidade'" :value="i"
                                        :checked="formData.velocidade === i">
                                </label>
                            </div>
                        </fieldset>
                    </fieldset>
                </div>
                <div class="input-group">
                    <p><strong>Você encontrou algum erro ou problema técnico no site?</strong></p>
                    <label><input type="radio" name="encontrou-problema" value="sim" id="problema-sim" required>
                        Sim</label>
                    <label><input type="radio" name="encontrou-problema" value="nao" id="problema-nao" required>
                        Não</label>
                    <p>
                        <label for="descricao-problema">Se sim, por favor, descreva o erro ou problema
                            encontrado:</label>
                        <input type="text" id="descricao-problema"
                            placeholder="Descreva aqui o erro ou problema encontrado" maxlength="1000">
                    </p>
                </div>

                <div class="input-group">
                    <label for="adicional"><strong>Comentário adicional:</strong></label>
                    <input type="text" name="adicional" id="adicional" placeholder="Escreva aqui o seu comentário"
                        maxlength="1000">
                </div>
                <div class="input-group">
                    <input type="reset" name="limpar" id="limpar" value="LIMPAR" @click="resetForm">
                    <input type="submit" name="enviar" id="enviar" value="ENVIAR" @click="submitForm">
                </div>
            </form>
        </section>
    </main>
    <Footer />
</template>



<style scoped>
/* Define a aparência geral da página */
main {
    font-family: Arial, sans-serif;
    /* Define a fonte padrão para o corpo do texto */
    background: linear-gradient(rgba(217, 231, 252, 0.95), rgba(217, 231, 252, 0.95)), url(../../../public/img/feedback/estampaportalch.png) repeat;
    /*Define a imagem de fundo*/
    background-size: 30%;
    display: flex;
    /* Utiliza flexbox para layout */
    justify-content: center;
    /* Centraliza horizontalmente o conteúdo */
    align-items: center;
    /* Centraliza verticalmente o conteúdo */
    height: auto;
    /* Permite que a altura do body se ajuste ao conteúdo */
    padding: 7vw 20px 20px 20px;
    /* Adiciona um padding ao redor do conteúdo */
    text-align: center;
}

/* Define o estilo do título */
h1 {
    margin-bottom: 20px;
    /* Adiciona um espaço abaixo do título */
    font-size: 30px;
    /* Define o tamanho da fonte do título */
    color: #091f47;
    /*Define a cor do título*/
}

/* Define o estilo dos parágrafos */
p {
    margin: 0 0 1vw 0;
    /* Adiciona um espaço abaixo dos parágrafos */
}

span {
    cursor: pointer;
}

input[type="radio"] {
    cursor: pointer;
}

/*=========================
    Estilização do Formulário
=========================*/

/* Define o estilo dos grupos de inputs */
.input-group {
    margin-bottom: 10px;
    /* Espaço entre os grupos de inputs */
    padding: 20px;
    /* Adiciona padding ao redor do conteúdo do grupo */
    border: 1px solid #e0e0e0;
    /* Define uma borda leve ao redor do grupo */
    border-radius: 8px;
    /* Adiciona bordas arredondadas */
    background-color: #fafafa;
    /* Define a cor de fundo dos grupos de inputs */

}

/* Define o estilo das labels dentro dos grupos de inputs */
.input-group label {
    display: inline-block;
    /* Exibe a label como um bloco inline */
    margin-bottom: 10px;
    /* Adiciona um espaço abaixo das labels */
    font-weight: normal;
    /* Define o peso da fonte como normal */
    margin-right: 10px;
    /* Adiciona um espaço à direita das labels */
}

/* Define o estilo dos campos de entrada de texto, email e telefone */
.input-group input[type="text"],
.input-group input[type="email"],
.input-group input[type="tel"] {
    width: calc(100% - 22px);
    /* Ajusta a largura para compensar o padding e a borda */
    padding: 10px;
    /* Adiciona padding dentro dos campos de entrada */
    border: 1px solid #ccc;
    /* Define uma borda clara para os campos de entrada */
    border-radius: 5px;
    /* Adiciona bordas arredondadas */
    margin-bottom: 10px;
    /* Adiciona um espaço abaixo dos campos de entrada */
}

/* Define o estilo da seção de avaliações */
.avaliacoes {
    margin-bottom: 10px;
    /* Adiciona um espaço abaixo da seção de avaliações */
}

/* Define o estilo dos fieldsets dentro da seção de avaliações */
.avaliacoes fieldset {
    border: none;
    /* Remove a borda padrão do fieldset */
    padding: 15px;
    /* Adiciona padding dentro do fieldset */
    border-radius: 8px;
    /* Adiciona bordas arredondadas */
    background-color: #fafafa;
    /* Define a cor de fundo do fieldset */
}

.radio-estrela input {
    display: none;
}

.input-group input[type="reset"],
.input-group input[type="submit"] {
    background-color: #112477;
    /* Define a cor de fundo da página */
    color: rgb(255, 255, 255);
    /*Define uma cor clara ao texto dos botões*/
    font-weight: bold;
    padding: 3px 8px 3px 8px;
    /* Adiciona padding dentro dos botões */
    border: 1px solid #ccc;
    /* Define uma borda clara aos botões */
    border-radius: 5px;
    /* Adiciona bordas arredondadas */
    box-shadow: 0 0 10px rgba(177, 75, 75, 0.1);
    /* Adiciona uma sombra sutil em torno dos botões */
    margin: 0 5px 0 5px;
    cursor: pointer;
    font-size: 1rem;
}

span {
    cursor: pointer;
}

.stars {
    display: flex;
    gap: 5px;
    justify-content: center;
}
</style>
