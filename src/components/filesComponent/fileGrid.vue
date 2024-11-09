<script setup>
import { ref, reactive } from 'vue';

const popups = reactive([
  { name: "none", condition: true },
  { name: "fileDetails", condition: false },
  { name: "fileDelete", condition: false },
]);

let currentPopup = ref("");
let currentPopupFileDetails = ref({});

const emit = defineEmits(["sendData"]);
const generateData = () => {
  const data1 = currentPopup;
  const data2 = currentPopupFileDetails;
  emit("sendData", data1, data2);
};

const handelPopups = (name, index) => {
  // popups.forEach(popup => {
  //     popup.condition = popup.name === name;
  //     console.log(popup.name, popup.condition ,name)
  // });

  currentPopup = name;
  currentPopupFileDetails.value = fileData[index];
  // console.log(currentPopupFileDetails.value);
  generateData();
};

</script>

<template>
    <!-- Grid view (hidden by default) -->
      <!-- <div class="p-4 bg-white border rounded-lg shadow w-[17.5rem] hover:bg-gray-100  cursor-pointer">
        <div class="flex justify-between items-start">
          <input
            type="checkbox"
            class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <button
            class="p-1 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            @click="handelPopups('fileDetails', index)"
            >
            <i class="pi pi-info-circle"></i>
          </button>
        </div>
        <h3 class="mt-2 font-semibold truncate">
          {{ name }}
        </h3>
        <p class="text-sm text-gray-500">{{ type }}</p>
        <p class="text-sm text-gray-500">{{ size }} MB</p>
        <p class="text-sm text-gray-500">{{ date }}</p>

        <div class="mt-2 flex justify-end space-x-2">
          <button
            class="p-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
          >
            <i class="pi pi-file-edit"></i>
          </button>
          <button
            class="p-1 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200"
          >
            <i class="pi pi-download"></i>
          </button>
        </div>
      </div> -->
</template>
