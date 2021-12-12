<template>
    <div>示例</div>
    <h1>类型示例</h1>
    <div>
        <Button>button</Button>
        <Button theme="link">link</Button>
        <Button theme="text">text</Button>
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
    <h1>等级示例</h1>
    <div>
        <Button level="importent">重要按钮</Button>
        <Button >普通按钮</Button>
        <Button level="danger">危险按钮</Button>
    </div>
    <div>
        <Button level="importent" theme="link">重要链接按钮</Button>
        <Button  theme="link">普通链接按钮</Button>
        <Button level="danger" theme="link">危险链接按钮</Button>
    </div>
    <div>
        <Button level="importent" theme="text">重要文字按钮</Button>
        <Button  theme="text">普通文字按钮</Button>
        <Button level="danger" theme="text">危险文字按钮</Button>
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