<demo>
    size 属性
</demo>
<template>
    <div>
        <Button size="small">小按钮</Button>
        <Button>普通</Button>
        <Button size="big">大按钮</Button>
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