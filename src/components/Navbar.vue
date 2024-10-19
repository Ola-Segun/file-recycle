<script setup>
    import { defineProps } from 'vue'; 
    import { RouterLink, useRoute } from 'vue-router'; 

    import profileImage from '@/assets/img/profile.png'

    const isActiveLink = (routePath) => {
        const route = useRoute();
        return route.path === routePath;
    }
</script>

<template>
<!-- Header -->
<header class="flex justify-between items-center mb-6 bg-white border p-4 rounded-lg shadow-sm">
    <div class="flex items-end">
        <h1 class="text-2xl font-bold mr-4 text-primary">FileEase</h1>
        <nav class="flex items-center gap-2">
            <RouterLink to="/" :class="[isActiveLink('/') ? 'active-button' : 'default-button', 'nav-button text-sm font-medium']">Home</RouterLink>
            <RouterLink to="/manage/files" :class="[isActiveLink('/manage/files') ? 'active-button' : 'default-button', 'nav-button text-sm font-medium']">File Management</RouterLink>
            <RouterLink to="/manage/account" :class="[isActiveLink('/manage/account') ? 'active-button' : 'default-button', 'nav-button text-sm font-medium']">Account</RouterLink> </nav>
    </div>
    <div class="flex items-center space-x-4 w-fit p-1">
        <button class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-white px-4 py-2 hover:bg-primary/90">
            <i class="pi pi-upload mr-2"></i>
            <span>Upload Files</span>
        </button>
        <button class="default-button bg-gray-200  hover:bg-gray-300">
            <i class="pi pi-bell"></i>
        </button>
        <div class="relative rounded-full">
            <img :src="profileImage" alt="User" class="w-10 h-10 rounded-full">
        </div>
        <!-- <button id="darkModeToggle" class="default-button p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
            <i class="pi pi-moon dark:pi pi-sun"></i>
        </button> -->
    </div>
</header>
</template>