import {createApp, h, VNode} from "vue";
import Dialog from "../lib/Dialog/index.vue";

type Options = {
    title: VNode,
    content: String,
    onOk: Function,
    onCancel: Function
}

export const openDialog = (options: Options) => {
    const {title, content, onOk, onCancel} = options;
    console.log(onOk);
    const div = document.createElement("div");
    document.body.appendChild(div);

    const close = () => {
        dialogApp.unmount(div);
        div.remove();
    };

    const dialogApp = createApp({
        render() {
            return h(
                Dialog,
                // 属性和事件
                {
                    visible: true,
                    // 监听 update:visible 事件，当其被触发时，若收到 visible 参数为 false，则直接销毁 Dialog 组件(dialogApp)和创建的 div 元素。
                    "onUpdate:visible": (newVisible: Boolean) => {
                        if (!newVisible) {
                            close();
                        }
                    },
                    onOk, onCancel
                },
                // slot 参数
                {
                    title,
                    content,
                }
            );
        },
    });

    dialogApp.mount(div);
};