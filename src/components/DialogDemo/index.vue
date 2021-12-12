<template>
    <div style="position: relative;z-index: 1">
        <div>Dialog示例</div>
        <h1>示例</h1>
        <Button @click="toggle">toggle</Button>
        <Dialog v-model:visable="dialogVisible" :onOK="onOK" :onCancel="onCancel" :closeOnClickOverlay="true">
            <template v-slot:title>
                <strong>自定义标题</strong>
            </template>
            <template v-slot:content>
                <strong>自定义提示文本</strong>
                <div>自定义询问</div>
            </template>
        </Dialog>
    </div>
    <div style="position: relative; z-index: 2; width: 300px; height: 300px; background: red;"></div>
</template>

<script lang="ts">
    import {ref} from "vue";
    import Dialog from "../../lib/Dialog/index.vue";
    import Button from "../../lib/Button/index.vue";

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
                return;
            };
            return {dialogVisible, toggle, onOK, onCancel};
        }
    };
</script>