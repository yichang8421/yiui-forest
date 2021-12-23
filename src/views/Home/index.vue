<template>
    <div :style="{background:`url(${background}) no-repeat fixed center`}" class="yiui-home">
        <!--        <div class="yiui-topNavAndBanner">-->
        <Topnav/>
        <div class="banner">
            <h1>森林 UI</h1>
            <h2>一个美观好用的 UI 框架</h2>
            <p class="actions">
                <a href="https://github.com/yichang8421" target="_blank">GitHub</a>
                <router-link @click="switchBtnVisible" to="/doc/intro">开始</router-link>
            </p>
        </div>
        <!--        </div>-->
        <div class="features">
            <ul>
                <li>
                    <a class="selected" href="https://www.typescriptlang.org/docs/" target="_blank">
                        <svg>
                            <use xlink:href="#icon-typescript-def"></use>
                        </svg>
                        <h3>基于 TypeScript </h3>
                        <p>源代码采用 TypeScript 书写</p>
                    </a>
                </li>
                <li>
                    <a class="selected" href="https://v3.vuejs.org/guide/introduction.html" target="_blank">
                        <svg>
                            <use xlink:href="#icon-Vue"></use>
                        </svg>
                        <h3>基于 Vue 3</h3>
                        <p>源代码使用 Vue 3 Composition API</p>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <svg>
                            <use xlink:href="#icon-zhongduan"></use>
                        </svg>
                        <h3>多段适配</h3>
                        <p>适配移动端、PC端</p>
                    </a>
                </li>
                <li>
                    <a class="selected" href="http://en.sass.hk/docs/" target="_blank">
                        <svg>
                            <use xlink:href="#icon-scss"></use>
                        </svg>
                        <h3>使用 Sass</h3>
                        <p>样式结构清晰</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg>
                            <use xlink:href="#icon-food-cookie"></use>
                        </svg>
                        <h3>代码易读</h3>
                        <p>每个组件的源代码都极其简洁</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import {inject, Ref} from "vue";
    import Topnav from "../../components/Topnav/index.vue";
    import background from "../../assets/img/background.png";

    export default {
        components: {Topnav},
        setup() {
            const selectBtnVisible = inject<Ref<boolean>>("selectBtnVisible");
            const switchBtnVisible = () => {
                (selectBtnVisible as any).value = true;
            };
            console.log(background);
            return {switchBtnVisible, selectBtnVisible, background};
        }
    };
</script>

<style lang="scss" scoped>
    a:hover {
        border-bottom: none;
    }

    .yiui-home {
        height: 100%;
        /*background: url("../../assets/img/background.png") no-repeat fixed center;*/
        -webkit-background-size: cover;
        -o-background-size: cover;
    }

    /*.yiui-topNavAndBanner {*/
    /*background: linear-gradient(20deg, #e3fffd 0%, #b7e9e6 100%);*/
    /*clip-path: ellipse(80% 60% at 50% 40%);*/
    /*}*/

    .banner {
        padding: 110px 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #414b5b;

        h1, h2 {
            color: #e8c5c7;
            text-shadow: .2rem 0rem .5rem #c35c53, -.2rem 0rem .5rem #c35c53, 0rem .2rem .5rem #c35c53, 0rem -.2rem .5rem #c35c53;
        }

        > .actions {
            padding: 8px 0;

            a {
                margin: 20px;
                background: #28afea;
                display: inline-block;
                $h: 28px;
                line-height: $h;
                border-radius: 4px;
                padding: 4px 16px;
                color: #c9f2ef;
                transition: 250ms;

                &:hover {
                    opacity: 70%;
                    color: white;
                }
            }
        }
    }

    .features {
        // 水平居中对齐
        margin: 64px auto;
        width: 300px;
        @media (min-width: 800px) {
            width: 800px;
        }
        @media (min-width: 1200px) {
            width: 1200px;
        }

        > ul {
            display: flex;
            flex-wrap: wrap;

            > li {
                display: inline-block;
                color: white;

                > a {
                    width: 300px;
                    margin: 16px 0;
                    display: grid;
                    justify-content: start;
                    align-content: space-between;
                    grid-template-areas:
                        "icon title"
                        "icon text";
                    grid-auto-columns: 80px auto;
                    grid-auto-rows: 1fr auto;

                    > svg {
                        display: block;
                        width: 64px;
                        height: 64px;
                        grid-area: icon;
                    }

                    > h3 {
                        grid-area: title;
                        font-size: 28px;
                    }

                    > p {
                        grid-area: text;
                    }

                    transition: 150ms;

                    &.selected:hover {
                        opacity: 60%;
                    }
                }
            }
        }
    }
</style>