<template>
    <div>
        <slot/>
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

            return {defaults};
        }
    };
</script>