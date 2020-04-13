import Vue from 'vue'
import App from './App.vue'
require("./resetcss")
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


