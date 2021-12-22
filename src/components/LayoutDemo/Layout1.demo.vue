<demo>
    上下结构
</demo>

<template>
    <Container class="demo1">
        <Header>Header</Header>
        <Main height="200px">Main</Main>
        <Footer>Footer</Footer>
    </Container>
</template>

<script lang="ts">
    import Layout from "../../lib/Layout/index.vue";
    import Container from "../../lib/Layout/Container.vue";
    import Header from "../../lib/Layout/Header.vue";
    import Footer from "../../lib/Layout/Footer.vue";
    import Main from "../../lib/Layout/Main.vue";

    export default {
        components: {Layout, Container, Header, Main, Footer}
    };
</script>

<style lang="scss">
    .yiui-header, .yiui-main, .yiui-footer {
        font-weight: bold;
        font-size: 24px;
    }

    .demo1{
        > .yiui-header {
            background-color: #0744a7;
            color: white;
        }

        > .yiui-main {
            background-color: #84abea;
            color: white;
        }

        > .yiui-footer {
            background-color: #153d7e;
            color: white;
        }
    }
</style>