<template>
    <main :style="{height}" class="yiui-main">
        <slot/>
    </main>
</template>

<script lang="ts">
    export default {
        props: {
            height: {
                type: String,
                default: "160px"
            }
        }
    };
</script>

<style lang="scss">
    .yiui-main {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
</style>