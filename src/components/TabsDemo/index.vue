<template>
    <h1>Tabs 示例</h1>
    <p style="margin: 16px 0;">导航标签组件。</p>
    <Demo :component="TabsDemo1"/>
    <Attributes :data="data"/>
    <Pagejump :lastPage="{ route: '/doc/dialog', content: 'Tabs 组件' }"
              :nextPage="{ route: '/doc/switch', content: 'Switch 组件' }"/>
</template>

<script lang="ts">
    import TabsDemo1 from "../../components/TabsDemo/Tabs1.Demo.vue";
    import Demo from "../../components/Demo/index.vue";
    import Attributes from "../../components/Attributes/index.vue";
    import Pagejump from "../../components/Pagejump/index.vue";

    export default {
        components: {TabsDemo1, Demo, Attributes, Pagejump},
        setup() {
            const data = [
                {
                    params: "selected",
                    desc: "选中的tab页",
                    type: "Boolean",
                    select: "——",
                    default: "(自定义默认值)",
                },
                {
                    params: "tab-item",
                    desc: "tab页",
                    type: "component",
                    select: "——",
                    default: "——",
                },
            ];
            return {TabsDemo1, data};
        }
    };
</script>
