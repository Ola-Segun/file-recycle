<script setup>
    defineProps({
        bg: {
            type: String,
            default: 'bg-white'
        }
    })
</script>

<template>
    <!-- Action buttons -->

    <div :class="`${bg} action-btn px-6 h-3/5 w-1/5 py-4 flex items-center gap-2 rounded-md shadow-sm active:scale-[0.98] transition-all duration-[0.1s]`">
        <slot></slot>
    </div>
<!-- 
    <div class="action-btn px-6 h-3/5 w-1/5 py-4 flex items-center gap-2 rounded-md shadow-sm " style="background-color: #7F55E0;">
        <i class="pi pi-note"></i>
        <p>My Audios</p>
    </div>
    <div class="action-btn px-6 h-3/5 w-1/5 py-4 flex items-center gap-2 rounded-md shadow-sm " style="background-color: #22CCB2;">
        <i class="pi pi-document"></i>
        <p>My Docs</p>
    </div>
    <div class="action-btn px-6 h-3/5 w-1/5 py-4 flex items-center gap-2 rounded-md shadow-sm  " style="background-color: #E8618C;">
        <i class="pi pi-folder-plus"></i>
        <p>My folders</p>
    </div>
     -->
</template>