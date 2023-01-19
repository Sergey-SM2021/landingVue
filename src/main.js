import { createApp } from "vue";
import App from "./App.vue";
import header from "./components/app-header.vue";
import intro from "./components/app-intro.vue";
import services from "./components/app-services.vue";
import statistics from "./components/app-statistics.vue";

const app = createApp(App);

const arr = [header, intro, services, statistics];
arr.forEach((component) => {
  app.component(component.name, component);
});

app.mount("#app");
