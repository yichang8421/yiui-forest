<demo>
    打开对话框
</demo>
<template>
    <Button @click="toggle">打开对话框</Button>
    <Dialog :closeOnClickOverlay="true" :onCancel="onCancel" :onOK="onOK" v-model:visible="dialogVisible">
        <template v-slot:title>
            <strong>自定义标题</strong>
        </template>
        <template v-slot:content>
            <strong>自定义提示文本</strong>
            <div>自定义询问</div>
        </template>
    </Dialog>
</template>

<script lang="ts">
    import Dialog from "../../lib/Dialog/index.vue";
    import Button from "../../lib/Button/index.vue";
    import {ref} from "vue";

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

            return {dialogVisible, toggle, onOK, onCancel};
        }
    };
</script>