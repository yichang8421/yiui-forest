<demo>
    左右结构
</demo>

<template>
    <Container class="demo2">
        <Aside width="200px">Aside</Aside>
        <Main height="300px">Main</Main>
    </Container>
</template>

<script lang="ts">
    import Container from "../../lib/Layout/Container.vue";
    import Main from "../../lib/Layout/Main.vue";
    import Aside from "../../lib/Layout/Aside.vue";

    export default {
        components: {Container, Main, Aside}
    };
</script>

<style lang="scss">
    .yiui-main, .yiui-aside {
        font-weight: bold;
        font-size: 24px;
    }

    .demo2 {
        > .yiui-main {
            background-color: #91ddab;
            color: white;
        }

        > .yiui-aside {
            background-color: #48c774;
            color: white;
        }
    }
</style>