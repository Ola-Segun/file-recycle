<script setup>
    import Card from './Card.vue';
</script>

<template>
    <Card>
        <div class="p-6">
            <h3 class="text-2xl font-semibold mb-4">Statistics</h3>
            <div class="w-48 h-48 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <i class="-chart-pie text-4xl text-gray-400 dark:text-gray-500"></i>
            </div>
            <div>
                <div class="flex items-center mt-2">
                    <div class="w-3 h-3 rounded-full mr-2 bg-blue-500"></div>
                    <span>Documents: 35%</span>
                </div>
                <div class="flex items-center mt-2">
                    <div class="w-3 h-3 rounded-full mr-2 bg-purple-500"></div>
                    <span>Video: 20%</span>
                </div>
                <div class="flex items-center mt-2">
                    <div class="w-3 h-3 rounded-full mr-2 bg-pink-500"></div>
                    <span>Deleted Today: 15%</span>
                </div>
                <div class="flex items-center mt-2">
                    <div class="w-3 h-3 rounded-full mr-2 bg-green-500"></div>
                    <span>Audio: 30%</span>
                </div>
            </div>
        </div>
    </Card>
</template>