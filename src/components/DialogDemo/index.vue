<template>
    <div>
        <h1>Dialog 示例</h1>
        <p style="margin: 16px 0;">文本弹框组件。一般与 Input 和 Button 组件配合使用。</p>
        <Demo :component="DialogDemo1"/>
        <Demo :component="DialogDemo2"/>
        <Attributes :data="data"/>
        <Pagejump :lastPage="{ route: '/doc/input', content: 'Input 组件' }"
                  :nextPage="{ route: '/doc/tabs', content: 'Tab 组件' }"/>
    </div>
</template>

<script lang="ts">
    import DialogDemo1 from "../../components/DialogDemo/Dialog1.Demo.vue";
    import DialogDemo2 from "../../components/DialogDemo/Dialog2.Demo.vue";
    import Demo from "../../components/Demo/index.vue";
    import Attributes from "../../components/Attributes/index.vue";
    import Pagejump from "../../components/Pagejump/index.vue";

    export default {
        components: {DialogDemo1, DialogDemo2, Demo, Attributes, Pagejump},
        setup() {
            const data = [
                {
                    params: "visible",
                    desc: "是否展示",
                    type: "boolean",
                    select: "true | false",
                    default: "false",
                },
                {
                    params: "closeOnClickOverlay",
                    desc: "是否点击遮罩层关闭弹出框",
                    type: "boolean",
                    select: "true | false",
                    default: "false",
                },
                {
                    params: "onOK",
                    desc: "确认触发函数",
                    type: "function",
                    select: "()=>{}",
                    default: "--",
                },
                {
                    params: "onCancel",
                    desc: "取消触发函数",
                    type: "function",
                    select: "()=>{}",
                    default: "--",
                },
                {
                    params: "v-slot:title",
                    desc: "对话框标题插槽",
                    type: "——",
                    select: "——",
                    default: "——",
                },
                {
                    params: "v-slot:content",
                    desc: "对话框内容插槽",
                    type: "——",
                    select: "——",
                    default: "——",
                },
            ];
            return {DialogDemo1, DialogDemo2, data};
        }
    };
</script>