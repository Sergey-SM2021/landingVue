import { createApp } from "vue";
import App from "./App.vue";
import header from "./components/app-header.vue";
import intro from "./components/app-intro.vue";
import services from "./components/app-services.vue";
import statistics from "./components/app-statistics.vue";
import SectionTitle from "./components/section-title.vue";
import AppAdvices from './components/app-advices.vue'
import AppWhoWeAre from './components/app-who-we-are.vue'

const app = createApp(App);

const arr = [header,AppWhoWeAre, SectionTitle, AppAdvices, intro, services, statistics];
arr.forEach((component) => {
  app.component(component.name, component);
});

app.mount("#app");
