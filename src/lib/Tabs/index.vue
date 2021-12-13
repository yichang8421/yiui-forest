<template>
    <div class="yiui-tabs">
        <div class="yiui-tabs-nav" ref="navContainer">
            <div :class="{selected:t===selected}" :key="index" @click="onSelect(t)" class="yiui-tabs-nav-item"
                 :ref="el=>{if(t===selected)selectedItem = el }" v-for="(t,index) in titles">
                {{t}}
            </div>
            <div class="yiui-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="yiui-tabs-content">
            <component :is="current" :key="current.props.title" class="yiui-tabs-content-item"></component>
        </div>
    </div>
</template>

<script lang="ts">
    import {ref, computed, watchEffect, onMounted} from "vue";
    import Tab from "../../lib/Tab/index.vue";

    export default {
        props: {
            selected: {
                type: String,
            }
        },
        setup(props, context) {
            const selectedItem = ref<HTMLDivElement>(null as HTMLDivElement);
            const indicator = ref<HTMLDivElement>(null as HTMLDivElement);
            const navContainer = ref<HTMLDivElement>(null as HTMLDivElement);

            onMounted(() => {
                watchEffect(() => {
                    const {width} = selectedItem.value.getBoundingClientRect();

                    indicator.value.style.width = width + "px";

                    const {left: selectedItemLeft} = selectedItem.value.getBoundingClientRect();
                    const {left: navContainerLeft} = navContainer.value.getBoundingClientRect();
                    const deltaLeft = selectedItemLeft - navContainerLeft;

                    indicator.value.style.left = deltaLeft + "px";
                });

            });

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

            return {defaults, titles, onSelect, current, selectedItem, indicator, navContainer};
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
                background: $blue;
                left: 0;
                bottom: 0;
                transition: all 250ms;
            }
        }

        &-content {
            padding: 8px 0;
        }
    }
</style>