<script setup lang="ts">
import { onMounted } from 'vue';
import DatePicker from 'primevue/datepicker';
onMounted(() => {
  console.log('Ну привет пидорас!');
});
</script>

<template>
  <DatePicker
    show-icon
    fluid
    icon-display="input"
    time-only
  >
    <template #inputicon="slotProps">
      <i
        class="pi pi-clock"
        @click="slotProps.clickCallback"
      />
    </template>
  </DatePicker>
</template>
