import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./views/Home/index.vue";
import Doc from "./views/Doc/index.vue";
import SwitchDemo from "./components/SwitchDemo/index.vue";

const history = createWebHashHistory();
export const router = createRouter({
    history,
    routes: [
        {path: "/", component: Home},
        {
            path: "/doc",
            component: Doc,
            children: [{path: "switch", component: SwitchDemo}]
        },
    ]
});