<script setup>
    import { defineProps } from 'vue';

    defineProps({
        bg: {
            type: String,
            default: 'bg-white'
        },
        padding: {
            type: String,
            default: 'p-4'
        },
        col_span:{
            type: String,
            default: 'col-span-1'
        },
        margin:{
            type:String,
            default: ''
        }
    })
</script>

<template>
    <div :class="`${bg, padding, margin} ${col_span} bg-white border rounded-lg shadow-sm `">
        <slot></slot>
    </div>
</template>