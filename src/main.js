import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes.js";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    //scroll to saved position (for instance, if user hits back button)
    if (savedPosition) {
      return savedPosition;
    }
    //scroll to has if there is one
    if (to.hash) {
      return { selector: to.hash };
    }
    //default to top of page
    return { x: 0, y: 0 };
  }
});

//set up a check that executes before each route
router.beforeEach((to, from, next) => {
  console.log("global beforeEach");
  next();
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
