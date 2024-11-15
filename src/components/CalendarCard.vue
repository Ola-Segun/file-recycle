<script setup>
import { reactive, ref, defineProps } from "vue";
import Card from "./Card.vue";
import dayjs from "dayjs";

// Array of month buttons with their active states
const monthButtonProps = reactive([
  { id: 1, name: "January", isActive: ref(true) },
  { id: 2, name: "Febuary", isActive: ref(false) },
  { id: 3, name: "March", isActive: ref(false) },
  { id: 4, name: "April", isActive: ref(false) },
  { id: 5, name: "May", isActive: ref(false) },
  { id: 6, name: "June", isActive: ref(false) },
  { id: 7, name: "July", isActive: ref(false) },
  { id: 8, name: "August", isActive: ref(false) },
  { id: 9, name: "September", isActive: ref(false) },
  { id: 10, name: "October", isActive: ref(false) },
  { id: 11, name: "November", isActive: ref(false) },
  { id: 12, name: "December", isActive: ref(false) },
]);

// Array of month names for reference
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Calendar action buttons (upload, download, delete, warning)
const calendarBtn = reactive([
  { name: "cal-upload", isActive: false },
  { name: "cal-download", isActive: false },
  { name: "cal-delete", isActive: false },
  { name: "cal-warning", isActive: false },
]);

// Get current date information
const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth();
const currentDate = now.getDate();
const message = 'Message';


// Track selected states
let selectedButton = ref(monthButtonProps[currentMonth].name);
let selectedMonth = ref(0);
let selectedYear = ref(currentYear);
let selectedDates = reactive([]);
let selectedDatesProps = [];


const emit = defineEmits(['sendData']);
// Pass to Statistics card
const generateData = () => {
  const data = selectedButton.value.substring(0,3);
  emit('sendData', data);
}

// Function to get all dates for the selected month
function getFullDatesOfMonth(year, month) {
  const startOfMonth = dayjs(`${year}-${month + 1}-01`);
  const daysInMonth = startOfMonth.daysInMonth();

  // reset selectedDates
  selectedDatesProps = [];

  // Generate date objects for each day in the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dDate = startOfMonth.date(day).format("dddd D MMMM");

    const porpsItem = reactive({
      date: dDate,
      isCurrentDate: dDate.split(" ")[1] === currentDate.toString(),
      isSelected: ref(false),
    });

    selectedDatesProps.push(porpsItem);
  }
  generateData();
  return selectedDatesProps;
}

// Add empty slots at start of month to align days correctly
const adjustDatesToCalendar = () => {
  switch (selectedDatesProps[0].date.substring(0, 3)) {
    case "Mon":
      selectedDatesProps.unshift("");
      break;
    case "Tue":
      selectedDatesProps.unshift("");
      selectedDatesProps.unshift("");
      break;
    case "Wed":
      selectedDatesProps.unshift("");
      selectedDatesProps.unshift("");
      selectedDatesProps.unshift("");
      break;
    case "Thu":
      selectedDatesProps.unshift("");
      selectedDatesProps.unshift("");
      selectedDatesProps.unshift("");
      selectedDatesProps.unshift("");
      break;
    case "Fri":
      selectedDatesProps.unshift("");
      selectedDatesProps.unshift("");
      selectedDatesProps.unshift("");
      selectedDatesProps.unshift("");
      selectedDatesProps.unshift("");
      break;
    case "Sat":
      selectedDatesProps.unshift("");
      selectedDatesProps.unshift("");
      selectedDatesProps.unshift("");
      selectedDatesProps.unshift("");
      selectedDatesProps.unshift("");
      selectedDatesProps.unshift("");
      break;
    default:
      "Sun";
      break;
  }
};

// Handle month button selection
const handelActiveButton = (buttonName) => {
  monthButtonProps.forEach((btn) => {
    btn.isActive = btn.name === buttonName;
    selectedButton.value = buttonName;
    if (btn.isActive) {
      selectedMonth.value = btn.id;
    }
  });

  getFullDatesOfMonth(selectedYear.value, selectedMonth.value - 1);
};

// Toggle calendar action buttons (upload, download, etc)
const handelSelectCalendarActions = (name) => {
  calendarBtn.forEach((btn) => {
    if (btn.name === name) {
      if (btn.isActive) {
        btn.isActive = false;
      } else {
        btn.isActive = true;
      }
    }
  });
};

// Handle date selection in calendar
const handelSelectDates = (selectedDate) => {
  selectedDatesProps.forEach((prop) => {
    if (prop.date) {
      // Compare the selected date with the current date
      const currentDateString = prop.date.split(" ")[1]; // Extract the day part
      prop.isSelected = currentDateString === selectedDate.toString(); // Set isSelected to true for the clicked date
    }
  });
  // console.log(selectedDatesProps.values);
};

// Navigate to next month, handling year transition
const handleNextMonth = () => {
  const currentMonthIndex = months.indexOf(selectedButton.value);
  if (currentMonthIndex === 11) {
    // If December, move to January of next year
    selectedYear.value++;
    selectedYear.value = selectedYear.value + 1;
    handelActiveButton(months[0]);
  } else {
    // Move to next month
    handelActiveButton(months[currentMonthIndex + 1]);
  }
  // Update the header text to show new year
  adjustDatesToCalendar();
};

// Navigate to previous month, handling year transition
const handlePreviousMonth = () => {
  const currentMonthIndex = months.indexOf(selectedButton.value);
  if (currentMonthIndex === 0) {
    // If January, move to December of previous year
    selectedYear.value--;
    handelActiveButton(months[11]);
  } else {
    // Move to previous month
    handelActiveButton(months[currentMonthIndex - 1]);
  }
  // Update the header text to show new year
  adjustDatesToCalendar();
};

// Add these new methods for year navigation
const handleNextYear = () => {
  selectedYear.value++;
  // Refresh calendar with new year while keeping same month
  getFullDatesOfMonth(selectedYear.value, selectedMonth.value - 1);
  adjustDatesToCalendar();
};

const handlePreviousYear = () => {
  selectedYear.value--;
  // Refresh calendar with new year while keeping same month
  getFullDatesOfMonth(selectedYear.value, selectedMonth.value - 1);
  adjustDatesToCalendar();
};

// Initialize calendar with current month and year
getFullDatesOfMonth(currentYear, currentMonth);
handelActiveButton(months[currentMonth]);
adjustDatesToCalendar();


</script>

<template>
  <!-- Months Card -->
  <Card>
    <div class="p-6">
      <h3 class="text-2xl font-semibold mb-4">Months</h3>
      <div class="cs-scrollbar h-[300px] overflow-auto s">
        <ul>
          <li
            v-for="button in monthButtonProps"
            :key="button"
            :id="button.name"
            :class="{
              'cursor-pointer p-2 rounded flex gap-2 justify-start items-center transition-all': true,
              'active-button': button.isActive,
              'hover:bg-gray-100': !button.isActive,
            }"
            @click="handelActiveButton(button.name), adjustDatesToCalendar(), generateData()"
          >
            {{ button.name }}
          </li>
        </ul>
      </div>
    </div>
  </Card>

  <!-- Calender Card -->
  <Card col_span="col-span-2">
    <div class="p-6 h-full grid grid-col-1-\/5-4-1">
      <h3 class="text-2xl font-semibold mb-4 flex justify-between items-center">
        <span>{{ selectedButton }}, {{ selectedYear }}</span>
        <div class="flex space-x-2">
          <button
            :class="
              calendarBtn[0].isActive
                ? 'active-top-cal-btn'
                : 'default-button p-2 text-sm justify-between bg-blue-100 text-black hover:bg-blue-200'
            "
            @click="handelSelectCalendarActions('cal-upload')"
          >
            <div class="w-2 h-2 rounded-full bg-blue-500"></div>
            <i class="pi pi-upload text-sm"></i>
          </button>
          <button
            :class="
              calendarBtn[1].isActive
                ? 'active-top-cal-btn'
                : 'default-button cal-download p-2 text-sm justify-between bg-green-100 text-black hover:bg-green-200'
            "
            @click="handelSelectCalendarActions('cal-download')"
          >
            <div class="w-2 h-2 rounded-full bg-green-500"></div>
            <i class="pi pi-download text-sm"></i>
          </button>
          <button
            :class="
              calendarBtn[2].isActive
                ? 'active-top-cal-btn'
                : 'default-button cal-delete p-2 text-sm justify-between bg-red-100 text-black hover:bg-red-200'
            "
            @click="handelSelectCalendarActions('cal-delete')"
          >
            <div class="w-2 h-2 rounded-full bg-red-500"></div>
            <i class="pi pi-trash text-sm"></i>
          </button>
          <button
            :class="
              calendarBtn[3].isActive
                ? 'active-top-cal-btn'
                : 'default-button cal-warning p-2 text-sm justify-between bg-yellow-100 text-black hover:bg-yellow-200'
            "
            @click="handelSelectCalendarActions('cal-warning')"
          >
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
      <div class="grid grid-cols-7">
        <!-- Calendar days -->
        <div
          v-for="props in selectedDatesProps"
          @click="handelSelectDates(props.date.split(' ')[1])"
        >
          <div v-if="props">
            <div
              :class="{
                'p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-100 h-fit': true, // Default class for all days
                'active-date':
                  props.date.split(' ')[1] === currentDate.toString() &&
                  props.date.split(' ')[2] === months[currentMonth] && // Current date condition
                  selectedYear === currentYear, // Current date condition
                'selected-date': props.isSelected, // Apply 'selected-button' when props.isSelected is true
                hidden: !props.date, // Hide if date is empty
              }"
            >
              {{ props.date.split(" ")[1] }}
              <div class="dots flex gap-1 h-2">
                <div
                  :class="
                    calendarBtn[0].isActive
                      ? 'cal-upload dot bg-blue-500'
                      : 'hidden'
                  "
                ></div>
                <div
                  :class="
                    calendarBtn[1].isActive
                      ? 'cal-download dot bg-green-500'
                      : 'hidden'
                  "
                ></div>
                <div
                  :class="
                    calendarBtn[2].isActive
                      ? 'cal-delete dot bg-red-500'
                      : 'hidden'
                  "
                ></div>
                <div
                  :class="
                    calendarBtn[3].isActive
                      ? 'cal-warning dot bg-yellow-500'
                      : 'hidden'
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>
        <!-- More days... -->
      </div>
      <div class="flex gap-2 justify-end align-bottom items-center">
        <button 
          class="p-2 default-button border-none hover:bg-gray-200"
          @click="handlePreviousYear"
          title="Previous Year"
        >
          <i class="pi pi-chevron-left"></i>
        </button>
        <div :class="selectedYear === currentYear ? 'text-blue-800 font-semibold' : 'text-gray-400 font-semibold'">
          {{ selectedYear }}
        </div>
        <button 
          class="p-2 default-button border-none hover:bg-gray-200"
          @click="handleNextYear"
          title="Next Year"
        >
          <i class="pi pi-chevron-right"></i>
        </button>
      </div>
    </div>
  </Card>
</template>
