<demo>
    disabled 属性
</demo>
<template>
    <div>
        <Button disabled>禁用按钮</Button>
        <Button disabled theme="link">禁用链接按钮</Button>
        <Button disabled theme="text">禁用文本按钮</Button>
    </div>
</template>

<script lang="ts">
    import Button from "../../lib/Button/index.vue";

    export default {
        components: {
            Button,
        },
    };
</script>