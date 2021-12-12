<template>
    <button class="yiui-button" :class="classes" :disabled="disabled">
        <span v-if="loading" class="yiui-loadingIndicator"></span>
        <slot/>
    </button>
</template>

<script>
    import {computed} from "vue";

    export default {
        props: {
            theme: {
                type: String,
                default: "button"
            },
            size: {
                type: String,
                default: "normal"
            },
            level: {
                type: String,
                default: "normal"
            },
            disabled: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            },
        },
        setup(props) {
            const {theme, size, level} = props;
            const classes = computed(() => {
                return {
                    [`yiui-theme-${theme}`]: theme,
                    [`yiui-size-${size}`]: size,
                    [`yiui-level-${level}`]: level,
                };
            });
            return {classes};
        }
    };
</script>

<style lang="scss">
    $h: 32px;
    $border-color: #d9d9d9;
    $color: #333;
    $blue: #40a9ff;
    $red: #ff2600;
    $gray: gray;
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
        box-shadow: 0 1px 0 fade_out(black, 0.95);
        /* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影颜色 */
        white-space: nowrap;
        box-sizing: border-box;
        transition: all 500ms;

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

        &.yiui-theme-link, &.yiui-theme-text {
            border-color: transparent;
            box-shadow: none;
        }

        &.yiui-theme-link {
            color: $blue;

            &:hover, &:focus {
                color: lighten($blue, 20%);
            }
        }

        &.yiui-theme-text {
            color: inherit;

            &:hover, &:focus {
                background: darken(white, 5%);
            }
        }

        &.yiui-size-small {
            font-size: 12px;
            height: 20px;
            padding: 0 4px;
        }

        &.yiui-size-big {
            font-size: 24px;
            height: 48px;
            padding: 0 16px;
        }

        &.yiui-theme-button {
            &.yiui-level-importent {
                background: $blue;
                color: white;
                border-color: $blue;

                &:hover, &:focus {
                    background: darken($blue, 10%);
                    border-color: darken($blue, 10%);
                }
            }

            &.yiui-level-danger {
                background: $red;
                color: white;
                border-color: $red;

                &:hover, &:focus {
                    background: darken($red, 10%);
                    border-color: darken($red, 10%);
                }
            }
        }

        &.yiui-theme-link {
            &.yiui-level-importent {
                font-weight: bolder;
            }

            &.yiui-level-danger {
                color: $red;

                &:hover, &:focus {
                    color: darken($red, 10%);
                }
            }
        }

        &.yiui-theme-text {
            &.yiui-level-importent {
                color: $blue;

                &:hover, &:focus {
                    color: darken($blue, 10%);
                }
            }

            &.yiui-level-danger {
                color: $red;

                &:hover, &:focus {
                    color: darken($red, 10%);
                }
            }
        }

        &[disabled] {
            cursor: not-allowed;
            color: $gray;

            &.yiui-theme-button {
                border-color: $gray;
            }
        }

        > .yiui-loadingIndicator {
            width: 14px;
            height: 14px;
            display: inline-block;
            margin-right: 4px;
            border-radius: 8px;
            border-width: 2px;
            border-color: $blue $blue $blue transparent;
            border-style: solid;
            animation: yiui-rotate 1s infinite linear;
        }

        @keyframes yiui-rotate {
            0% {
                transform: rotate(360deg)
            }
            100% {
                transform: rotate(0deg)
            }
        }
    }
</style>