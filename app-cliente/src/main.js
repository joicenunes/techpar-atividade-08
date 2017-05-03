const Vue = require('vue');
const VueRouter = require('vue-router');
Vue.use(VueRouter);

const router = new VueRouter([
  { path: '/listar', component: require("./listar.vue")},
  { path: '/salvar', component: require("./salvar.vue")}
])

//view-model
const app = new Vue({
  el: '#app',
  render: (r) => r(require("./app.vue")),
  router
});