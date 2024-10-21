<script setup>
import { reactive, ref } from "vue";
import Card from "./Card.vue";
import dayjs from "dayjs";

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

const calendarBtn = reactive([
  { name: "cal-upload", isActive: false },
  { name: "cal-download", isActive: false },
  { name: "cal-delete", isActive: false },
  { name: "cal-warning", isActive: false },
]);

const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth();
const currentDate = now.getDate();

let selectedButton = ref(monthButtonProps[currentMonth].name);

let selectedMonth = ref(0);
let selectedYear = ref(2024);

let selectedDates = reactive([]);
let selectedDatesProps = reactive([]);

function getFullDatesOfMonth(year, month) {
  const startOfMonth = dayjs(`${year}-${month + 1}-01`);
  const daysInMonth = startOfMonth.daysInMonth();
  let porpsItem;

  // reset selectedDates
  selectedDatesProps = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const dDate = startOfMonth.date(day).format("dddd D MMMM");
    if (dDate.split(" ")[1] === currentDate.toString()) {
      porpsItem = { date: dDate, isCurrentDate: true, isSelected: false };
    } else {
      porpsItem = { date: dDate, isCurrentDate: false, isSelected: false };
    }
    selectedDatesProps.push(porpsItem);
  }
  return selectedDatesProps;
}

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



getFullDatesOfMonth(currentYear, currentMonth);
handelActiveButton(months[currentMonth]);
adjustDatesToCalendar();

// console.log(selectedDatesProps);

const handelSelectDates = (selectedDate) => {
  selectedDatesProps.forEach((prop) => {
    
    if(prop.date){
        // Compare the selected date with the current date
        const currentDateString = prop.date.split(" ")[1]; // Extract the day part
        prop.isSelected = (currentDateString === selectedDate.toString()); // Set isSelected to true for the clicked date
    }
  });
//   adjustDatesToCalendar();
  console.log(selectedDatesProps);
};

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
            @click="handelActiveButton(button.name), adjustDatesToCalendar()"
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
        <span>{{ selectedButton }}</span>
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
        <div v-for="props in selectedDatesProps" @click="handelSelectDates(props.date.split(' ')[1])">
          <div v-if="props">
            <div
  :class="{
    'p-2 text-center cursor-pointer relative hover:bg-gray-100 dark:hover:bg-gray-100 h-fit': true, // Default class for all days
    'active-date': props.date.split(' ')[1] === currentDate.toString() && props.date.split(' ')[2] === months[currentMonth], // Current date condition
    'selected-button': props.isSelected, // Apply 'selected-button' when props.isSelected is true
    'hidden': !props.date, // Hide if date is empty
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
      <div class="flex justify-end align-bottom items-center">
        <button class="p-2 default-button border-none hover:bg-gray-200">
          <i class="pi pi-chevron-left"></i>
        </button>
        <button class="p-2 default-button border-none hover:bg-gray-200">
          <i class="pi pi-chevron-right"></i>
        </button>
      </div>
    </div>
  </Card>
</template>
