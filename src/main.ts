import { createApp } from "vue";
import App from "./App.vue";
import UiIcon from "./components/common/UiIcon.vue";
import router from "./router";
import { revealDirective } from "./utils/reveal";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "./styles/tailwind.css";
import "./styles/variables.css";

createApp(App)
  .component("UiIcon", UiIcon)
  .directive("reveal", revealDirective)
  .use(router)
  .mount("#app");
