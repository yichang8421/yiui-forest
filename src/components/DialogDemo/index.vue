<template>
    <div>
        <h1>Dialog 示例</h1>
        <Demo :component="DialogDemo1"/>
        <Demo :component="DialogDemo2"/>
    </div>
</template>

<script lang="ts">
    import DialogDemo1 from "../../components/DialogDemo/Dialog1.Demo.vue";
    import DialogDemo2 from "../../components/DialogDemo/Dialog2.Demo.vue";
    import Demo from "../../components/Demo/index.vue";

    export default {
        components: {DialogDemo1, DialogDemo2, Demo},
        setup() {
            return {DialogDemo1, DialogDemo2};
        }
    };
</script>