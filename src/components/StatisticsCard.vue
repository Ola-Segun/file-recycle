<script setup>
import { onMounted, ref, watch, nextTick } from "vue";
import { Chart } from 'chart.js/auto';
import CalendarCard from './CalendarCard.vue';
import Card from './Card.vue';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const props = defineProps(['currentMonth'])
const chartRef = ref(null);
let myChart = null;

// Sample monthly statistics data
const monthlyStats = [
  {
    month: "Jan",
    documents: 35,
    audios: 30,
    videos: 20,
    deletingToday: 15,
    images: 25
  },
  {
    month: "Feb",
    documents: 40,
    audios: 25,
    videos: 15,
    deletingToday: 10,
    images: 30
  },
  {
    month: "Mar",
    documents: 38,
    audios: 28,
    videos: 22,
    deletingToday: 12,
    images: 28
  },
  {
    month: "Apr",
    documents: 42,
    audios: 22,
    videos: 18,
    deletingToday: 8,
    images: 32
  },
  {
    month: "May",
    documents: 45,
    audios: 20,
    videos: 25,
    deletingToday: 5,
    images: 35
  },
  {
    month: "Jun",
    documents: 36,
    audios: 32,
    videos: 19,
    deletingToday: 13,
    images: 27
  },
  {
    month: "Jul",
    documents: 39,
    audios: 27,
    videos: 21,
    deletingToday: 11,
    images: 29
  },
  {
    month: "Aug",
    documents: 41,
    audios: 24,
    videos: 23,
    deletingToday: 9,
    images: 31
  },
  {
    month: "Sep",
    documents: 37,
    audios: 29,
    videos: 17,
    deletingToday: 14,
    images: 26
  },
  {
    month: "Oct",
    documents: 43,
    audios: 23,
    videos: 24,
    deletingToday: 7,
    images: 33
  },
  {
    month: "Nov",
    documents: 44,
    audios: 21,
    videos: 16,
    deletingToday: 6,
    images: 34
  },
  {
    month: "Dec",
    documents: 45,
    audios: 20,
    videos: 25,
    deletingToday: 5,
    images: 35
  }
];

// Function to get stats for current month
const getCurrentMonthStats = () => {
  const currentMonthData = monthlyStats.find(
    stat => stat.month === props.currentMonth?.substring(0, 3)
  ) || monthlyStats[0];

  return {
    labels: ['Documents', 'Audios', 'Videos', 'Deleting Today', 'Images'],
    datasets: [{
      data: [
        currentMonthData.documents,
        currentMonthData.audios,
        currentMonthData.videos,
        currentMonthData.deletingToday,
        currentMonthData.images
      ],
      backgroundColor: [
        '#3B82F6', // blue-500
        '#10B981', // green-500
        '#8B5CF6', // purple-500
        '#EF4444', // red-500
        '#F59E0B'  // yellow-500
      ]
    }]
  };
};

// Function to initialize/update chart
const updateChart = () => {
  if (!chartRef.value) return;
  
  const ctx = chartRef.value.getContext('2d');
  
  if (myChart) {
    myChart.destroy();
  }

  myChart = new Chart(ctx, {
    type: 'pie',
    data: getCurrentMonthStats(),
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.parsed || 0;
              return `${label}: ${value}%`;
            }
          }
        },
        datalabels: {
          color: '#fff',
          font: {
            weight: 'bold',
            size: 11
          },
          formatter: (value, ctx) => {
            const label = ctx.chart.data.labels[ctx.dataIndex];
            return label.split(' ')[0];
          },
          display: function(context) {
            return context.dataset.data[context.dataIndex] > 10;
          }
        }
      }
    }
  });
};

// Watch for month changes
watch(() => props.currentMonth, () => {
  nextTick(() => {
    updateChart();
  });
});

onMounted(() => {
  nextTick(() => {
    updateChart();
  });
});

// Register Chart.js plugin
Chart.register(ChartDataLabels);
</script>

<template>
  <Card>
    <div class="p-6 grid">
      <div class="flex mb-4 gap-2">
        <h3 class="text-2xl font-semibold">Statistics</h3>
        <p class="font-semibold self-center text-lg"> for {{ currentMonth }}</p>
      </div>
      
      <!-- Chart Canvas -->
      <div class="w-48 h-48 justify-self-center mb-4">
        <canvas ref="chartRef"></canvas>
      </div>

      <!-- Legend -->
      <div class="flex flex-wrap gap-3">
        <div class="flex items-center mt-2">
          <div class="w-3 h-3 rounded-full mr-2 bg-blue-500"></div>
          <span>Documents: {{ getCurrentMonthStats().datasets[0].data[0] }}%</span>
        </div>
        <div class="flex items-center mt-2">
          <div class="w-3 h-3 rounded-full mr-2 bg-green-500"></div>
          <span>Audios: {{ getCurrentMonthStats().datasets[0].data[1] }}%</span>
        </div>
        <div class="flex items-center mt-2">
          <div class="w-3 h-3 rounded-full mr-2 bg-purple-500"></div>
          <span>Videos: {{ getCurrentMonthStats().datasets[0].data[2] }}%</span>
        </div>
        <div class="flex items-center mt-2">
          <div class="w-3 h-3 rounded-full mr-2 bg-red-500"></div>
          <span>Deleting Today: {{ getCurrentMonthStats().datasets[0].data[3] }}%</span>
        </div>
        <div class="flex items-center mt-2">
          <div class="w-3 h-3 rounded-full mr-2 bg-yellow-500"></div>
          <span>Images: {{ getCurrentMonthStats().datasets[0].data[4] }}%</span>
        </div>
      </div>
    </div>
  </Card>
</template>