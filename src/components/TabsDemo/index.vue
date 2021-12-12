<template>
    <div>Tabs 示例</div>
    <Tabs>
        <Tab>内容1</Tab>
        <Tab>内容2</Tab>
    </Tabs>
</template>

<script lang="ts">
    import Tab from "../../lib/Tab/index.vue";
    import Tabs from "../../lib/Tabs/index.vue";

    export default {
        components: {Tab, Tabs}
    };
</script>
