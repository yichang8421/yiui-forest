import Home from "../views/Home/index.vue";
import Doc from "../views/Doc/index.vue";
import intro from "../markdown/intro.md";
import getStart from "../markdown/get-start.md";
import install from "../markdown/install.md";
import SwitchDemo from "../components/SwitchDemo/index.vue";
import ButtonDemo from "../components/ButtonDemo/index.vue";
import DialogDemo from "../components/DialogDemo/index.vue";
import TabsDemo from "../components/TabsDemo/index.vue";
import InputDemo from "../components/InputDemo/index.vue";
import LayoutDemo from "../components/LayoutDemo/index.vue";
import Pagination from "../components/PaginationDemo/index.vue";
import {h} from "vue";
import Markdown from "../components/Markdown/index.vue";

const md = (content: any) => h(Markdown, {content, key: content});

export default [
    {path: "/home", component: Home},
    {
        path: "/doc",
        redirect: "/doc",
        component: Doc,
        children: [
            {path: "intro", component: md(intro)},
            {path: "get-start", component: md(getStart)},
            {path: "install", component: md(install)},
            {path: "switch", component: SwitchDemo},
            {path: "button", component: ButtonDemo},
            {path: "dialog", component: DialogDemo},
            {path: "tabs", component: TabsDemo},
            {path: "input", component: InputDemo},
            {path: "layout", component: LayoutDemo},
            {path: "pagination", component: Pagination},
        ],
    },
    {path: "/", redirect: "/home"}
];