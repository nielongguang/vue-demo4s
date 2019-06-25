import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
 routes: [
  {
   path: "/",
   name: "home",
   component: Home
  },
  {
   path: "/about",
   name: "about",
   component: () => import(/* webpackChunkName: "about" */ "./views/slot-demo-parent.vue")
  },
  {
   path: "/change",
   name: "change",
   component: () => import(/* webpackChunkName: "about" */ "./views/iview-table-chage.vue")
  }
 ]
});
