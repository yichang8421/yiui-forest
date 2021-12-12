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
        app.unmount(div);
        div.remove();
    };

    const app = createApp({
        render() {
            return h(
                Dialog,
                {
                    visible: true,
                    "onUpdate:visible": (newVisible: Boolean) => {
                        if (!newVisible) {
                            close();
                        }
                    },
                    onOk, onCancel
                },
                {
                    title,
                    content,
                }
            );
        },
    });

    app.mount(div);
};