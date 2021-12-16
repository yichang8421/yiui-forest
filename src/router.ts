import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./views/Home/index.vue";
import Doc from "./views/Doc/index.vue";
import SwitchDemo from "./components/SwitchDemo/index.vue";
import ButtonDemo from "./components/ButtonDemo/index.vue";
import DialogDemo from "./components/DialogDemo/index.vue";
import TabsDemo from "./components/TabsDemo/index.vue";
import DocDemo from "./views/DocDemo/index.vue";
import {pathToComponent} from "./pathToComponent";

const history = createWebHashHistory();

// @ts-ignore
const filenameToPath = (filename) => `../../markdown/${filename}.md`;

export const router = createRouter({
    history,
    routes: [
        {path: "/", component: Home},
        {
            path: "/doc",
            component: Doc,
            children: [
                {path: "", component: DocDemo},
                {path: "intro", component: pathToComponent(filenameToPath("intro"))},
                {path: "get-start", component: pathToComponent(filenameToPath("get-start"))},
                {path: "install", component: pathToComponent(filenameToPath("install"))},
                {path: "switch", component: SwitchDemo},
                {path: "button", component: ButtonDemo},
                {path: "dialog", component: DialogDemo},
                {path: "tabs", component: TabsDemo},
            ],
        },
    ]
});