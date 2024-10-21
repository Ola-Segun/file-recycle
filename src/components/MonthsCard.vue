<script setup>
    import { reactive, ref } from 'vue';
    import { defineStore } from 'pinia';
    import { defineProps } from 'vue';
    import Card from './Card.vue';

    // const monthButton = ref(['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',]);


    const monthButtonProps = reactive([
        { id: 1, name: 'January', isActive: ref(true) },
        { id: 2, name: 'Febuary', isActive: ref(false) },
        { id: 3, name: 'March', isActive: ref(false) },
        { id: 4, name: 'April', isActive: ref(false) },
        { id: 5, name: 'May', isActive: ref(false) },
        { id: 6, name: 'June', isActive: ref(false) },
        { id: 7, name: 'July', isActive: ref(false) },
        { id: 8, name: 'August', isActive: ref(false) },
        { id: 9, name: 'September', isActive: ref(false) },
        { id: 10, name: 'October', isActive: ref(false) },
        { id: 11, name: 'November', isActive: ref(false) },
        { id: 12, name: 'December', isActive: ref(false) },
    ]);
    

    let currentButton = ref(monthButtonProps[0].name);
    let currentIndex = ref(0);

    const handelActiveButton = (buttonName) => {
        monthButtonProps.forEach(btn => {
            btn.isActive = (btn.name === buttonName);
            currentButton.value = buttonName;
        });

        // Select profile
        profiles.forEach((profile, index) => {
            if(currentButton.value === profile.title){
                currentIndex.value = index;
            }
        })
    }

</script>

<template>
    <Card>
        <div class="p-6">
            <h3 class="text-2xl font-semibold mb-4">Months</h3>
            <div class="cs-scrollbar h-[300px] overflow-auto s">
                <ul>
                    <li v-for="(button) in monthButtonProps" :key="button" :id="button.name" :class="{
                            'cursor-pointer p-2 rounded flex gap-2 justify-start items-center transition-all':true,
                            'active-button': button.isActive,
                            'hover:bg-gray-100': !button.isActive,
                        }" @click="handelActiveButton(button.name)">{{ button.name }}</li>
                </ul>
            </div>
        </div>
    </Card>
</template>