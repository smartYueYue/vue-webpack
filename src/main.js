import Vue from 'vue'
import App from './App.vue'

// const init = new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
  render: (h) => h(App)
}).$mount(root)
// const init = new Vue({
//   el: '#app',
//   render: h => h(App)
// })