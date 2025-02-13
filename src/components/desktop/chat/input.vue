<script setup>
import { ref, defineEmits } from 'vue';
    
    let mensagem = ref('');
    const emit = defineEmits(['novaMensagem']);

    const enviarMensagem = () => {
        emit('novaMensagem', mensagem.value)  
        mensagem.value = '';
    };
</script>
<template>
    <div class="barra">
        <div class="input">
            <input 
            type="text" 
            id="text" 
            v-model="mensagem" 
            v-on:input="event => mensagem = event.target.value"
            @keyup.enter="enviarMensagem" 
            placeholder="Escreva sua dúvida aqui...">
            <button @click="enviarMensagem"><i class="fa-solid fa-paper-plane"></i></button>
            <!--<input type="submit" id="enviar" placeholder="">-->
        </div>  
    </div>
</template>
<style scoped>
    .barra {
        background-color: #A7E6EB;
        display: flex;
        margin: 12vw 4vw 2vw 4vw;
        height: 6vw;
        border-radius: 1vw;
        align-items: center;
        /*position: fixed;
        z-index: 10;*/
    }
    .input {
        background-color: #FFFFFF;
        color: #7F919B;
        border-radius: 2vw;
        /*border: none;*/
        height: 4vw;
        vertical-align: baseline;
        margin: 2.2vw 1.2vw 2.2vw 1.2vw;
        width: 100%;
        display: flex;
        align-items: center;
    }
    #text {
        background-color: #FFFFFF;
        color: #7F919B;
        border-radius: 2vw;
        border: none;
        height: 90%;
        vertical-align: baseline;
        /*margin: 0 0 5vw 2vw;*/
        margin: 1.5vw;
        /*width: 100%;*/
        font-size: 1.1rem;
        flex-grow: 1;
        
    }
    #text:focus {
        outline: none;
        color: black;
    }
    #enviar {
        border-radius: 10vw;
    }
    button {
        border: none;
        margin-left: auto;
        margin-right: 3vw;
        justify-content: space-between;
        background-color: #FFFFFF;
        font-size: 1.25rem;
    }
    button i {
        color: #103F65;
        cursor: pointer;
    }
    button i:hover {
        color: #A7E6EB;
    }
</style>