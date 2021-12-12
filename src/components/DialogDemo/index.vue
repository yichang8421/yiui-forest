<template>
    <div>
        <div>Dialog示例</div>
        <Button @click="toggle">toggle</Button>
        <h1>示例</h1>
        <Dialog v-model:visable="dialogVisible" :onOK="onOK" :onCancel="onCancel" :closeOnClickOverlay="true"/>
    </div>
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