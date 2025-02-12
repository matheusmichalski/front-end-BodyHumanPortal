<script setup></script>
<template>
    <div class="user">
        <div class="baloon">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae reiciendis quae deleniti nam nulla facilis nihil iure explicabo repellat sunt natus tempora alias placeat, delectus ad debitis vitae similique.</p>
        </div>
        <div class="img">
            <img src="#" alt="Ícone do usuário">
        </div>
    </div>
</template>
<style scoped>
.user {
    display: flex;
    margin: 4.5vw 2vw 2vw 4vw;
    padding-left: 15vw;
}
.baloon {
    background-color: #A7E6EB;
    border-radius: 2vw;
    font-family: 'Urbanist';
}
p {
    margin: 4.5vw;
    line-height: 6.5vw;
    font-size: 5vw;
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