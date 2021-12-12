<template>
    <div>Tabs 示例</div>
    <Tabs>
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2">内容2</Tab>
    </Tabs>
</template>

<script lang="ts">
    import Tab from "../../lib/Tab/index.vue";
    import Tabs from "../../lib/Tabs/index.vue";

    export default {
        components: {Tab, Tabs}
    };
</script>
