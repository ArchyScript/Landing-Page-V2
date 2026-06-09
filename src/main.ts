import { createApp } from "vue";
import App from "./App.vue";
import UiIcon from "./components/common/UiIcon.vue";
import router from "./router";
import { revealDirective } from "./utils/reveal";
import "./styles/tailwind.css";
import "./styles/fonts.css";
import "./styles/variables.css";

createApp(App)
  .component("UiIcon", UiIcon)
  .directive("reveal", revealDirective)
  .use(router)
  .mount("#app");
