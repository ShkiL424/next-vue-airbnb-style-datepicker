import { DefineComponent, Plugin } from 'vue';

declare const NextVueAirbnbStyleDatepicker: DefineComponent & { install: Exclude<Plugin['install'], undefined> };
export default NextVueAirbnbStyleDatepicker;
