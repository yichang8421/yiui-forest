<template>
    <h1>Button 示例</h1>
    <Demo :component="ButtonDemo1"/>
    <Demo :component="ButtonDemo2"/>
    <Demo :component="ButtonDemo3"/>
    <Demo :component="ButtonDemo4"/>
</template>

<script lang="ts">
    import ButtonDemo1 from "../../components/ButtonDemo/Button1.Demo.vue";
    import ButtonDemo2 from "../../components/ButtonDemo/Button2.Demo.vue";
    import ButtonDemo3 from "../../components/ButtonDemo/Button3.Demo.vue";
    import ButtonDemo4 from "../../components/ButtonDemo/Button4.Demo.vue";
    import Demo from "../../components/Demo/index.vue";

    export default {
        components: {ButtonDemo1, ButtonDemo2, ButtonDemo3, ButtonDemo4, Demo},
        setup() {
            const onClick = () => {
                console.log("Do something...");
            };

            return {onClick, ButtonDemo1, ButtonDemo2, ButtonDemo3, ButtonDemo4, Demo};
        }
    };
</script>