<template>
    <div>
        <h1>Switch 示例</h1>
        <Demo :component="SwitchDemo1"/>
        <Demo :component="SwitchDemo2"/>
    </div>
</template>

<script lang="ts">
    import SwitchDemo1 from "../../components/SwitchDemo/Switch1.demo.vue";
    import SwitchDemo2 from "../../components/SwitchDemo/Switch2.demo.vue";
    import Demo from "../../components/Demo/index.vue";

    export default {
        components: {Demo},
        setup() {
            return {SwitchDemo1, SwitchDemo2};
        }
    };
</script>