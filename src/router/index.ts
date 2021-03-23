import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    //meta: { transition: "slide-right" },
  },
  {
    path: "/other/contact",
    name: "Contact",
    component: Contact,
    //meta: { transition: "slide-left" },
  },
];

const router = createRouter({
  // For basic Vite doesn't pass history arg
  history: createWebHistory(),
  routes,
});

// Route-Based Dynamic Transition Navigation Hook router.afterEach()
router.afterEach((to, from) => {
  const toDepth = to.path.split("/").length; // 2
  const fromDepth = from.path.split("/").length; // 2
  console.log(
    "router.afterEach",
    "toDepth: ",
    toDepth,
    "fromDepth: ",
    fromDepth
  );
  to.meta.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
});

export default router;
