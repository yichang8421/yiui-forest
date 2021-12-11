<template>
    <button @click="toggle" :class={checked:value}><span></span></button>
</template>

<script lang="ts">

    export default {
        props: {
            value: Boolean
        },
        setup(props, context) {
            const toggle = () => {
                context.emit("update:value", !props.value);
            };

            return {toggle};
        }
    };
</script>

<style lang="scss" scoped>
    $h: 22px;
    $h2: $h - 4px;
    button {
        z-index: 1;
        height: $h;
        width: $h*2;
        border: none;
        background: gray;
        border-radius: $h/2;
        position: absolute;

        span {
            position: absolute;
            top: 2px;
            left: 2px;
            height: $h2;
            width: $h2;
            background: white;
            border-radius: $h2/2;
            transition: all 250ms; // 动画柔和过渡
        }

        &:active {
            > span {
                width: $h2 + 4px; // 点击button时，让span变宽一点，看起来有弹性效果。
            }
        }

        &.checked {
            background: blue;

            > span {
                left: calc(100% - #{$h2} - 2px);
            }

            &:active {
                > span {
                    margin-left: -4px; //当span在右边时（chacked为true时），让其向左边移动一点，避免超出范围
                }
            }
        }
    }
</style>