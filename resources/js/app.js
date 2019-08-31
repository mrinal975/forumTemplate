require('./bootstrap');
window.Vue = require('vue');
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)
Vue.use(Buefy)
Vue.use(VueRouter)
let routes = [
    { path: "/allThreads", component: require("./components/Body/AllThreads-Component.vue").default, name:"allThreads" },
    { path: "/popularthisweek", component: require("./components/Body/Popularthisweek-Component.vue").default, name:"popularthisweek" },
    { path: "/popularalltime", component: require("./components/Body/Popularalltime-Component.vue").default, name:"popularalltime" },
    { path: "/solved", component: require("./components/Body/Solved-Component.vue").default, name:"solved" },
    { path: "/unsolved", component: require("./components/Body/Unsolved-Component.vue").default, name:"unsolved" },
    { path: "/noRepliesyet", component: require("./components/Body/NoRepliesyet-Component.vue").default, name:"noRepliesyet" },
    { path: "/leaderboard", component: require("./components/Body/leaderboard-Component.vue").default, name:"leaderboard" },
];

Vue.component('header-component', require('./components/Header/HeaderComponent.vue').default);
Vue.component('sidebar-component', require('./components/Sidebar/Sidebar.vue').default);

const router = new VueRouter({
    routes // short for `routes: routes`
  })
const app = new Vue({
    router,
}).$mount('#app');;
