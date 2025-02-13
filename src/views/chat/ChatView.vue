<script setup>
// DESKTOP
    import chatbot from '@/components/desktop/chat/chatbot.vue';
    import user from '@/components/desktop/chat/user.vue';
    import inputComponent from '@/components/desktop/chat/input.vue';

// MOBILE
    import chatbotMobile from '@/components/mobile/chat/chatbot.vue';
    import userMobile from '@/components/mobile/chat/user.vue';
    import inputMobile from '@/components/mobile/chat/input.vue';
</script>
<template>
    <section class="is-desktop">
        <chatbot />
        <user />
        <inputComponent />
    </section>
    <section class="is-mobile">
        <chatbotMobile />
        <userMobile />
        <inputMobile />
    </section>
</template>
