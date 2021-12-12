<template>
    <div>
        <div v-for="(t,index) in titles" :key="index">{{t}}</div>
        <component v-for="(c,index) in defaults" :is="c" :key="index"></component>
    </div>
</template>

<script lang="ts">
    import Tab from "../../lib/Tab/index.vue";

    export default {
        setup(props, context) {
            const defaults = context.slots.default();
            defaults.forEach(tag => {
                if (tag.type !== Tab) {
                    throw new Error("Tabs 组件的子组件必须是 Tab");
                }
            });

            const titles = defaults.map(tag => tag.props.title);

            return {defaults, titles};
        }
    };
</script>