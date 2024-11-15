<script setup>
import { reactive, ref, watch, nextTick, computed } from "vue";
import Card from "./Card.vue";
import FileManGrid from "./filesComponent/fileManGrid.vue";
import FileManList from "./filesComponent/fileManList.vue";

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
    date: "2024 - 09 - 20",
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
    date: "2024 - 01 - 20",
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
    date: "2024 - 07 - 20",
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
  {
    id: 6,
    name: "File Six",
    date: "2024 - 08 - 20",
    type: "Image",
    size: "200",
    path: "folderSix/images",
    createdDate: "Sunday, September 29, 2024",
    createdTime: "7:59 AM",
    modifiedDate: "Monday, September 30, 2024",
    modifiedTime: "8:00 AM",
    accessedDate: "Tuesday, September 31, 2024",
    accessedTime: "8:01 AM",
    isSelected: false,
  },
  {
    id: 7,
    name: "File Seven",
    date: "2024 - 02 - 20",
    type: "Image",
    size: "200",
    path: "folderSeven/images",
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

// const props = defineProps(["popupFileData"]);
let currentPopup = ref("");
let currentPopupFileDetails = ref([]);
let currentFilesLength = ref();


const emit = defineEmits(["sendToParent", "send-To-Parent", "deleteConfirmed"]);

const sendToParent = () => {
  const data1 = currentPopup.value;
  const data2 = currentPopupFileDetails.value;
  emit("sendToParent", data1, data2);
};

// Update the onDeleteConfirmed handler
const onDeleteConfirmed = (selectedFiles) => {
  console.log('FilesManCard - Deleting files:', selectedFiles);
  
  // Process deletion
  fileData.value = fileData.value.filter(file => {
    return !selectedFiles.some(selected => selected.id === file.id);
  });
  
  // Reset ALL states
  currentPopupFileDetails.value = [];  // Reset selected files
  currentFilesLength.value = 0;        // Reset files length
  currentPopup.value = '';             // Reset popup state
  
  // Reset isSelected on all remaining files
  fileData.value.forEach(file => {
    file.isSelected = false;
  });
  
  // Add logging before emit
  console.log('FilesManCard - Emitting deleteConfirmed');
  emit("deleteConfirmed", currentPopup.value);  // This should trigger onDeleteComplete in FilemanView
};

const handelDataFromFileManList = (data1, data2) => {
  if (data1.value === "fileDelete") {
    console.log('FilesManCard - Selected files from List:', data2.value);
    currentPopupFileDetails.value = data2.value;
    currentFilesLength.value = data2.value.length;
  } else if (data1.value === "fileDetails") {
    currentPopup.value = data1.value;
    currentPopupFileDetails.value = data2.value;
    sendToParent();
  } else if (data1.value === "confirmDelete") {
    console.log('FilesManCard - Confirming delete for files:', data2.value);
    onDeleteConfirmed(data2.value);
  }
};

const handelDataFromFileManGrid = (data1, data2) => {
  console.log(data1.value);
  if (data1.value === "fileDelete") {
    console.log('FilesManCard - Selected files from Grid:', data2.value);
    currentPopupFileDetails.value = data2.value;
    currentFilesLength.value = data2.value.length;
  } else if (data1.value === "fileDetails") {
    currentPopup.value = data1.value;
    currentPopupFileDetails.value = data2.value;
    sendToParent();
  } else if (data1.value === "confirmDelete") {
    console.log('FilesManCard - Confirming delete for files:', data2.value);
    onDeleteConfirmed(data2.value);
  }
};

const handelDataDeletePopup = (name) => {
  if (currentFilesLength.value > 0) {
    console.log('FilesManCard - Opening delete popup with files:', currentPopupFileDetails.value);
    currentPopup.value = name;
    sendToParent();
  }
};

// const props = defineProps(["itemsToDelete"])
// // if(props.itemsToDelete.value > 0){
// //   console.log(props.itemsToDelete);
// // }
// console.log(props.itemsToDelete);

const props = defineProps({
  itemsTodelete: {
    type: Array,
    default: () => []
  }
});

// Update the handleDeleteFiles method
const handleDeleteFiles = () => {
  console.log('FilesManCard - Before deletion:', {
    fileDataLength: fileData.value.length,
    selectedFiles: props.itemsTodelete,
    currentPopup: currentPopup.value
  });

  // Set currentPopup value before proceeding with deletion
  currentPopup.value = 'fileDelete';

  // Then proceed with deletion
  fileData.value = fileData.value.filter(file => {
    return !props.itemsTodelete.some(selected => selected.id === file.id);
  });

  // Reset isSelected on all remaining files
  fileData.value.forEach(file => {
    file.isSelected = false;
  });

  console.log('FilesManCard - After deletion:', {
    fileDataLength: fileData.value.length,
    remainingFiles: fileData.value
  });

  // Reset states
  currentPopupFileDetails.value = [];
  currentFilesLength.value = 0;
  currentPopup.value = '';
  
  // Trigger reset in child components
  resetSelection.value = true;
  // Reset the trigger after a tick to allow for future triggers
  nextTick(() => {
    resetSelection.value = false;
  });
  
  // Emit deleteConfirmed to notify parent
  emit("deleteConfirmed");
};

// Update the watch to be simpler
watch(() => props.itemsTodelete, (newValue) => {
  if (newValue && Array.isArray(newValue) && newValue.length > 0) {
    console.log('FilesManCard - Processing deletion for:', newValue);
    handleDeleteFiles();
  }
}, { deep: true });

// Add this with other refs at the top
const resetSelection = ref(false);

// Add this with other refs at the top
const isExpanded = ref(false);

// Add this method
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

// Add after your existing refs
const searchQuery = ref('');

// Add this computed property
const filteredFileData = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();
  
  if (!query) return fileData.value;
  
  return fileData.value.filter(file => {
    return (
      file.name.toLowerCase().includes(query) ||
      file.size.toString().toLowerCase().includes(query) ||
      file.type.toLowerCase().includes(query) ||
      file.date.toLowerCase().includes(query)
    );
  });
});

</script>

<template>
  <Card :margin="isExpanded ? '' : 'mt-6'" 
        :class="[
          'transition-all duration-[300ms] ease-in-out',
          isExpanded ? 'fixed top-24 left-0 right-0 bottom-0 z-10 m-4' : ''
        ]">
    <div class="p-6">
      <!-- Files card header -->
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-2xl font-semibold">Files</h3>
        <div class="flex-grow mx-4">
          <form class="flex items-center max-w-md mx-auto" @submit.prevent>
            <input
              v-model="searchQuery"
              type="search"
              placeholder="Search by name, size, type or date..."
              class="w-full px-4 py-2 rounded-l-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
            />
            <button
              type="button"
              class="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              <i class="pi pi-search"></i>
            </button>
          </form>
        </div>
        <div class="flex items-center space-x-2">
          <button
            v-if="currentFilesLength > 0"
            class="default-button p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            @click="handelDataDeletePopup('fileDelete')"
          >
            <i class="pi pi-trash"></i>
          </button>
          <button v-else class="default-button p-2 text-gray-300">
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
          <!-- Add expand button -->
          <button
            class="default-button p-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-slate-700"
            @click="toggleExpand"
          >
            <i :class="isExpanded ? 'pi pi-compress' : 'pi pi-expand'"></i>
          </button>
        </div>
      </div>

      <!-- Files card body - adjust height based on expanded state -->
      <div :class="[
        'overflow-auto cs-scrollbar transition-all duration-300',
        isExpanded ? 'h-[calc(100vh-12rem)]' : 'h-[300px]'
      ]">
        <div class="flex flex-wrap gap-3" id="grid-table">
          <FileManGrid
            :files="filteredFileData"
            :resetSelection="resetSelection"
            @sendToParent="handelDataFromFileManGrid"
          />
        </div>

        <div class="hidden" id="list-table">
          <FileManList
            :files="filteredFileData"
            :resetSelection="resetSelection"
            @sendToParent="handelDataFromFileManList"
          />
        </div>
      </div>
    </div>
  </Card>
</template>
