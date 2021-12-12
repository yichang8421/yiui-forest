<template>
    <div>
<!--        通过实例 property $attrs 可以让这些 attribute 生效，且可以通过 v-bind 显性的绑定到非根元素上。-->
        <button v-bind="$attrs" class="yiui-button" :class="{[`theme-${theme}`]:theme}">
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
    };
</script>

<style lang="scss">
    div {
        border: 1px solid red
    }
</style>