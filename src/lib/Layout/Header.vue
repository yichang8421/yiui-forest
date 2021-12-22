<template>
    <header :style="{height}" class="yiui-header">
        <slot/>
    </header>
</template>
<script lang="ts">
    import {defineComponent} from "vue";

    export default defineComponent({
        name: "YIHeader",
        props: {
            height: {
                type: String,
                default: "60px"
            }
        }
    });
</script>

<style lang="scss">
    .yiui-header {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>