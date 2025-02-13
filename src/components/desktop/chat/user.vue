<script setup>
    import { ref } from 'vue';
    import inputComponent from './input.vue';

    let mensagens = ref([]);
    const adicionarMensagem = (novaMensagem) => {
        mensagens.value.push(novaMensagem);
    };
</script>
<template>
    <div class="user">
        <div 
        class="baloon"
        v-for="(mensagem, index) in mensagens"
        :key="index"
        >
            <p>{{ mensagem }}</p>
        </div>
        <div class="img">
            <img src="#" alt="Ícone do usuário">
        </div>
        <!--<inputComponent @novaMensagem="adicionarMensagem"/>-->
    </div>
</template>
<style scoped>
.user {
    display: flex;
    margin: 0 4vw 2vw 4vw;
    padding-left: 40vw;
}
.baloon {
    background-color: #A7E6EB;
    border-radius: 1vw;
    font-family: 'Urbanist';
}
p {
    margin: 1.3vw;
    line-height: 1.55vw;
}
.img {
    background-color: #A7E6EB;
    margin-left: 2vw;
    border-radius: 1vw;
    height: 5vw;
    width: 7vw;
    display: flex;
    align-items: center;
    transform: scale(0.8);
}
img {
    height: 4vw;
    width: 4vw;
    padding: 0.5vw;
}
</style>