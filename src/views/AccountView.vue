<script setup>
import { reactive, ref } from 'vue';

import Card from '@/components/Card.vue';
import profileImage from '@/assets/img/profile.png'

const accountButtonProps = reactive([
    { id: 1, name: 'Personal Info', icon: 'pi pi-user', isActive: ref(true) },
    { id: 2, name: 'Payment Details', icon: 'pi pi-receipt', isActive: ref(false) },
    { id: 3, name: 'Security', icon: 'pi pi-lock', isActive: ref(false) },
    { id: 4, name: 'Preference', icon: 'pi pi-sliders-h', isActive: ref(false) },
    { id: 5, name: 'Notification', icon: 'pi pi-bell', isActive: ref(false) },
]);

const profiles = reactive([
  { 
    title: 'Personal Info', 
    profile_content: [
      { id: 1, key: 'Full Name', value: 'John Doe', isEdit: false },
      { id: 2, key: 'Email', value: 'johndoe@gmail.com', isEdit: false },
      { id: 3, key: 'Gender', value: 'Male', isEdit: false },
      { id: 4, key: 'Date Of Birth', value: 'August 02, 1987', isEdit: false },
      { id: 5, key: 'Phone Number', value: '+2348 045 432 3321', isEdit: false }
    ]
  },
  { 
    title: 'Security', 
    profile_content: [
      { id: 1, key: 'Password', value: 'John Doe', isEdit: false },
      { id: 2, key: 'Last Changed', value: 'January 02, 2024', isEdit: false }
    ]
  },
  { 
    title: 'Preference', 
    profile_content: [
      { id: 1, key: 'Theme', value: 'Light mode', isEdit: false },
      { id: 2, key: 'Text Size', value: 'Small', isEdit: false },
      { id: 3, key: 'Font Style', value: 'Normal', isEdit: false },
      { id: 4, key: 'Date Format', value: 'MM DD, YYYY', isEdit: false }
    ]
  }
]);

let currentButton = ref(accountButtonProps[0].name);
let currentIndex = ref(0);

const handelActiveButton = (buttonName) => {
    accountButtonProps.forEach(btn => {
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

const handelSwitch = (id) => {
    profiles[currentIndex.value].profile_content.forEach(content => {
        content.isEdit = (content.id === id);
    });
}

const handelEdit =  (id) => {
    console.log(id);
}
</script>

<template>
    <div class="grid md:grid-cols-4 gap-4 h-5/6">
        <!-- Profile title Card -->
        <Card>
            <div class="p-6">
                <h3 class="text-2xl font-semibold mb-4">Account</h3>
                <div class="h-full overflow-auto">
                    <ul id="button-list">
                        <li v-for="(button) in accountButtonProps" :key="button" :id="button.name" :class="{
                            'cursor-pointer p-2 rounded flex gap-2 justify-start items-center transition-all':true,
                            'active-button': button.isActive,
                            'hover:bg-gray-100': !button.isActive,
                        }" @click="handelActiveButton(button.name)">
                        <i
                                :class="[button.icon, 'text-black w-8 h-8 items-center justify-center rounded-md bg-gray-200']"
                                style="display: flex;"></i>
                            {{ button.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </Card>

        <!-- Profile details Card -->
        <Card col_span="col-span-3">
            <div class="p-6 h-full grid grid-row-1-5">
                <h3 class="adjust-sm text-2xl font-semibold mb-4 flex justify-between items-baseline h-fit">
                    <span>{{ currentButton }}</span>
                </h3>
                <div class="adjust-sm grid gap-4 grid-row-1-5 h-full">
                    <!-- Profile Items -->
                    <div class="w-24 h-24 rounded-full border-2 flex">
                        <img :src="profileImage" alt="" class="rounded-full">
                        <span>
                            <i
                                class="pi pi-file-edit absolute mt-16 p-2 rounded-full hover:bg-gray-200 cursor-pointer"></i>
                        </span>
                    </div>
                    <!-- Profile Details -->
                    <div class="grid gap-2 h-fit">
                        <div v-for="(item, index) in profiles[currentIndex].profile_content" class="  border-b border-gray-200 h-fit pb-4">
                            <form @submit.prevent="handelEdit(index)" class="" :id="item.id">
                                <p class="profile-title font-bold text-gray-700">
                                    {{ item.key }}
                                </p>
                                <div v-if="item.isEdit" class="profile-edit flex justify-between items-center">
                                    <input type="text" :name="item.key" v-model="item.value" class="border-gray-400 bg-gray-100">
                                    <button type="submit " class="hover:text-primary hover:font-semibold hover:underline" @click="handelSwitch">Update</button>
                                </div>
                                <div v-else class="profile-edit flex justify-between items-center">
                                    <p class="profile-detail text-gray-900">
                                        {{ item.value }}
                                    </p>
                                    <div class="edit-button transition-all hover:text-primary hover:font-semibold cursor-pointer hover:underline" :id="item.id" @click="handelSwitch(item.id)">Edit</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Card>

    </div>
</template>