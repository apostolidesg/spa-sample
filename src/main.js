import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router/index.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import i18n, { loadAllContent } from "./i18n";

const app = createApp(App);
app.use(router);
app.use(i18n);

await loadAllContent();
app.mount("#app");
