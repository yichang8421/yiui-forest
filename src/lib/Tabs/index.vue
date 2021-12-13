<template>
    <div class="yiui-tabs">
        <div class="yiui-tabs-nav">
            <div :class="{selected:t===selected}" :key="index" @click="onSelect(t)" class="yiui-tabs-nav-item"
                 v-for="(t,index) in titles">
                {{t}}
            </div>
        </div>
        <div class="yiui-tabs-content">
            <!-- 渲染选中的 tab 组件时，必须告诉 vue 发生变化的组件和对应的 key ，否则组件不会渲染和更新。目前需要渲染的组件是 current，对应的 key 是 current.props.title -->
            <component :is="current" :key="current.props.title" class="yiui-tabs-content-item"></component>
        </div>
    </div>
</template>

<script lang="ts">
    import {computed} from "vue";
    import Tab from "../../lib/Tab/index.vue";

    export default {
        props: {
            selected: {
                type: String,
            }
        },
        setup(props, context) {
            const defaults = context.slots.default?.() || [];
            // defaults 数组存放着 tabs 的所有子组件
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

            const current = computed(() => {
                // 找到选中的组件（判断依据是当前tab的title与收到的props的title相同）。可以用 filter() 方法筛选，也可以用 find() 方法筛选。如果用 find() 方法筛选，就不用加最后的 "[0]"
                return defaults.filter(tag => {
                    return tag.props!.title === props.selected;
                })[0];
            });

            return {defaults, titles, onSelect, current};
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
        }
    }
</style>