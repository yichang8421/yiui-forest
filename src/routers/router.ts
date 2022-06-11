import {createRouter, createWebHashHistory} from "vue-router";
import Markdown from "../components/Markdown/index.vue";
import {h} from "vue";
import routes from "./route";

const history = createWebHashHistory();
// @ts-ignore
const md = (content) => h(Markdown, {content, key: content});
export const router = createRouter({
    history,
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return {top: 0};
    },
});