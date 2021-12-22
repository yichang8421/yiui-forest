<template>
    <h1>Button 示例</h1>
    <p style="margin: 16px 0;">按钮组件。</p>
    <Demo :component="ButtonDemo1"/>
    <Demo :component="ButtonDemo2"/>
    <Demo :component="ButtonDemo3"/>
    <Demo :component="ButtonDemo4"/>
    <Attributes :data="data"/>
</template>

<script lang="ts">
    import ButtonDemo1 from "../../components/ButtonDemo/Button1.Demo.vue";
    import ButtonDemo2 from "../../components/ButtonDemo/Button2.Demo.vue";
    import ButtonDemo3 from "../../components/ButtonDemo/Button3.Demo.vue";
    import ButtonDemo4 from "../../components/ButtonDemo/Button4.Demo.vue";
    import Demo from "../../components/Demo/index.vue";
    import Attributes from "../../components/Attributes/index.vue";

    export default {
        components: {ButtonDemo1, ButtonDemo2, ButtonDemo3, ButtonDemo4, Demo, Attributes},
        setup() {
            const data = [
                {
                    params: "theme",
                    desc: "选择主题样式",
                    type: "String",
                    select: "button | main | success | danger | warning | link | text",
                    default: "button",
                },
                {
                    params: "size",
                    desc: "大小尺寸",
                    type: "String",
                    select: "small | normal | big",
                    default: "normal",
                },
                {
                    params: "disabled",
                    desc: "是否禁用",
                    type: "Boolean",
                    select: "true | false",
                    default: "false",
                },
                {
                    params: "loading",
                    desc: "加载中",
                    type: "Boolean",
                    select: "true | false",
                    default: "false",
                },
            ];

            const onClick = () => {
                console.log("Do something...");
            };

            return {onClick, ButtonDemo1, ButtonDemo2, ButtonDemo3, ButtonDemo4, data};
        }
    };
</script>