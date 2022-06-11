import {createApp} from "vue";
import "github-markdown-css";
import "./lib/yiui.scss";
import "./index.scss";
import App from "./App.vue";
import {router} from "./routers/router";

const app = createApp(App);
app.use(router);
app.mount("#app");