<template>
    <div :size="size">
        <button v-bind="rest" class="yiui-button" :class="{[`theme-${theme}`]:theme}">
            <slot/>
        </button>
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,    // 子组件根元素不继承非 props 的 attribute 绑定（希望点击div不触发父组件传过来的click、focus和mouseover事件）

        props: {
            theme: {
                type: String,
                default: "button"
            }
        },

        setup(props, context) {
            const {size, ...rest} = context.attrs;
            return {size, rest};
        }
    };
</script>

<style lang="scss">
    div {
        border: 1px solid red
    }
</style>