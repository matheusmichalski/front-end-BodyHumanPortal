<script setup>
// DESKTOP
    import chatbot from '@/components/desktop/chat/chatbot.vue';
    import user from '@/components/desktop/chat/user.vue';
    import inputComponent from '@/components/desktop/chat/input.vue';

// MOBILE
    import chatbot from '@/components/mobile/chat/chatbot.vue';
</script>
<template>
    <section class="is-desktop">
        <chatbot />
        <user />
        <inputComponent />
    </section>
    <section class="is-mobile">
        <chatbot />
    </section>
</template>