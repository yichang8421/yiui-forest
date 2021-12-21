<template>
    <div class="yiui-input">
        <input :class="{disabled}" :disabled="disabled" :placeholder="placeholder" :type="type"
               @input="inputText"/>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            type: {
                type: String,
                default: "text"
            },
            placeholder: {
                type: String,
                default: "请输入..."
            },
            content: {
                type: String
            },
            password: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        setup(props, context) {
            const inputText = e => {
                if (props.type === "text") {
                    context.emit("update:content", e.target.value);
                } else if (props.type === "password") {
                    console.log(e.target.value);
                    context.emit("update:password", e.target.value);
                }
            };
            return {inputText};
        }
    };
</script>

<style lang="scss">
    $h: 32px;
    $border-color: #d9d9d9;
    $focus-color: #3399cc;
    $radius: 4px;
    $font-size: 16px;
    $width: 240px;
    $disabled-color: #e8e8e8;

    .yiui-input {
        display: inline-block;
        margin: 4px 16px 4px 0;

        input {
            font-size: $font-size;
            transition: all 500ms;
            border-radius: $radius;
            padding: 0 12px;
            line-height: $h;
            width: $width;
            border: 1px solid $border-color;
            outline: none; // 去除选中状态边框

            &:hover, &:focus {
                border: 1px solid $focus-color;
            }

            &.disabled {
                &:hover {
                    border: 1px solid red;
                }

                cursor: not-allowed;
                background: $disabled-color;
            }
        }
    }
</style>