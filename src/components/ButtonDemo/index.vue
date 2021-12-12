<template>
    <Button>HELLO</Button>
    <Button @click="onClick" @focus="onClick" @mouseover="onClick" size="small">HELLO</Button>
    <Button theme="button">HELLO</Button>
    <Button theme="link">HELLO</Button>
    <Button theme="text">HELLO</Button>
</template>

<script lang="ts">
    import Button from "../../lib/Button/index.vue";

    export default {
        components: {Button},
        setup() {
            const onClick = () => {
                console.log("hello");
            };

            return {onClick};
        }
    };
</script>