<script setup>
    import Card from '@/components/Card.vue';
    import Calendar from '@/components/CalendarCard.vue';
    import Statistics from '@/components/StatisticsCard.vue';
    import Months from '@/components/MonthsCard.vue';
</script>
    
<template>
    <!-- Main content grid -->
    <div class="grid md:grid-cols-4 gap-4">
        <!-- Months -->
        <Months />

        <!-- Calendar -->
        <Calendar />

        <!-- Statistics -->
        <Statistics />
    </div>

    <!-- Files card -->
    <div class="mt-6 rounded-lg border bg-white shadow-sm">
        <div class="p-6">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-2xl font-semibold">Files</h3>
                <div class="flex-grow mx-4">
                    <form class="flex items-center max-w-md mx-auto">
                        <input type="search" placeholder="Search files..." class="w-full px-4 py-2 rounded-l-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-100 dark:text-white">
                        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            <i class="pi pi-search"></i>
                        </button>
                    </form>
                </div>
                <div class="flex items-center space-x-2">
                    <button class="default-button p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                        <i class="pi pi-trash-alt"></i>
                    </button>
                    <button class="default-button p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                        <i class="pi pi-list"></i>
                    </button>
                    <button class="default-button p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                        <i class="pi pi-th-large"></i>
                    </button>
                </div>
            </div>
            <div class="h-[300px] overflow-auto">
                <!-- Table view -->
                <table class="w-full">
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
                        <tr class="border-b border-gray-400 dark:border-gray-500 hover:bg-gray-50">
                            <td class="p-2">
                                <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                            </td>
                            <td class="p-2">File number one to display on the list no img</td>
                            <td class="p-2">2024 - 10 - 20</td>
                            <td class="p-2">Image</td>
                            <td class="p-2">200 MB</td>
                            <td class="p-2 text-right">
                                <button class="p-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
                                    <i class="pi pi-file-edit"></i>
                                </button>
                                <button class="p-1 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200">
                                    <i class="pi pi-download"></i>
                                </button>
                                <button class="p-1 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                                    <i class="pi pi-info-circle"></i>
                                </button>
                            </td>
                        </tr>
                        <tr class="border-b border-gray-400 dark:border-gray-500 hover:bg-gray-50">
                            <td class="p-2">
                                <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                            </td>
                            <td class="p-2">File number one to display on the list no img</td>
                            <td class="p-2">2024 - 10 - 20</td>
                            <td class="p-2">Image</td>
                            <td class="p-2">200 MB</td>
                            <td class="p-2 text-right">
                                <button class="p-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
                                    <i class="pi pi-file-edit"></i>
                                </button>
                                <button class="p-1 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200">
                                    <i class="pi pi-download"></i>
                                </button>
                                <button class="p-1 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                                    <i class="pi pi-info-circle"></i>
                                </button>
                            </td>
                        </tr>
                        <tr class="border-b border-gray-400 dark:border-gray-500 hover:bg-gray-50">
                            <td class="p-2">
                                <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                            </td>
                            <td class="p-2">File number one to display on the list no img</td>
                            <td class="p-2">2024 - 10 - 20</td>
                            <td class="p-2">Image</td>
                            <td class="p-2">200 MB</td>
                            <td class="p-2 text-right">
                                <button class="p-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
                                    <i class="pi pi-file-edit"></i>
                                </button>
                                <button class="p-1 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200">
                                    <i class="pi pi-download"></i>
                                </button>
                                <button class="p-1 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                                    <i class="pi pi-info-circle"></i>
                                </button>
                            </td>
                        </tr>
                        <tr class="border-b border-gray-400 dark:border-gray-500 hover:bg-gray-50">
                            <td class="p-2">
                                <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                            </td>
                            <td class="p-2">File number one to display on the list no img</td>
                            <td class="p-2">2024 - 10 - 20</td>
                            <td class="p-2">Image</td>
                            <td class="p-2">200 MB</td>
                            <td class="p-2 text-right">
                                <button class="p-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
                                    <i class="pi pi-file-edit"></i>
                                </button>
                                <button class="p-1 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200">
                                    <i class="pi pi-download"></i>
                                </button>
                                <button class="p-1 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                                    <i class="pi pi-info-circle"></i>
                                </button>
                            </td>
                        </tr>
                        <!-- More rows... -->
                    </tbody>
                </table>

                <!-- Grid view (hidden by default) -->
                <div class="grid grid-cols-4 gap-4 hidden">
                    <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                        <div class="flex justify-between items-start">
                            <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                            <button class="p-1 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                                <i class="pi pi-info-circle"></i>
                            </button>
                        </div>
                        <h3 class="mt-2 font-semibold truncate">File number one to display on the list no img</h3>
                        <p class="text-sm text-gray-500">Image</p>
                        <p class="text-sm text-gray-500">200 MB</p>
                        <p class="text-sm text-gray-500">2024 - 10 - 20</p>

                        <div class="mt-2 flex justify-end space-x-2">
                            <button class="p-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
                                <i class="pi pi-file-edit"></i>
                            </button>
                            <button class="p-1 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200">
                                <i class="pi pi-download"></i>
                            </button>
                        </div>

                    </div>
                    <!-- More grid items would be added here in a real implementation -->
                    <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                        <div class="flex justify-between items-start">
                            <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                            <button class="p-1 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                                <i class="pi pi-info-circle"></i>
                            </button>
                        </div>
                        <h3 class="mt-2 font-semibold truncate">File number one to display on the list no img</h3>
                        <p class="text-sm text-gray-500">Image</p>
                        <p class="text-sm text-gray-500">200 MB</p>
                        <p class="text-sm text-gray-500">2024 - 10 - 20</p>
                        <div class="mt-2 flex justify-end space-x-2">
                            <button class="p-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
                                <i class="pi pi-file-edit"></i>
                            </button>
                            <button class="p-1 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200">
                                <i class="pi pi-download"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>