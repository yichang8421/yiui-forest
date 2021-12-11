import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./views/Home/index.vue";
import Doc from "./views/Doc/index.vue";
import SwitchDemo from "./components/SwitchDemo/index.vue";
import ButtonDemo from "./components/ButtonDemo/index.vue";
import DialogDemo from "./components/DialogDemo/index.vue";
import TabsDemo from "./components/TabsDemo/index.vue";

const history = createWebHashHistory();
export const router = createRouter({
    history,
    routes: [
        {path: "/", component: Home},
        {
            path: "/doc",
            component: Doc,
            children: [
                {path: "switch", component: SwitchDemo},
                {path: "button", component: ButtonDemo},
                {path: "dialog", component: DialogDemo},
                {path: "tabs", component: TabsDemo},
            ],
        },
    ]
});