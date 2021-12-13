<template>
    <div class="yiui-tabs">
        <div class="yiui-tabs-nav">
            <div :class="{selected:t===selected}" :key="index" @click="onSelect(t)" class="yiui-tabs-nav-item"
                 :ref="el=>{if(el) navItems[index]=el}" v-for="(t,index) in titles">
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
    import {ref, computed, onMounted} from "vue";
    import Tab from "../../lib/Tab/index.vue";

    export default {
        props: {
            selected: {
                type: String,
            }
        },
        setup(props, context) {
            const navItems = ref<HTMLDivElement[]>([]);
            // @ts-ignore
            const indicator = ref<HTMLDivElement>(null as HTMLDivElement);

            // 挂载时，获取 tab 的宽度，然后将标识条宽度设置为和 tab 一样的宽度。
            onMounted(() => {
                // 获取全部 tab 元素。
                // ref 的值全部存在 value 属性中
                const divs = navItems.value;
                // console.log(...divs);

                // 找到选中的 tab
                const result = divs.filter(div => div.classList.contains(`selected`))[0];
                // console.log(result);

                // 获取选中 tab 的宽度
                // 元素尺寸可以使用 Element.getBoundingClientRect() 方法获取。其中包含元素的 width、height、top、right、bottom、left : 176 等属性。
                const {width} = result.getBoundingClientRect();
                // console.log(width);

                // 将宽度设置到底部标识条上
                // console.log(indicator.value);
                indicator.value.style.width = width + "px";
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

            return {defaults, titles, onSelect, current, navItems, indicator};
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
            }
        }

        &-content {
            padding: 8px 0;
        }
    }
</style>