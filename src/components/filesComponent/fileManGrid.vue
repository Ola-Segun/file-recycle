<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  files: Array,
  resetSelection: {
    type: Boolean,
    default: false
  }
});

let currentPopup = ref("");
let currentPopupFileDetails = ref([]);
let editingId = ref(null);

// Watch for resetSelection changes
watch(() => props.resetSelection, (newValue) => {
  if (newValue) {
    currentPopupFileDetails.value = [];
    currentPopup.value = "";
    editingId.value = null;
  }
});

const emit = defineEmits(["sendToParent"]);

const sendDataToParent = () => {
  const data1 = currentPopup;
  const data2 = currentPopupFileDetails;
  emit("sendToParent", data1, data2);
};

const handelFileDetails = (name, index, file) => {
  if (name === "fileDetails") {
    currentPopup.value = name;
    currentPopupFileDetails.value = [props.files[index]];
  } else if (name === "fileDelete") {
    currentPopup.value = name;
    file.isSelected = !file.isSelected;
    
    const fileIndex = currentPopupFileDetails.value.findIndex(f => f.id === file.id);
    if (fileIndex === -1 && file.isSelected) {
      currentPopupFileDetails.value.push(file);
    } else if (!file.isSelected) {
      currentPopupFileDetails.value.splice(fileIndex, 1);
    }
  }
  sendDataToParent();
};

const startEditing = (file) => {
  editingId.value = file.id;
};

const cancelEdit = () => {
  editingId.value = null;
};
</script>

<template>
  <div
    v-for="(file, index) in props.files"
    :key="file.id"
    class="p-4 bg-white border rounded-lg shadow w-[17.5rem] hover:bg-gray-100 cursor-pointer"
  >
    <div class="flex justify-between items-start">
      <input
        type="checkbox"
        class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        :checked="file.isSelected"
        @change="handelFileDetails('fileDelete', index, file)"
      />
      <button
        class="p-1 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
        @click="handelFileDetails('fileDetails', index)"
      >
        <i class="pi pi-info-circle"></i>
      </button>
    </div>

    <form v-if="editingId === file.id" @submit.prevent="cancelEdit" class="mt-2">
      <div class="profile-edit flex justify-between items-center">
        <input 
          type="text" 
          v-model="file.name"
          class="border-gray-400 bg-gray-100 rounded w-full"
        >
        <button 
          type="submit" 
          class="hover:text-primary hover:font-semibold hover:underline ml-2"
        >
          Update
        </button>
      </div>
    </form>

    <div v-else>
      <h3 class="mt-2 font-semibold truncate">
        {{ file.name }}
      </h3>
      <p class="text-sm text-gray-500">{{ file.type }}</p>
      <p class="text-sm text-gray-500">{{ file.size }}</p>
      <p class="text-sm text-gray-500">{{ file.date }}</p>

      <div class="mt-2 flex justify-end space-x-2">
        <button
          class="p-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
          @click="startEditing(file)"
        >
          <i class="pi pi-file-edit"></i>
        </button>
        <button
          class="p-1 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200"
        >
          <i class="pi pi-download"></i>
        </button>
      </div>
    </div>
  </div>
</template>
