<demo>
    常规用法
</demo>
<template>
    <Tabs v-model:selected="name">
        <Tab title="标签1">内容1</Tab>
        <Tab title="较长的标签2">内容2</Tab>
    </Tabs>
</template>

<script lang="ts">
    import {ref} from "vue";
    import Tab from "../../lib/Tab/index.vue";
    import Tabs from "../../lib/Tabs/index.vue";
    import Demo from "../Demo/index.vue";


    export default {
        components: {Tab, Tabs, Demo},
        setup() {
            const name = ref("标签1");
            return {name, Demo};
        }
    };
</script>