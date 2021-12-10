import {createApp} from "vue";
import {createRouter, createWebHashHistory} from "vue-router";
import App from "./App.vue";
import Home from "./views/Home/index.vue";
import Doc from "./views/Doc/index.vue";
import "./index.scss";

const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
        {path: "/", component: Home},
        {path: "/doc", component: Doc},
    ]
});

const app = createApp(App);
app.use(router);
app.mount("#app");
