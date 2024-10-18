<script setup>
import {ref} from 'vue';

const name = ref('John Doe');
const status = ref('active');
const msg_true = ref('user found');
const msg_false = ref('no user found');
const tasks = ref(['T1', 'T2', 'T3', 'T4']);
const newTask = ref('Task Item');

const names = ref(['Dean', 'Bean', 'Kevin', 'Truce']);
const nameCounter = ref(0);
const length = names.value.length;
const index = names.value[nameCounter];

const toggleStatus = () =>{
  if (status.value === 'active'){
    status.value = 'pending';
  }else if (status.value === 'pending'){
    status.value = 'inactive';
  }else {
    status.value = 'active';
  } 
}

const switchName = () => {
  if(nameCounter.value <= names.value.length){
    name.value = names.value[nameCounter];
  }
}

const addTask = () => {
  if(newTask.value.trim() !== ''){
    tasks.value.push(newTask.value);
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>

<template>
  <h1 class="">My vue crash for :</h1>
  <p v-if="status === 'active'">{{ status }}</p>
  <p v-else-if="status === 'pending'">{{ status }}</p>
  <p v-else>No user found.</p>

  <p>{{ name }}</p>
  <p>{{ length }}</p>
  <p>{{ index }}</p>

  <h3>Tasks: </h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>
        {{ task }}
      </span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>

  <form @submit.prevent = "addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask">
    <button type="submit">Submit</button>
  </form>

  <a v-bind:href="link">
    google
  </a>

  <button v-on:click="toggleStatus">Change status</button>
  <button @click="toggleStatus">Change status</button>
  <button @click="toggleStatus">Change status</button>
  <button @click="switchName">switch Name</button>


</template>

