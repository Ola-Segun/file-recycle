<script setup>
import { reactive, ref } from "vue";
import Card from "./Card.vue";
import fileDetailsCard from "./filesComponent/fileDetailsCard.vue";
import FileGrid from "./filesComponent/fileGrid.vue";

const fileData = ref([
  {
    id: 1,
    name: "File one",
    date: "2024 - 10 - 20",
    type: "Image",
    size: "200 MB",
    path: "folderOne/images",
    createdDate: "Sunday, September 29, 2024",
    createdTime: "Sep 29, 2024, 7:59 AM",
    modifiedDate: "Monday, September 30, 2024",
    modifiedTime: "Sep 30, 2024 8:00 AM",
    accessedDate: "Tuesday, September 31, 2024",
    accessedTime: "Sep 31 2024, 8:01 AM",
    isSelected: false,
  },
  {
    id: 2,
    name: "File Two",
    date: "2024 - 10 - 20",
    type: "Image",
    size: "200",
    path: "folderTwo/images",
    createdDate: "Sunday, September 29, 2024",
    createdTime: "7:59 AM",
    modifiedDate: "Monday, September 30, 2024",
    modifiedTime: "8:00 AM",
    accessedDate: "Tuesday, September 31, 2024",
    accessedTime: "8:01 AM",
    isSelected: false,
  },
  {
    id: 3,
    name: "File Three",
    date: "2024 - 10 - 20",
    type: "Image",
    size: "200",
    path: "folderThree/images",
    createdDate: "Sunday, September 29, 2024",
    createdTime: "7:59 AM",
    modifiedDate: "Monday, September 30, 2024",
    modifiedTime: "8:00 AM",
    accessedDate: "Tuesday, September 31, 2024",
    accessedTime: "8:01 AM",
    isSelected: false,
  },
  {
    id: 4,
    name: "File Four",
    date: "2024 - 10 - 20",
    type: "Image",
    size: "200",
    path: "folderFour/images",
    createdDate: "Sunday, September 29, 2024",
    createdTime: "7:59 AM",
    modifiedDate: "Monday, September 30, 2024",
    modifiedTime: "8:00 AM",
    accessedDate: "Tuesday, September 31, 2024",
    accessedTime: "8:01 AM",
    isSelected: false,
  },
  {
    id: 5,
    name: "File number one to display on the list no img",
    date: "2024 - 10 - 20",
    type: "Image",
    size: "200",
    path: "folderFive/images",
    createdDate: "Sunday, September 29, 2024",
    createdTime: "7:59 AM",
    modifiedDate: "Monday, September 30, 2024",
    modifiedTime: "8:00 AM",
    accessedDate: "Tuesday, September 31, 2024",
    accessedTime: "8:01 AM",
    isSelected: false,
  },
]);

const handelListAndGridView = (view) => {
  const listTable = document.getElementById("list-table");
  const gridTable = document.getElementById("grid-table");

  if (view === "list") {
    listTable.classList.remove("hidden");
    gridTable.classList.add("hidden");
  } else if (view === "grid") {
    listTable.classList.add("hidden");
    gridTable.classList.remove("hidden");
  }
};

const popups = reactive([
  { name: "none", condition: true },
  { name: "fileDetails", condition: false },
  { name: "fileDelete", condition: false },
]);

let currentPopup = ref("");
let currentPopupFileDetails = ref([]);

const emit = defineEmits(["sendData"]);
const generateData = () => {
  const data1 = currentPopup;
  const data2 = currentPopupFileDetails;
  emit("sendData", data1, data2);
};

const handelFileDetails = (name, index) => {
  currentPopup = name;  
  currentPopupFileDetails.value.push(fileData.value[index]);
  // currentPopupFileDetails.value[currentPopupFileDetails.value.length - 1]
  generateData();
  // console.log(currentPopupFileDetails.value);
  // while (currentPopupFileDetails.value.length > 0) {
  //   currentPopupFileDetails.value.pop();
  // }
};

// handelPopups('none');
</script>

<template>
  <Card margin="mt-6">
    <div class="p-6">
      <!-- Files card header -->
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-2xl font-semibold">Files</h3>
        <div class="flex-grow mx-4">
          <form class="flex items-center max-w-md mx-auto">
            <input
              type="search"
              placeholder="Search files..."
              class="w-full px-4 py-2 rounded-l-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
            />
            <button
              type="submit"
              class="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              <i class="pi pi-search"></i>
            </button>
          </form>
        </div>
        <div class="flex items-center space-x-2">
          <button
            class="default-button p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            @click="handelFileDetails('fileDelete')"
          >
            <i class="pi pi-trash"></i>
          </button>
          <button
            class="default-button p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            @click="handelListAndGridView('list')"
          >
            <i class="pi pi-list"></i>
          </button>
          <button
            class="default-button p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            @click="handelListAndGridView('grid')"
          >
            <i class="pi pi-th-large"></i>
          </button>
        </div>
      </div>

      <!-- Files card body -->
      <div class="h-[300px] overflow-auto cs-scrollbar">
        <!-- List / Table view -->
        <table class="w-full hidden" id="list-table">
          <thead>
            <tr
              class="border-b border-gray-400 dark:border-gray-700 text-gray-500"
            >
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
              class="border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100"
              v-for="(data, index) in fileData"
            >
              <td class="p-2">
                <input
                  type="checkbox"
                  class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </td>
              <td class="p-2">{{ data.name }}</td>
              <td class="p-2">{{ data.date }}</td>
              <td class="p-2">{{ data.type }}</td>
              <td class="p-2">{{ data.size }}</td>
              <td class="p-2 text-right">
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
                <button
                  class="p-1 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  @click="handelFileDetails('fileDetails', index)"
                >
                  <i class="pi pi-info-circle"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Grid view (hidden by default) -->
        <div class="flex flex-wrap gap-3 justify-between" id="grid-table">
          <!-- <FileGrid
            v-for="data in fileData"
            :name="data.name"
            :date="data.date"
            :type="data.type"
            :size="data.size"
            :isSelected="data.isSelected"
          /> -->

          <div
            v-for="(data, index) in fileData"
            class="p-4 bg-white border rounded-lg shadow w-[17.5rem] hover:bg-gray-100 cursor-pointer"
          >
            <div class="flex justify-between items-start">
              <input
                type="checkbox"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                :value="data"
                v-model="currentPopupFileDetails"
              />
              <button
                class="p-1 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                @click="handelFileDetails('fileDetails', index)"
              >
                <i class="pi pi-info-circle"></i>
              </button>
            </div>
            <h3 class="mt-2 font-semibold truncate">
              {{ data.name }}
            </h3>
            <p class="text-sm text-gray-500">{{ data.type }}</p>
            <p class="text-sm text-gray-500">{{ data.size }} MB</p>
            <p class="text-sm text-gray-500">{{ data.date }}</p>

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
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>
