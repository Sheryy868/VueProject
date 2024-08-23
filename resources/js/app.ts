import { createApp } from "vue";
import app from "./main.vue";
import router from "./router/router";

const xapp = createApp(app);
xapp.use(router);
xapp.mount("#app");
