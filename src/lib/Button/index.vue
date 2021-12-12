<template>
    <button class="yiui-button" :class="`theme-${theme}`">
        <slot/>
    </button>
</template>

<script>
    export default {
        props: {
            theme: {
                type: String,
                default: "button"
            }
        }
    };
</script>

<style lang="scss">
    $h: 32px;
    $border-color: #d9d9d9;
    $color: #333;
    $blue: #40a9ff;
    $radius: 4px;
    .yiui-button {
        height: $h;
        padding: 0 12px;
        cursor: pointer;
        border-radius: $radius;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: white;
        border: 1px solid $border-color;
        color: $color;
        box-shadow: 0 1px 0 fade-out(black, 0.95);
        /* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影颜色 */
        white-space: nowrap;
        box-sizing: border-box;

        & + & { // 只有相邻两个元素才有8px左侧外边距
            // +号为兄弟选择器。a + b 选择紧邻在 a 元素后面的 b 元素
            margin-left: 8px;
        }

        &:hover, &:focus {
            color: $blue;
            border-color: $blue;
        }

        &:focus {
            outline: none;
        }

        &::-moz-focus-inner {
            /* 兼容Firefox(等价于 &:focus {outline: none;}) */
            border: 0;
        }
    }
</style>