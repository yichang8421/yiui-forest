<template>
    <footer :style="{height}" class="yiui-footer">
        <slot/>
    </footer>
</template>
<script lang="ts">
    import {defineComponent} from "vue";

    export default defineComponent({
        name: "YIFooter",
        props: {
            height: {
                type: String,
                default: "60px"
            }
        }
    });
</script>

<style lang="scss">
    .yiui-footer {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>