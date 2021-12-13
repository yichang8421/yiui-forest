<template>
    <div>Tabs 示例</div>
    <Tabs v-model:selected="name">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2">内容2</Tab>
    </Tabs>
</template>

<script lang="ts">
    import {ref} from "vue";
    import Tab from "../../lib/Tab/index.vue";
    import Tabs from "../../lib/Tabs/index.vue";

    export default {
        components: {Tab, Tabs},
        setup() {
            const name = ref("导航1");
            return {name};
        }
    };
</script>
