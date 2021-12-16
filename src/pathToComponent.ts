import {h} from "vue";
import Markdown from "./components/Markdown/index.vue";

// h() 函数添加 key 解决路由切换，而页面不实时渲染问题
// @ts-ignore
export const pathToComponent = path => h(Markdown, {path, key: path});