<demo>
    左右结构
</demo>

<template>
    <Container class="demo4">
        <Aside width="200px">Aside</Aside>
        <Container>
            <Header>Header</Header>
            <Main>Main</Main>
            <Footer>Footer</Footer>
        </Container>
    </Container>
</template>

<script lang="ts">
    import Layout from "../../lib/Layout/index.vue";
    import Container from "../../lib/Layout/Container.vue";
    import Header from "../../lib/Layout/Header.vue";
    import Footer from "../../lib/Layout/Footer.vue";
    import Main from "../../lib/Layout/Main.vue";
    import Aside from "../../lib/Layout/Aside.vue";

    export default {
        components: {Layout, Container, Header, Main, Footer, Aside}
    };
</script>

<style lang="scss">
    .yiui-header, .yiui-main, .yiui-footer, .yiui-aside {
        font-weight: bold;
        font-size: 24px;
    }

    .demo4 {
        .yiui-header {
            background-color: #a75207;
            color: white;
        }

        .yiui-main {
            background-color: #db7f2f;
            color: white;
        }

        .yiui-footer {
            background-color: #8d4303;
            color: white;
        }

        .yiui-aside {
            background-color: #a07753;
            color: white;
        }
    }
</style>