import { createRouter, createWebHistory } from "@ionic/vue-router";
import Home from "@/views/Home.vue";
import ScanResult from "@/views/ScanResult";

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/scan-result/:result?",
    name: "ScanResult",
    component: ScanResult
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
