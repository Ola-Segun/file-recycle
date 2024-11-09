<script setup>
import { popScopeId, ref } from "vue";

import Card from "@/components/Card.vue";
import Calendar from "@/components/CalendarCard.vue";
import Statistics from "@/components/StatisticsCard.vue";
import Months from "@/components/MonthsCard.vue";
import FilesCard from "@/components/FilesCard.vue";
import FileDetailsCard from "@/components/filesComponent/fileDetailsCard.vue";
import FileDeleteCard from "@/components/filesComponent/fileDeleteCard.vue";

const dataFromCalendar = ref("");

const handelDataFromCalendar = (calendarData) => {
  dataFromCalendar.value = calendarData;
};

const popupDisplayName = ref("");
const popupFileData = ref({});

const handelPopupsDisplay = (popupData, fileData) => {
  popupDisplayName.value = popupData;
  popupFileData.value = fileData;
};

const detailsCardMessage = (nameFromDetails) => {
  popupDisplayName.value = nameFromDetails;
}

// const deleteCardMessage = (nameFromDelete) => {
//   popupDisplayName.value = nameFromDelete;
// }


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
  <FilesCard @sendData="handelPopupsDisplay" />
  <!-- <FilesCard /> -->

  <div v-if="popupDisplayName === 'fileDetails'" style="transition: .5s ease-in-out;">
    <!-- details card -->
    <FileDetailsCard
      :currentDisplay="popupDisplayName"
      :currentDisplayFileData="popupFileData"
      @send-to-parent="detailsCardMessage"
      />
    </div>
    <div v-else-if="popupDisplayName === 'fileDelete'">
      <!-- delete card -->
      <FileDeleteCard
      :currentDisplay="popupDisplayName"
      :currentDisplayFileData="popupFileData"
      @send-to-parent="detailsCardMessage"
    />
  </div>

  <div v-else-if="popupDisplayName === 'none'">
      <!-- No card -->
    />
  </div>
  <!-- <FileDetailsCard /> -->
</template>
