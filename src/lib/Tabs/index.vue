<template>
    <div>
        <slot/>
        <!-- component 渲染一个“元组件”为动态组件。依 is 的值，来决定哪个组件被渲染。is 的值是一个字符串，它既可以是 HTML 标签名称也可以是组件名称。 -->
        <component :is="defaults[1]"></component>
        <!-- 可以渲染出来，说明 context.slots.default()[1] 是一个组件 -->
    </div>
</template>

<script lang="ts">
    import Tab from "../../lib/Tab/index.vue";

    export default {
        setup(props, context) {
            const defaults = context.slots.default();
            // 验证 defaults[0].type === Tab
            console.log(defaults[0].type);
            console.log(Tab);
            if (defaults[0].type === Tab) {
                console.log("true");
            }

            return {defaults};
        }
    };
</script>