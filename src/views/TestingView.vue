<!-- ParentComponent.vue
<script setup>
import { ref } from 'vue';
import TodoComponent from '@/components/FirstComponent.vue';
import SummaryComponent from '@/components/SecondComponent.vue';

// Define state to store todos
const todos = ref([]);

// Function to handle adding a new todo
const handleAddTodo = (newTodo) => {
  todos.value.push(newTodo);
};

// Function to handle marking a todo as completed
const handleCompleteTodo = (index) => {
  todos.value[index].completed = !todos.value[index].completed;
};

// Function to remove a todo
const handleRemoveTodo = (index) => {
  todos.value.splice(index, 1);
};
</script>

<template>
  <div>
    <h1>Todo App</h1>
    <TodoComponent 
      :todos="todos" 
      @add-todo="handleAddTodo"
      @complete-todo="handleCompleteTodo"
      @remove-todo="handleRemoveTodo"
    />
    <SummaryComponent :todos="todos" />
  </div>
</template> -->
