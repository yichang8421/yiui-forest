<template>
    <div>
        <div>Dialog示例</div>
        <h1>示例1</h1>
        <Button @click="toggle">toggle</Button>
        <Dialog v-model:visible="dialogVisible" :onOK="onOK" :onCancel="onCancel" :closeOnClickOverlay="true">
            <template v-slot:title>
                <strong>自定义标题</strong>
            </template>
            <template v-slot:content>
                <strong>自定义提示文本</strong>
                <div>自定义询问</div>
            </template>
        </Dialog>
        <h1>示例2</h1>
        <Button @click="showDialog">show</Button>
    </div>
</template>

<script lang="ts">
    import {ref, h} from "vue";
    import Dialog from "../../lib/Dialog/index.vue";
    import Button from "../../lib/Button/index.vue";
    import {openDialog} from "../../lib/openDialog.ts";

    export default {
        components: {Dialog, Button},
        setup() {
            const dialogVisible = ref(false);

            const toggle = () => {
                dialogVisible.value = !dialogVisible.value;
            };

            const onOK = () => {
                console.log("Do something");
                return true;    // 可以通过 return false; 阻止对话框关闭
            };

            const onCancel = () => {
                console.log("bye");
                return true;    //可以通过 return false; 阻止对话框关闭
            };

            const showDialog = () => {
                openDialog({
                    title: h(`strong`, {}, "标题"),
                    content: "提示文本",
                    onOk() {
                        console.log("ok");
                    },
                    onCancel() {
                        console.log("cancel");
                    }
                });
            };

            return {dialogVisible, toggle, onOK, onCancel, showDialog};
        }
    };
</script>