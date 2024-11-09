<script setup>
import { ref, computed } from "vue";

const props = defineProps(["currentDisplay", "currentDisplayFileData"]);
let currentPopup = ref("none");

const selectedFiles = computed(() => {
  return props.currentDisplayFileData || [];
});

const emit = defineEmits(["send-to-parent", 'deleteConfirmed']);

const sendDataToParent = () => {
  currentPopup.value = "none";
  emit("send-to-parent", currentPopup);
};

const confirmDelete = () => {
  console.log('FileDeleteCard - Selected files structure:', {
    selectedFiles: selectedFiles.value,
    isArray: Array.isArray(selectedFiles.value),
    length: selectedFiles.value?.length
  });
  emit("deleteConfirmed", { value: "confirmDelete" }, { value: selectedFiles.value });
  // Remove sendDataToParent() since modal closing is handled by FilemanView
}
</script>
<template>
  <!-- File Delete Card -->
  <div
    class="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-60 flex justify-center items-center z-50"
  >
    <div
      class="popup-card w-fit min-w-80 max-w-[35rem] bg-white px-4 py-2 rounded-lg"
    >
      <div class="flex justify-between items-center pb-1">
        <p class="font-semibold text-xl">Confirm Delete</p>
      </div>
      <div class="grid py-3 gap-4">
        <p>
          Are you sure you want to delete the selected file{{ selectedFiles.length > 1 ? 's' : ''}}?
        </p>
        <div>
          <span>Selected: </span>
          <span
            v-for="(file, index) in selectedFiles"
            :key="file.id"
            class="text-sm font-semibold text-wrap"
          >
            {{ file.name }}{{ index < selectedFiles.length - 1 ? ', ' : '' }}
          </span>
        </div>
        <div class="flex w-full gap-8 justify-end">
          <button
            class="h-10 px-2 rounded-md cursor-pointer bg-gray-300 font-semibold grid items-center hover:bg-gray-400"
            @click="sendDataToParent"
          >
            Cancel
          </button>
          <button
            class="h-10 px-2 cursor-pointer bg-red-500 text-white font-semibold rounded-md grid items-center hover:bg-red-600"
            @click="confirmDelete"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

