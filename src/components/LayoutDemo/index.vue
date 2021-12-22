<template>
    <h1>Layout 示例</h1>
    <Demo :component="LayoutDemo1"/>
    <Demo :component="LayoutDemo2"/>
    <Demo :component="LayoutDemo3"/>
    <Demo :component="LayoutDemo4"/>
</template>

<script lang="ts">
    import LayoutDemo1 from "../../components/LayoutDemo/Layout1.demo.vue";
    import LayoutDemo2 from "../../components/LayoutDemo/Layout2.demo.vue";
    import LayoutDemo3 from "../../components/LayoutDemo/Layout3.demo.vue";
    import LayoutDemo4 from "../../components/LayoutDemo/Layout4.demo.vue";
    import Demo from "../../components/Demo/index.vue";

    export default {
        components: {Demo},
        setup() {
            return {LayoutDemo1, LayoutDemo2, LayoutDemo3, LayoutDemo4};
        }
    };
</script>