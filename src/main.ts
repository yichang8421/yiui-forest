import {createApp} from "vue";
import {createRouter, createWebHashHistory} from "vue-router";
import App from "./App.vue";
import Home from "./components/Home/index.vue";
import Components from "./components/Components/index.vue";
import "./index.css";

const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
        {path: "/", component: Home},
        {path: "/components", component: Components},
    ]
});

const app = createApp(App);
app.use(router);
app.mount("#app");
