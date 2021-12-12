<template>
    <div>
        <div>Dialog示例</div>
        <Button @click="toggle">toggle</Button>
        <h1>示例</h1>
        <Dialog :visable="dialogVisible" @update:visable="dialogVisible=$event"/>
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
            return {dialogVisible, toggle};
        }
    };
</script>