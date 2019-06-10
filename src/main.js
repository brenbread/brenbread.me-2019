import Vue from 'vue'
import '@inkline/inkline/dist/inkline.css'
import Inkline from '@inkline/inkline'

// import 'babel-polyfill'
import App from './App.vue'
// import 'vuetify/dist/vuetify.min.css'
require('vue-ionicons/ionicons.css')

Vue.use(Inkline)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
