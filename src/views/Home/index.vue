<template>
    <div>
        <Topnav/>
        <div class="banner">
            <h1>EUI</h1>
            <h2>一个美观的 UI 框架</h2>
            <p class="actions">
                <a href="#">GitHub</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import Topnav from "../../components/Topnav/index.vue";

    export default {
        components: {Topnav}
    };
</script>

<style lang="scss" scoped>
    .banner {
        padding: 100px 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #94deca;

        > .actions {
            padding: 8px 0;

            a {
                margin: 16px;
                background: #fff;
                display: inline-block;
                $h: 28px;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 8px;
            }
        }
    }
</style>