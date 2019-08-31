require('./bootstrap');
window.Vue = require('vue');
import VueRouter from 'vue-router'

Vue.use(VueRouter)
let routes = [
    { path: "/foo", component: require("./components/foo.vue").default, name:"foo" },
];

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('sidebar-component', require('./components/Sidebar/Sidebar.vue').default);

const router = new VueRouter({
    routes // short for `routes: routes`
  })
const app = new Vue({
    router,
}).$mount('#app');;
