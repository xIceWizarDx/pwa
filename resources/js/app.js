import './bootstrap';
import { createApp } from 'vue';
import Wellcomee from './components/Wellcomee.vue';
import FinanceControl from './components/FinanceControl.vue';

createApp({})
    .component('wellcomee', Wellcomee)
    .component('finance-control', FinanceControl)
    .mount('#app');
