<template>
    <div class="yiui-tabs">
        <div class="yiui-tabs-nav">
            <div :class="{selected:t===selected}" :key="index" @click="onSelect(t)" class="yiui-tabs-nav-item"
                 v-for="(t,index) in titles">
                {{t}}
            </div>
        </div>
        <div class="yiui-tabs-content">
            <component :class="{selected:c.props.title=== selected}" :is="c" :key="index" class="yiui-tabs-content-item"
                       v-for="(c,index) in defaults"></component>
        </div>
    </div>
</template>

<script lang="ts">
    import Tab from "../../lib/Tab/index.vue";

    export default {
        props: {
            selected: {
                type: String,
            }
        },
        setup(props, context) {
            const defaults = context.slots.default?.() || [];
            // defaults 数组存放着所有子组件
            defaults.forEach(tag => {
                if (tag.type !== Tab) {
                    throw new Error("Tabs 组件的子组件必须是 Tab");
                }
            });

            const titles = defaults.map(tag => tag.props!.title);
            const onSelect = (title: string) => {
                // 选中 title 时，把父元素的 selected 值设为当前title 值，当当前选中的标签与 title 相等时，添加 selected 样式名。
                context.emit("update:selected", title);
            };

            return {defaults, titles, onSelect};
        }
    };
</script>

<style lang="scss">
    $blue: #40a9ff;
    $color: #333;
    $border-color: #d9d9d9;

    .yiui-tabs {
        &-nav {
            display: flex;
            color: $color;
            border-bottom: 1px solid $border-color;

            &-item {
                padding: 8px 0;
                margin: 0 16px;
                cursor: pointer;

                &:first-child {
                    margin-left: 0;
                }

                &.selected {
                    color: $blue;
                }
            }
        }

        &-content {
            padding: 8px 0;

            &-item {
                display: none;

                &.selected {
                    display: inline-block;
                }
            }
        }
    }
</style>