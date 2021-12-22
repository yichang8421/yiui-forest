import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./views/Home/index.vue";
import Doc from "./views/Doc/index.vue";
import SwitchDemo from "./components/SwitchDemo/index.vue";
import ButtonDemo from "./components/ButtonDemo/index.vue";
import DialogDemo from "./components/DialogDemo/index.vue";
import TabsDemo from "./components/TabsDemo/index.vue";
import InputDemo from "./components/InputDemo/index.vue";
import LayoutDemo from "./components/LayoutDemo/index.vue";
import Markdown from "./components/Markdown/index.vue";
import {h} from "vue";
import intro from "./markdown/intro.md";
import getStart from "./markdown/get-start.md";
import install from "./markdown/install.md";

const history = createWebHashHistory();
// @ts-ignore
const md = (content) => h(Markdown, {content, key: content});
export const router = createRouter({
    history,
    routes: [
        {path: "/", component: Home},
        {
            path: "/doc",
            component: Doc,
            children: [
                {path: "", component: md(intro)},
                {path: "intro", component: md(intro)},
                {path: "get-start", component: md(getStart)},
                {path: "install", component: md(install)},
                {path: "switch", component: SwitchDemo},
                {path: "button", component: ButtonDemo},
                {path: "dialog", component: DialogDemo},
                {path: "tabs", component: TabsDemo},
                {path: "input", component: InputDemo},
                {path: "layout", component: LayoutDemo},
            ],
        },
    ]
});