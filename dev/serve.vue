<script lang="ts">
import { defineComponent } from 'vue';
import NextVueAirbnbStyleDatepicker from '@/next-vue-airbnb-style-datepicker.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    NextVueAirbnbStyleDatepicker
  }
});
</script>

<template>
  <div id="app">
    <next-vue-airbnb-style-datepicker />
  </div>
</template>
