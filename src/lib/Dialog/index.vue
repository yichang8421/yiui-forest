<template>
    <div>dialog</div>
    <div>
        <header>标题</header>
        <main>
            <p>提示</p>
            <p>这是一个对话框</p>
        </main>
        <footer>
            <Button>确定</Button>
            <Button>取消</Button>
        </footer>
    </div>
</template>

<script lang="ts">
    import Button from "../../lib/Button/index.vue";

    export default {
        components: {Button}
    };
</script>