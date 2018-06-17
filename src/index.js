import Vue from 'vue';
import App from './App.vue';
import { vLoading } from 'vue-any-loading';

Vue.directive('loading', vLoading);

new Vue({
  el: '#app',
  render: h => h(App)
});
