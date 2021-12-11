<template>
    <div>
        <Switch :value="selected" @input="selected=$event"/>
    </div>
</template>

<script lang="ts">
    import Switch from "../../lib/Switch/index.vue";
    import {ref} from "vue";

    export default {
        components: {Switch},
        setup() {
            const selected = ref(false);
            return {selected};
        }
    };
</script>
