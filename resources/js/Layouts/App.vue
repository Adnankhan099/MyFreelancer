<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
import HeaderApp from './../Components/Landing/Header.vue'
import FooterApp from './../Components/Landing/Footer.vue'
 const props = defineProps({
    categories: {
        type: Array,
    },

 });
</script>

<template>
    <HeaderApp />

            <slot/>
      <FooterApp :categories="categories" />
</template>
