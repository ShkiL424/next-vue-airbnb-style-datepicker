<template>
  <div id="app">
    <div class="datepicker-container with-input">
      <h3>Range datepicker with input</h3>
      <div class="datepicker-trigger">
        <input
            type="text"
            id="datepicker-input-trigger"
            placeholder="Select dates"
        >

        <next-vue-airbnb-style-datepicker
            :trigger-element-id="'datepicker-input-trigger'"
            :mode="'range'"
            :date-one="inputDateOne"
            :date-two="inputDateTwo"
            :min-date="'2018-08-28'"
            :months-to-show="2"
            :show-action-buttons="true"
            :show-month-year-select="true"
            @date-one-selected="val => { inputDateOne = val }"
            @date-two-selected="val => { inputDateTwo = val }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NextVueAirbnbStyleDatepicker from '@/components/next-vue-airbnb-style-datepicker.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    NextVueAirbnbStyleDatepicker
  },
  data () {
    return {
      inputDateOne: '',
      inputDateTwo: '',
    }
  }
});
</script>
