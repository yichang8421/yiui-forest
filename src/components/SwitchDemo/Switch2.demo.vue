<demo>
    支持 disabled
</demo>

<template>
    <Switch disabled v-model:value="bool"/>
</template>

<script lang="ts">
    import Switch from "../../lib/Switch/index.vue";
    import {
        ref
    } from "vue";

    export default {
        components: {
            Switch,
        },
        setup() {
            const bool = ref(false);
            return {
                bool
            };
        }
    };
</script>