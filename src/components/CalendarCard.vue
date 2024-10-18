<script setup>
    import Card from './Card.vue';
</script>

<template>
    <Card col_span="col-span-2">
        <div class="p-6 h-full grid grid-col-1-\/5-4-1">
            <h3 class="text-2xl font-semibold mb-4 flex justify-between items-center">
                <span>February</span>
                <div class="flex space-x-2">
                    <button class="default-button p-2 text-sm justify-between bg-blue-100 text-black hover:bg-blue-200">
                        <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                        <i class="pi pi-upload text-sm"></i>
                    </button>
                    <button class="default-button p-2 text-sm justify-between bg-green-100 text-black hover:bg-green-200">
                        <div class="w-2 h-2 rounded-full bg-green-500"></div>
                        <i class="pi pi-download text-sm"></i>
                    </button>
                    <button class="default-button p-2 text-sm justify-between bg-red-100 text-black hover:bg-red-200">
                        <div class="w-2 h-2 rounded-full bg-red-500"></div>
                        <i class="pi pi-trash-alt text-sm"></i>
                    </button>
                    <button class="default-button p-2 text-sm justify-between bg-yellow-100 text-black hover:bg-yellow-200">
                        <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <i class="pi pi-exclamation-triangle text-sm"></i>
                    </button>
                </div>
            </h3>
            <div class="grid grid-cols-7 gap-4 text-center content-center">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
            </div>
            <div class="grid grid-cols-7 gap-2">
                <!-- Calendar days -->
                <div class="active-date p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <div class="p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-700 h-fit">
                    1 
                    <div class="dots flex gap-1 ">
                        <div class="upload dot bg-blue-500"></div>
                        <div class="download dot bg-green-500"></div>
                        <div class="delete dot bg-red-500"></div>
                        <div class="warning dot bg-yellow-500"></div>
                    </div>
                </div>
                <!-- More days... -->
            </div>
            <div class="flex justify-end align-bottom items-center">
                <button class="p-2 default-button border-none hover:bg-gray-200 ">
                    <i class="pi pi-chevron-left"></i>
                </button>
                <button class="p-2 default-button border-none hover:bg-gray-200 ">
                    <i class="pi pi-chevron-right"></i>
                </button>
            </div>
        </div>
    </Card>
</template>