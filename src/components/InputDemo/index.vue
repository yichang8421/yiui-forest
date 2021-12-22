<template>
    <h1>Input 示例</h1>
    <p style="margin: 16px 0;">文本输入框组件。</p>
    <Demo :component="InputDemo1"/>
    <Demo :component="InputDemo2"/>
    <Demo :component="InputDemo3"/>
    <Attributes :data="data"/>
    <Pagejump :lastPage="{ route: '/doc/button', content: 'Button 组件' }"
              :nextPage="{ route: '/doc/dialog', content: 'Dialog 组件' }"/>
</template>

<script lang="ts">
    import InputDemo1 from "../../components/InputDemo/Input1.demo.vue";
    import InputDemo2 from "../../components/InputDemo/Input2.demo.vue";
    import InputDemo3 from "../../components/InputDemo/Input3.demo.vue";
    import Demo from "../../components/Demo/index.vue";
    import Attributes from "../../components/Attributes/index.vue";
    import Pagejump from "../../components/Pagejump/index.vue";

    export default {
        components: {Demo, Attributes, Pagejump},
        setup() {
            const data = [
                {
                    params: "content",
                    desc: "类型",
                    type: "String",
                    select: "content | password",
                    default: "content",
                },
                {
                    params: "placeholder",
                    desc: "输入框占位文本",
                    type: "String",
                    select: "——",
                    default: "请输入内容",
                },
                {
                    params: "disabled",
                    desc: "是否禁用",
                    type: "Boolean",
                    select: "true | false",
                    default: "false",
                },
                {
                    params: "v-model:content",
                    desc: "双向绑定文本",
                    type: "——",
                    select: "——",
                    default: "——",
                }
            ];
            return {InputDemo1, InputDemo2, InputDemo3, data};
        }
    };
</script>