<template>
    <div class="yiui-tabs">
        <div class="yiui-tabs-nav">
            <div :class="selected===t?'selected':''" :key="index" @click="onSelect(t)" class="yiui-tabs-nav-item"
                 v-for="(t,index) in titles">
                {{t}}
            </div>
        </div>
        <div class="yiui-tabs-content">
            <component :is="c" :key="index" class="yiui-tabs-content-item" v-for="(c,index) in defaults"></component>
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
            const defaults = context.slots.default();
            defaults.forEach(tag => {
                if (tag.type !== Tab) {
                    throw new Error("Tabs 组件的子组件必须是 Tab");
                }
            });

            const titles = defaults.map(tag => tag.props.title);
            const onSelect = (title: string) => {
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
        }
    }
</style>