<script setup></script>
<template>
    <div class="chatbot">
        <div class="img">
            <img src="/public/chat/robot.png" alt="robot">
        </div>
        <div class="baloon">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum consequuntur non facere exercitationem vitae, voluptatem nam eius iste a enim rem velit numquam odio reiciendis atque nobis voluptas. Temporibus, optio?</p>
        </div>
    </div>
</template>
<style scoped>
.chatbot {
    display: flex;
    margin: 0 4vw 2vw 2vw;
    padding-right: 15vw;
}
.baloon {
    background-color: #A7E6EB;
    border-radius: 2vw;
    font-family: "Urbanist";
}
p {
    margin: 4.5vw;
    line-height: 6.5vw;
    font-size: 5vw;

}
.img {
    background-color: #A7E6EB;
    margin-right: 2vw;
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