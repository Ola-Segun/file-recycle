<script setup>
import { reactive, ref, defineProps } from "vue";

import CalendarCard from './CalendarCard.vue';
import Card from './Card.vue';


const props = defineProps(['currentMonth'])
</script>

<template>
    <Card>
        <div class="p-6 grid">
            <div class=" flex mb-4 gap-2">
                <h3 class="text-2xl font-semibold">Statistics</h3>
                <p class="font-semibold self-center text-lg"> for {{ currentMonth }}</p>
            </div>
            <div class="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center justify-self-center mb-4">
                <i class="pi pi-chart-pie text-4xl text-gray-400 "></i>
            </div>
            <div class="flex flex-wrap gap-3">
                <div class="flex items-center mt-2">
                    <div class="w-3 h-3 rounded-full mr-2 bg-blue-500"></div>
                    <span>Documents: 35%</span>
                </div>
                <div class="flex items-center mt-2">
                    <div class="w-3 h-3 rounded-full mr-2 bg-purple-500"></div>
                    <span>Video: 20% </span>
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