import Vue from 'vue'
import App from './App.vue'
import aplayer from '@moefe/vue-aplayer';

Vue.use(aplayer);

new Vue({
  el: '#app',
  render: h => h(App)
})
