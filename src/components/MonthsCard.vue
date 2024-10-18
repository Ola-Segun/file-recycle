<script setup>
    import { ref } from 'vue';
    import Card from './Card.vue';

    const monthButton = ref(['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',]);

    const handelActiveButton = (e) => {
        if(e.target.tagName === 'LI'){
            let index = 0;
            while(index < 12){
                e.target.parentElement.children[index].classList.remove('active-button');
                e.target.parentElement.children[index].classList.add('hover:bg-gray-100');
                index++;
            }
            e.target.classList.add('active-button');
            e.target.classList.remove('hover:bg-gray-100');
            console.log(monthButton.length);
        }

    }
</script>

<template>
    <Card>
        <div class="p-6">
            <h3 class="text-2xl font-semibold mb-4">Months</h3>
            <div class="cs-scrollbar h-[300px] overflow-auto s">
                <ul>
                    <li v-for="(button, index) in monthButton" :key="button" :id="index" class="cursor-pointer p-2 rounded flex gap-2 justify-start items-center hover:bg-gray-100 transition-all" @click="handelActiveButton">{{ button }}</li>
                </ul>
            </div>
        </div>
    </Card>
</template>