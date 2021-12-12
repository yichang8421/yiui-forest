<template>
    <template v-if="visible">
        <Teleport to="body">
            <div class="yiui-dialog-overlay" @click="onClickOverlay"></div>
            <div class="yiui-dialog-wrapper">
                <div class="yiui-dialog">
                    <header>
                        <slot name="title"/>
                        <span class="yiui-dialog-close" @click="close"></span>
                    </header>
                    <main>
                        <slot name="content"/>
                    </main>
                    <footer>
                        <Button @click="ok">确定</Button>
                        <Button @click="cancel">取消</Button>
                    </footer>
                </div>
            </div>
        </Teleport>
    </template>
</template>

<script lang="ts">
    import Button from "../../lib/Button/index.vue";

    export default {
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            onOK: {
                type: Function
            },
            onCancel: {
                type: Function
            },
            closeOnClickOverlay: {
                type: Boolean,
                default: true
            },
        },
        setup(props, context) {
            const close = () => {
                context.emit("update:visible", false);
            };
            const ok = () => {
                if (props.onOK?.() !== false) {
                    console.log("OK 执行完毕");
                    close();
                }
            };
            const cancel = () => {
                if(props.onCancel?.()!==false){
                    context.emit("cancel");
                    close();
                }
            };
            const onClickOverlay = () => {
                if (props.closeOnClickOverlay) {
                    close();
                }
            };
            return {close, ok, cancel, onClickOverlay};
        },
        components: {Button}
    };
</script>

<style lang="scss">
    $radius: 4px;
    $border-color: #d9d9d9;

    .yiui-dialog {
        &-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: fade_out(black, 0.5);
            z-index: 10;
        }

        &-wrapper {
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 11;
        }

        background: white;
        border-radius: $radius;
        box-shadow: 0 0 3px fade_out(black, 0.5);
        min-width: 15em;
        max-width: 90%;

        > header {
            padding: 12px 16px;
            // border-bottom: 1px solid $border-color;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 20px;
        }

        > main {
            padding: 12px 16px;
        }

        > footer {
            // border-top: 1px solid $border-color;
            padding: 12px 16px;
            text-align: right;
        }

        &-close {
            position: relative;
            display: inline-block;
            width: 16px;
            height: 16px;
            cursor: pointer;

            // 纯css画叉叉图标
            &::before, &::after {
                content: "";
                position: absolute;
                height: 1px;
                background: black;
                width: 100%;
                top: 50%;
                left: 50%;
            }

            &::before {
                transform: translate(-50%, -50%) rotate(-45deg);
            }

            &::after {
                transform: translate(-50%, -50%) rotate(45deg);
            }
        }
    }
</style>