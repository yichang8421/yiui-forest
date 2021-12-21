<template>
    <h1>Input 示例</h1>
    <Demo :component="InputDemo1"/>
    <Demo :component="InputDemo2"/>
    <Demo :component="InputDemo3"/>
</template>

<script lang="ts">
    import InputDemo1 from "../../components/InputDemo/Input1.demo.vue";
    import InputDemo2 from "../../components/InputDemo/Input2.demo.vue";
    import InputDemo3 from "../../components/InputDemo/Input3.demo.vue";
    import Demo from "../../components/Demo/index.vue";

    export default {
        components: {Demo},
        setup() {
            return {InputDemo1, InputDemo2, InputDemo3};
        }
    };
</script>