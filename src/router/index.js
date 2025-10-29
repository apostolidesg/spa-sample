import { createRouter, createWebHistory } from "vue-router";
import { ROUTES } from "../constants/commonConstants";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Services from "../pages/Services.vue";
import ServicesAndContact from "../pages/ServicesAndContact.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  { ...ROUTES.HOME, component: Home, alias: "/home" },
  { ...ROUTES.ABOUT, component: About },
  { ...ROUTES.SERVICES, component: Services },
  { ...ROUTES.SERVICES_CONTACT, component: ServicesAndContact },
  { ...ROUTES.CONTACT, component: Contact },
  { ...ROUTES.NOT_FOUND, component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
