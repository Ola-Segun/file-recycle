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
  <!-- List / Table view -->
  <table class="w-full" id="list-table">
    <thead>
      <tr class="border-b border-gray-400 dark:border-gray-700 text-gray-500">
        <th class="p-2 text-left"></th>
        <th class="p-2 text-left">Name</th>
        <th class="p-2 text-left">
          Date
          <button class="ml-2">
            <i class="pi pi-sort"></i>
          </button>
        </th>
        <th class="p-2 text-left">Type</th>
        <th class="p-2 text-left">
          Size
          <button class="ml-2">
            <i class="pi pi-sort"></i>
          </button>
        </th>
        <th class="p-2 text-right">Actions</th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(file, index) in props.files"
        :key="file.id"
        class="border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100"
      >
        <td class="p-2">
          <input
            type="checkbox"
            class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            :checked="file.isSelected"
            @change="handelFileDetails('fileDelete', index, file)"
          />
        </td>
        
        <!-- Edit mode -->
        <td v-if="editingId === file.id" class="p-2" colspan="4">
          <form @submit.prevent="cancelEdit" class="flex justify-between w-full items-center">
            <input 
              type="text" 
              v-model="file.name"
              class="border-gray-400 bg-gray-200 rounded flex-grow mr-[60%]"
            >
            <button 
              type="submit" 
              class="hover:text-primary hover:font-semibold hover:underline"
            >
              Update
            </button>
          </form>
        </td>
        
        <!-- Display mode -->
        <template v-else>
          <td class="p-2">{{ file.name }}</td>
          <td class="p-2">{{ file.date }}</td>
          <td class="p-2">{{ file.type }}</td>
          <td class="p-2">{{ file.size }}</td>
        </template>

        <td class="p-2 text-right">
          <button
            v-if="editingId !== file.id"
            class="p-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
            @click="startEditing(file)"
          >
            <i class="pi pi-file-edit"></i>
          </button>
          <button
            v-if="editingId !== file.id"
            class="p-1 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200"
          >
            <i class="pi pi-download"></i>
          </button>
          <button
            v-if="editingId !== file.id"
            class="p-1 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            @click="handelFileDetails('fileDetails', index)"
          >
            <i class="pi pi-info-circle"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
