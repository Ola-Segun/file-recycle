<script setup>
    defineProps({
        more:{
            type: String,
            default: '',
            icon:'',
        }
    })
</script>

<template>
    <i :class="`pi ${icon} ${more}`" style="display: flex;"></i>
</template>