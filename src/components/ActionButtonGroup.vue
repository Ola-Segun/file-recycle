<script setup>
    import ActionButton from './ActionButton.vue';
</script>

<template>
        <div class="col-span-2 rounded-lg  text-white w-full h-full flex justify-between items-end">

    <ActionButton bg="bg-one">
        <img src="/src/assets/svg/videos.svg" alt="">
        <p>My Videos</p>
    </ActionButton>

    <ActionButton bg="bg-two">
        <img src="/src/assets/svg/Audios.svg" alt="">
        <p>My Audios</p>
    </ActionButton>
    
    <ActionButton bg="bg-four">
        <img src="/src/assets/svg/images.svg" alt="">
        <p>My Images</p>
    </ActionButton>

    <ActionButton bg="bg-three">
        <img src="/src/assets/svg/docs.svg" alt="">
        <p>My Docs</p>
    </ActionButton>

    <!-- <ActionButton bg="bg-four">
        <img src="/src/assets/svg/folders.svg" alt="">
        <p>My Folders</p>
    </ActionButton> -->
        </div>
</template>