<script setup>
import { ref } from "vue";
import profileIMage from "@/assets/img/profile.png";
const imageUrl = ref("../../assets/img/profile.png");
// import profile from "";
// defineProps({
//     name: String,
//     date: String,
//     type: String,
//     size: String,
//     isSelected: Boolean,
//     // none:Boolean,
//     // fileDetails:Boolean,
//     // fileDelete:Boolean,
//     currentPopup:String,
// })

const props = defineProps(["currentDisplay", "currentDisplayFileData"]);

let currentPopup = ref("none");

const emit = defineEmits(["sendToParent"]);
const sendDataToParent = () => {
  const data3 = currentPopup;
  emit("sendToParent", data3);
};

// console.log(currentDisplayFileData.value);
</script>

<template>
  <!-- File Details Card -->
  <div
    class="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-60 flex justify-center items-center z-50"
  >
    <div
      class="popup-card w-fit min-w-72 max-w-[25rem] bg-white px-4 py-2 rounded-lg"
    >
      <div class="flex justify-between items-center border-b-2 pb-1">
        <p class="font-semibold text-xl">Details</p>
        <div
          class="close default-button justify-self-end"
          id="closeDetails"
          @click="sendDataToParent"
        >
          <i class="pi pi-times"></i>
        </div>
      </div>
      <div class="grid py-2">
        <div class="file-image w-full grid mb-2">
          <img :src="profileIMage" alt="" class="w-fit rounded-md h-44 justify-self-center" />
        </div>

        <!-- {{ currentDisplayFileData[0].name }} -->


        <div class="grid gap-1">
          <div class="details-text">
            <p class="font-semibold">Name:</p>
            <p class=" text-wrap"> 
              {{ currentDisplayFileData[0].name }}
            </p>
          </div>
          <div class="details-text">
            <p class="font-semibold">Type:</p>
            <p class=""> 
              {{ currentDisplayFileData[0].type }}
            </p>
          </div>
          <div class="details-text">
            <p class="font-semibold">Size:</p>
            <p class=""> 
              {{ currentDisplayFileData[0].size }}
            </p>
          </div>
          <div class="details-text">
            <p class="font-semibold">Path:</p>
            <i class=" text-wrap"> 
              {{ currentDisplayFileData[0].path }}
            </i>
          </div>
          <div class="details-text">
            <p class="font-semibold">Created Time:</p>
            <p class=""> 
              {{ currentDisplayFileData[0].createdTime }}
            </p>
          </div>
          <div class="details-text">
            <p class="font-semibold">Modified Time:</p>
            <p class=""> 
              {{ currentDisplayFileData[0].modifiedTime }}
            </p>
          </div>
          <div class="details-text">
            <p class="font-semibold">Last Accessed:</p>
            <p class=""> 
              {{ currentDisplayFileData[0].accessedTime }}
            </p>
          </div>
        </div>

        <div class="details-buttons-grp flex justify-between border-t-2 mt-2 pt-2">
          <div class="default-button bg-gray-200">
            <i class="pi pi-pen-to-square"></i>
          </div>
          <div class="default-button bg-gray-200">
            <i class="pi pi-download"></i>
          </div>
          <div class="default-button bg-gray-200">
            <i class="pi pi-file-edit"></i>
          </div>
          <div class="default-button bg-gray-200">
            <i class="pi pi-trash"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.file-image {
  background-image: var(--bg-image);
  background-size: cover;
  background-position: center;
}
</style>
