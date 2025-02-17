<script setup>
</script>
<template>
    <div class="barra">
        <div class="input">
            <input type="text" id="text" placeholder="Escreva sua dúvida aqui...">
            <button><i class="fa-solid fa-paper-plane"></i></button>
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
    }
    #text {
        background-color: #FFFFFF;
        color: #7F919B;
        border-radius: 2vw;
        border: none;
        /*height: 4vw;*/
        vertical-align: baseline;
        /*margin: 0 0 5vw 2vw;*/
        margin: 1.5vw;
        /*width: 100%;*/
        font-size: 1rem;
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
    }
    button i:hover {
        color: #A7E6EB;
    }
</style>
