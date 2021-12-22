<template>
    <aside :style="{width}" class="yiui-aside"><slot/></aside>
</template>

<script lang="ts">
    export default {
        props: {
            width: {
                type: String,
                default: "300px"
            }
        }
    };
</script>


<style lang="scss">
    .yiui-aside {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>