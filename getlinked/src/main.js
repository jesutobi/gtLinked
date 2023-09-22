import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import animate from "animate.css";
import store from "./store";

const app = createApp(App);

app.use(router);
// app.use(animate);
app.use(store);

app.mount("#app");
