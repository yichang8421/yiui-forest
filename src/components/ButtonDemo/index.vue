<template>
    <div>示例</div>
    <h1>类型示例</h1>
    <div>
        <Button>HELLO</Button>
        <Button theme="link">HELLO</Button>
        <Button theme="text">HELLO</Button>
    </div>
    <h1>尺寸示例</h1>
    <div>
        <Button size="big">大大大</Button>
        <Button>普通通</Button>
        <Button size="small">小小小</Button>
    </div>
    <div>
        <Button size="big" theme="link">大大大</Button>
        <Button theme="link">普通通</Button>
        <Button size="small" theme="link">小小小</Button>
    </div>
    <div>
        <Button size="big" theme="text">大大大</Button>
        <Button theme="text">普通通</Button>
        <Button size="small" theme="text">小小小</Button>
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