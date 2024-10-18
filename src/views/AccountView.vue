<script setup>
import { reactive, ref } from 'vue';

import Card from '@/components/Card.vue';

const accountButtonProps = reactive([
    { id: 1, name: 'Personal Info', icon: 'pi pi-user', isActive: ref(true) },
    { id: 2, name: 'Payment Details', icon: 'pi pi-receipt', isActive: ref(false) },
    { id: 3, name: 'Security', icon: 'pi pi-lock', isActive: ref(false) },
    { id: 4, name: 'Preference', icon: 'pi pi-sliders-h', isActive: ref(false) },
    { id: 5, name: 'Notification', icon: 'pi pi-bell', isActive: ref(false) },
]);

// const profiles = reactive([
//     { title_id: 1, title: 'Profile Info', profile_content: { full_name: 'John Doe', email: 'johndoe@gmail.com', gender: 'Male', date_of_birth: 'August 02, 1987', phone_number: '+2348 045 432 3321' } },
//     // { title_id: 1, title: 'Payment Details', profile_content: { full_name: 'John Doe', }},
//     { title_id: 2, title: 'Security', profile_content: { password: 'John Doe', last_changed: 'January 02, 2024' } },
//     { title_id: 3, title: 'Preference', profile_content: { theme: 'Light mode', text_size: 'Small', font_style: "Normal", date_format: 'MM DD, YYYY' } },
//     { title_id: 4, title: 'Notification', profile_content: { full_name: 'John Doe', } },
// ]);

const profiles = reactive([
  { 
    title: 'Profile Info', 
    profile_content: [
      { id: 1, key: 'Full Name', value: 'John Doe' },
      { id: 2, key: 'Email', value: 'johndoe@gmail.com' },
      { id: 3, key: 'Gender', value: 'Male' },
      { id: 4, key: 'Date Of Birth', value: 'August 02, 1987' },
      { id: 5, key: 'Phone Number', value: '+2348 045 432 3321' }
    ]
  },
  { 
    title: 'Security', 
    profile_content: [
      { id: 1, key: 'Password', value: 'John Doe' },
      { id: 2, key: 'Last Changed', value: 'January 02, 2024' }
    ]
  },
  { 
    title: 'Preference', 
    profile_content: [
      { id: 1, key: 'Theme', value: 'Light mode' },
      { id: 2, key: 'Text Size', value: 'Small' },
      { id: 3, key: 'Font Style', value: 'Normal' },
      { id: 4, key: 'Date Format', value: 'MM DD, YYYY' }
    ]
  }
]);

let currentButton = ref(accountButtonProps[0].name);

const handelActiveButton = (buttonName) => {
    accountButtonProps.forEach(btn => {
        btn.isActive = (btn.name === buttonName);
        currentButton.value = buttonName;
    });
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
                            'cursor-pointer p-2 rounded flex gap-2 justify-start items-center transition-all': true,
                            'active-button': button.isActive,
                            'hover:bg-gray-100': !button.isActive
                        }" @click="handelActiveButton(button.name)"><i
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
                    <div class="w-24 h-24 rounded-full border-2">
                        <img :src="`profile.png`" alt="" class="rounded-full">
                        <span><i
                                class="pi pi-file-edit absolute ml-24 p-2 rounded-full hover:bg-gray-400 cursor-pointer"></i></span>
                    </div>
                    <div class="grid gap-2">
                        <div v-for="(item, index) in profiles[0].profile_content" class=" flex justify-between border-b border-gray-200 h-fit pb-4 items-center">
                            <div class="profile-item">
                                <p class="profile-title font-bold text-gray-700">
                                    {{ item.key }}
                                </p>
                                <p class="profile-content text-gray-900">
                                    {{ item.value }}
                                </p>
                            </div>
                            <div class="edit-button">
                                <a href="" class="" :id="item.id">Edit</a>
                            </div>
                        </div>
                        <!-- <div class=" flex justify-between border-b border-gray-200 h-fit pb-4 items-center">
                            <div class="profile-item">
                                <p class="profile-title font-bold text-gray-700">
                                    Full Name
                                </p>
                                <p class="profile-content text-gray-900">
                                    John Doe
                                </p>
                            </div>
                            <div class="edit-button">
                                <a href="" class="">Edit</a>
                            </div>
                        </div>
                        <div class=" flex justify-between border-b border-gray-200 h-fit pb-4 items-center">
                            <div class="profile-item">
                                <p class="profile-title font-bold text-gray-700">
                                    Full Name
                                </p>
                                <p class="profile-content text-gray-900">
                                    John Doe
                                </p>
                            </div>
                            <div class="edit-button">
                                <a href="" class="">Edit</a>
                            </div>
                        </div>
                        <div class=" flex justify-between border-b border-gray-200 h-fit pb-4 items-center">
                            <div class="profile-item">
                                <p class="profile-title font-bold text-gray-700">
                                    Full Name
                                </p>
                                <p class="profile-content text-gray-900">
                                    John Doe
                                </p>
                            </div>
                            <div class="edit-button">
                                <a href="" class="">Edit</a>
                            </div>
                        </div>
                        <div class=" flex justify-between border-b border-gray-200 h-fit pb-4 items-center">
                            <div class="profile-item">
                                <p class="profile-title font-bold text-gray-700">
                                    Full Name
                                </p>
                                <p class="profile-content text-gray-900">
                                    John Doe
                                </p>
                            </div>
                            <div class="edit-button">
                                <a href="" class="">Edit</a>
                            </div>
                        </div>
                        <div class=" flex justify-between border-b border-gray-200 h-fit pb-4 items-center">
                            <div class="profile-item">
                                <p class="profile-title font-bold text-gray-700">
                                    Full Name
                                </p>
                                <p class="profile-content text-gray-900">
                                    John Doe
                                </p>
                            </div>
                            <div class="edit-button">
                                <a href="" class="">Edit</a>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </Card>

    </div>
</template>