<template>
    <div class="yiui-topNavAndBanner">
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
    .yiui-topNavAndBanner {
        background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
        linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
        linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
    }

    .banner {
        padding: 100px 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

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