<script setup>
    let mensagem = ref('');
</script>
<template>
    <div class="barra">
        <div class="input">
            <input type="text" id="text" placeholder="Escreva sua dúvida aqui...">
            <button @click=""><i class="fa-solid fa-paper-plane"></i></button>
            <!--<input type="submit" id="enviar" placeholder="">-->
        </div>  
    </div>
</template>
<style scoped>
    .barra {
        background-color: #A7E6EB;
        display: flex;
        margin: 4.5vw 0 1vw 0;
        height: 12vw;
        border-radius: 3vw;
        align-items: center;
        position: absolute;
    }
    .input {
        background-color: #FFFFFF;
        color: #7F919B;
        border-radius: 2vw;
        /*border: none;*/
        height: 8.6vw;
        vertical-align: baseline;
        margin: 2.2vw 1.9vw 2.2vw 1.9vw;
        width: 100%;
        display: flex;
        justify-content: center;
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