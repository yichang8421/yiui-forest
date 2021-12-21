<demo>
    登陆框 + 双向绑定
</demo>

<template>
    <Input placeholder="请输入账号" v-model:content="content"/>
    <Input placeholder="请输入密码" type="password" v-model:password="password"/>
    <span>{{content}}</span>
    <span style="margin-left:8px">{{password}}</span>
</template>

<script lang="ts">
    import {ref} from "vue";
    import Input from "../../lib/Input/index.vue";

    export default {
        components: {Input},
        setup() {
            const content = ref(undefined);
            const password = ref(undefined);
            return {content, password};
        }
    };
</script>