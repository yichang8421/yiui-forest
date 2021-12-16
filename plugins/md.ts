// @ts-nocheck
import path from "path";
import fs from "fs";
import {marked} from "marked";

const mdToJs = str => {
    const content = JSON.stringify(marked(str));
    return `export default ${content}`;
};

export function md() {
    return {
        configureServer: [ // 用于开发
            async ({app}) => {
                app.use(async (ctx, next) => { // koa
                    if (ctx.path.endsWith(".md")) {     // 当路径为 .md 结尾时
                        ctx.type = "js";      // 将文件类型变为 js
                        const filePath = path.join(process.cwd(), ctx.path);
                        ctx.body = mdToJs(fs.readFileSync(filePath).toString());      // 文件内容变成 js
                    } else {
                        await next();
                    }
                });
            },
        ],
        transforms: [{  // 用于 rollup // 插件
            test: context => context.path.endsWith(".md"),
            transform: ({code}) => mdToJs(code)
        }]
    };
}