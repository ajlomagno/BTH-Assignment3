import Vue from 'vue'
import App from './App.vue'
import aplayer from '@moefe/vue-aplayer';

const eventHub = new Vue() // Single event hub

Vue.use(aplayer);

new Vue({
  el: '#app',
  render: h => h(App)
})
