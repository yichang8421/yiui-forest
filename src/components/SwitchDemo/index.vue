<template>
    <div>
        <h1>Switch 示例</h1>
        <p style="margin: 16px 0;">开关组件。</p>
        <Demo :component="SwitchDemo1"/>
        <Demo :component="SwitchDemo2"/>
        <Attributes :data="data"/>
        <Pagejump :lastPage="{ route: '/doc/tabs', content: 'Tab 组件' }"
                  :nextPage="{ route: '/doc/layout', content: 'Layout 组件' }"/>
    </div>
</template>

<script lang="ts">
    import SwitchDemo1 from "../../components/SwitchDemo/Switch1.demo.vue";
    import SwitchDemo2 from "../../components/SwitchDemo/Switch2.demo.vue";
    import Demo from "../../components/Demo/index.vue";
    import Attributes from "../../components/Attributes/index.vue";
    import Pagejump from "../../components/Pagejump/index.vue";

    export default {
        components: {Demo, Attributes, Pagejump},
        setup() {
            const data = [
                {
                    params: "value",
                    desc: "是否选中",
                    type: "Boolean",
                    select: "true | false",
                    default: "false",
                },
                {
                    params: "disabled",
                    desc: "是否禁用",
                    type: "Boolean",
                    select: "true | false",
                    default: "false",
                },
            ];
            return {SwitchDemo1, SwitchDemo2, data};
        }
    };
</script>