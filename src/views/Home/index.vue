<template>
    <div class="yiui-topNavAndBanner">
        <Topnav/>
        <div class="banner">
            <h1>EUI</h1>
            <h2>一个美观的 UI 框架</h2>
            <p class="actions">
                <a href="https://github.com/yichang8421" target="_blank">GitHub</a>
                <router-link @click="switchBtnVisible" to="/doc">开始</router-link>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import {inject, Ref} from "vue";
    import Topnav from "../../components/Topnav/index.vue";

    export default {
        components: {Topnav},
        setup() {
            const selectBtnVisible = inject<Ref<boolean>>("selectBtnVisible");
            const switchBtnVisible = () => {
                (selectBtnVisible as any).value = true;
            };
            return {switchBtnVisible,selectBtnVisible}
        }
    };
</script>

<style lang="scss" scoped>
    .yiui-topNavAndBanner {
        background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
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