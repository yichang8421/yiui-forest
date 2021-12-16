import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./views/Home/index.vue";
import Doc from "./views/Doc/index.vue";
import SwitchDemo from "./components/SwitchDemo/index.vue";
import ButtonDemo from "./components/ButtonDemo/index.vue";
import DialogDemo from "./components/DialogDemo/index.vue";
import TabsDemo from "./components/TabsDemo/index.vue";
import Install from "./views/Install/index.vue";
import GetStart from "./views/GetStart/index.vue";
import Intro from "./views/Intro/index.vue";
import DocDemo from "./views/DocDemo/index.vue";

const history = createWebHashHistory();
export const router = createRouter({
    history,
    routes: [
        {path: "/", component: Home},
        {
            path: "/doc",
            component: Doc,
            children: [
                {path: "", component: DocDemo},
                {path: "intro", component: Intro},
                {path: "get-start", component: GetStart},
                {path: "install", component: Install},
                {path: "switch", component: SwitchDemo},
                {path: "button", component: ButtonDemo},
                {path: "dialog", component: DialogDemo},
                {path: "tabs", component: TabsDemo},
            ],
        },
    ]
});