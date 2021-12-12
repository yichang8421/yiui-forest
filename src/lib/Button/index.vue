<template>
    <button class="yiui-button" :class="{[`theme-${theme}`]:theme}">
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