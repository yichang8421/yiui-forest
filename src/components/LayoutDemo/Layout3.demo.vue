<demo>
    左右结构
</demo>

<template>
    <div class="demo3">
        <Header>Header</Header>
        <Container>
            <Aside width="200px">Aside</Aside>
            <Container>
                <Main height="250px">Main</Main>
                <Footer>Footer</Footer>
            </Container>
        </Container>
    </div>
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

    .demo3 {
        > .yiui-header {
            background-color: #b76bff;
            color: white;
        }

        .yiui-main {
            background-color: #6409b8;
            color: white;
        }

        .yiui-footer {
            background-color: #9c34ff;
            color: white;
        }

        .yiui-aside {
            background-color: #d3a6ff;
            color: white;
        }
    }
</style>