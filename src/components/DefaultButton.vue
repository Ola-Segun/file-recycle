<script setup>
    import { RouterLink } from 'vue-router';
    import { defineProps } from 'vue';

    defineProps({
        attrs: {
            type: String,
            default: 'rounded-md h-10 px-8 hover:bg-gray-100 flex justify-center items-center min-w-10'
        }
    })
</script>

<template>
    <RouterLink :to="`/dist/home.html`" class="default-button nav-button text-sm font-medium">
        <slot></slot>
    </RouterLink>
</template>