<script setup>
import { ref } from "vue";

import Card from "@/components/Card.vue";
import Calendar from "@/components/CalendarCard.vue";
import Statistics from "@/components/StatisticsCard.vue";
import Months from "@/components/MonthsCard.vue";
import FilesManCard from "@/components/FilesManCard.vue";
import FileDetailsCard from "@/components/filesComponent/fileDetailsCard.vue";
import FileDeleteCard from "@/components/filesComponent/fileDeleteCard.vue";

const dataFromCalendar = ref("");
const popupDisplayName = ref("");
const popupFileData = ref([]);
const filesToDelete = ref([]);

const handelDataFromCalendar = (calendarData) => {
  dataFromCalendar.value = calendarData;
};


const handelDataFromFilesManCard = (popupName, fileData) => {
  if (popupName && fileData) {
    popupDisplayName.value = popupName;
    popupFileData.value = Array.isArray(fileData) ? fileData : [fileData];
  }
};

const detailsCardMessage = (nameFromDetails) => {
  popupDisplayName.value = nameFromDetails.value || 'none';
};

const handleDeleteConfirmed = (data1, data2) => {
  console.log('FilemanView - Handling delete confirmation:', {
    data1,
    data2,
    files: data2.value
  });
  
  // Set files to delete
  filesToDelete.value = data2.value;
  popupDisplayName.value = 'none';
  
  // Don't reset here - move reset to after FilesManCard confirms deletion
};

// Add new handler for when FilesManCard confirms deletion is complete
const onDeleteComplete = () => {
  console.log('FilemanView - Delete completed, resetting states');
  filesToDelete.value = [];
  popupFileData.value = [];
  popupDisplayName.value = 'none';
};

</script>

<template>
  <!-- Main content grid -->
  <div class="grid md:grid-cols-4 gap-4">
    <!-- Calendar -->
    <Calendar @sendData="handelDataFromCalendar" />

    <!-- Statistics -->
    <Statistics :currentMonth="dataFromCalendar" />
  </div>

  <!-- Files card -->
  <FilesManCard 
    @sendToParent="handelDataFromFilesManCard"
    @deleteConfirmed="onDeleteComplete"
    :itemsTodelete="filesToDelete"
  />
  <!-- <FilesCard /> -->


  <div
    v-if="popupDisplayName === 'fileDetails'"
    style="transition: 0.5s ease-in-out"
  >
    <FileDetailsCard
      :currentDisplay="popupDisplayName"
      :currentDisplayFileData="popupFileData"
      @send-to-parent="detailsCardMessage"
    />
  </div>
  <div v-else-if="popupDisplayName === 'fileDelete'">
    <FileDeleteCard
      :currentDisplay="popupDisplayName"
      :currentDisplayFileData="popupFileData"
      @send-to-parent="detailsCardMessage"
      @deleteConfirmed="handleDeleteConfirmed"
    />
  </div>

  <div v-else-if="popupDisplayName === 'none'">
  </div>
  <!-- <FileDetailsCard /> -->
</template>
