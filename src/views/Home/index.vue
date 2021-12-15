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
    <div class="features">
        <ul>
            <li>
                <a class="selected" href="https://v3.vuejs.org/guide/introduction.html" target="_blank">
                    <svg>
                        <use xlink:href="#icon-Vue"></use>
                    </svg>
                    <h3>基于 Vue 3</h3>
                    <p>骄傲地使用了 Vue 3 Composition API</p>
                </a>
            </li>
            <li>
                <a class="selected" href="https://www.typescriptlang.org/docs/" target="_blank">
                    <svg>
                        <use xlink:href="#icon-typescript-def"></use>
                    </svg>
                    <h3>基于 TypeScript </h3>
                    <p>源代码采用 TypeScript 书写（非严格检查）</p>
                </a>
            </li>
            <li>
                <a href="#" target="_blank">
                    <svg>
                        <use xlink:href="#icon-zhongduan"></use>
                    </svg>
                    <h3>代码易读</h3>
                    <p>每个组件的源代码都极其简洁</p>
                </a>
            </li>
            <li>
                <a class="selected" href="http://en.sass.hk/docs/" target="_blank">
                    <svg>
                        <use xlink:href="#icon-scss"></use>
                    </svg>
                    <h3>代码易读</h3>
                    <p>每个组件的源代码都极其简洁</p>
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
            return {switchBtnVisible, selectBtnVisible};
        }
    };
</script>

<style lang="scss" scoped>
    a:hover {
        border-bottom: none;
    }

    .yiui-topNavAndBanner {
        background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
        clip-path: ellipse(80% 60% at 50% 40%);
    }

    .banner {
        padding: 110px 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

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
        width: 400px;
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

                > a {
                    width: 400px;
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
                        grid-area: text
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