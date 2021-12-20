<template>
    <h1>Tabs 示例</h1>
    <Demo :component="TabsDemo1"/>
</template>

<script lang="ts">
    import TabsDemo1 from "../../components/TabsDemo/Tabs1.Demo.vue";
    import Demo from "../../components/Demo/index.vue";

    export default {
        components: {Demo, TabsDemo1},
        setup() {
            return {TabsDemo1, Demo};
        }
    };
</script>
