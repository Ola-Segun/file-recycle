<script setup>
    import Card from '@/components/Card.vue';
    import ActionButtonGroup from './ActionButtonGroup.vue';
</script>

<template>
    <!-- <div class="grid gap-6 h-5/6 grid-row-4-1"> -->
        <!-- Upload card -->
        <Card padding="w-full h-full grid" col_span="col-span-2 p-14">
            <div class="grid gap-6 justify-center text-gray-300 content-center border-2 border-gray-400 border-dashed rounded-lg h-full">
                <i class="pi pi-upload text-9xl "></i>
                <p class="text-3xl">Drop File</p> 
            </div>
        </Card>
    <!-- </div> -->
</template>