<template>
    <div>示例</div>
    <h1>示例1</h1>
    <div>
        <Button>HELLO</Button>
        <Button theme="button">HELLO</Button>
        <Button theme="link">HELLO</Button>
        <Button theme="text">HELLO</Button>
    </div>
    <h1>示例2</h1>
    <div>
        <Button size="big">大大大</Button>
        <Button >普通</Button>
        <Button size="small">小小小</Button>
    </div>
</template>

<script lang="ts">
    import Button from "../../lib/Button/index.vue";

    export default {
        components: {Button},
        setup() {
            const onClick = () => {
                console.log("hello");
            };

            return {onClick};
        }
    };
</script>