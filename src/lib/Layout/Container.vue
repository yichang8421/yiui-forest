<template>
    <section :class="{isVertical}" class="yiui-container">
        <slot/>
    </section>
</template>

<script lang="ts">
    import {computed} from "vue";

    export default {
        props: {
            direction: {
                type: String,
                default: ""
            }
        },
        setup(props, {slots}) {
            const {direction} = props;

            const isVertical = computed(() => {
                if (direction === "vertical") {
                    return true;
                } else if (direction === "horizontal") {
                    return false;
                } else if (slots && slots.default()) {
                    const vNode = slots.default();
                    return vNode.some(vNode => {
                        const tag = vNode.type.name;
                        return tag === "YIHeader" || tag === "YIFooter";
                    });
                } else {
                    return false;
                }
            });

            return {isVertical};
        }
    };
</script>

<style lang="scss">
    .yiui-container {
        display: flex;
        flex-direction: row;
        flex: 1;
        flex-basis: auto;
        min-width: 0;

        &.isVertical {
            flex-direction: column;
        }
    }
</style>