<template>
    <router-view/>
</template>

<script>
    import {ref, provide} from "vue";
    import {router} from "./router";

    export default {
        name: 'App',
        setup() {
            // 一开始，当窗口大于 500px 时，默认展示aside
            const width = document.documentElement.clientWidth;
            const asideVisible = ref(width > 500);
            provide("asideVisible", asideVisible);

            // 切换路由之后，关闭 aside 标签
            router.afterEach(() => {
                asideVisible.value = false;
            });
        }
    };
</script>
