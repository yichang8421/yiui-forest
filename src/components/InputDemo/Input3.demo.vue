<demo>
    禁用输入框
</demo>

<template>
    <Input disabled placeholder="请输入内容" v-model:content="content"/>
    <span>{{content}}</span>
</template>

<script lang="ts">
    import {ref} from "vue";
    import Input from "../../lib/Input/index.vue";

    export default {
        components: {Input},
        setup() {
            const content = ref(undefined);
            return {content};
        }
    };
</script>