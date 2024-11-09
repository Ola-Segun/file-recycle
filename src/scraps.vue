<!-- Files card -->

        <!-- List / Table view -->
        <!-- <table class="w-full hidden" id="list-table">
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
        </table> -->

        <!-- Grid view (hidden by default) -->
        <!-- <div class="flex flex-wrap gap-3 justify-between" id="grid-table">
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
        </div> -->