<demo>
    一键打开对话框
</demo>
<template>
    <div>
        <Button @click="showDialog">打开对话框</Button>
    </div>
</template>

<script lang="ts">
    import {h} from "vue";
    import {openDialog} from "../../lib/openDialog.ts";
    import Dialog from "../../lib/Dialog/index.vue";
    import Button from "../../lib/Button/index.vue";

    export default {
        components: {Dialog, Button},
        setup() {
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

            return {showDialog};
        }
    };
</script>