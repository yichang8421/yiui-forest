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
            const asideVisible = ref(document.documentElement.clientWidth > 500);
            provide("asideVisible", asideVisible);

            // 移动端切换路由之后，关闭 aside 标签
            router.afterEach(() => {
                if (document.documentElement.clientWidth <= 500) {
                    console.log("appsetup", document.documentElement.clientWidth);
                    asideVisible.value = false;
                }
            });
        }
    };
</script>
