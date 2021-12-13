<template>
    <div class="yiui-tabs">
        <div class="yiui-tabs-nav">
            <div :class="{selected:t===selected}" :key="index" @click="onSelect(t)" class="yiui-tabs-nav-item"
                 v-for="(t,index) in titles">
                {{t}}
            </div>
            <div class="yiui-tabs-nav-indicator"></div>
        </div>
        <div class="yiui-tabs-content">
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
            defaults.forEach(tag => {
                if (tag.type !== Tab) {
                    throw new Error("Tabs 组件的子组件必须是 Tab");
                }
            });

            const titles = defaults.map(tag => tag.props!.title);
            const onSelect = (title: string) => {
                context.emit("update:selected", title);
            };

            const current = computed(() => {
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
            position: relative;

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

            &-indicator {
                position: absolute;
                height: 3px;
                width: 100px;
                background: $blue;
                left: 0;
                bottom: 0;
            }
        }

        &-content {
            padding: 8px 0;
        }
    }
</style>