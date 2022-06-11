<template>
    <div class="layout">
        <Topnav class="nav"/>
        <div class="content">
            <aside ref="aside" v-if="asideVisible">
                <h2>文档</h2>
                <ol>
                    <li>
                        <router-link to="/doc/intro">介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/install">安装</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/get-start">开始使用</router-link>
                    </li>
                </ol>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/button">Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/input">Input 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/layout">Layout 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/pagination">Pagination 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/pagination">Pagination 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/pagination">Pagination 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/pagination">Pagination 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/pagination">Pagination 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/pagination">Pagination 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/pagination">Pagination 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/pagination">Pagination 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/pagination">Pagination 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/pagination">Pagination 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/pagination">Pagination 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/pagination">Pagination 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/pagination">Pagination 组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view/>
                <div style="overflow-y:auto;">
                </div>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
    import {inject, Ref, ref, watchEffect} from "vue";
    import Topnav from "../../components/Topnav/index.vue";

    export default {
        components: {Topnav},
        setup() {
            const aside = ref<HTMLElement>(null as HTMLElement);
            const asideVisible = inject<Ref<boolean>>("asideVisible");

            watchEffect(() => {
                // 实时监听视窗尺寸变化
                window.onresize = () => {
                    // console.log(aside.value);
                    const width = document.documentElement.clientWidth;
                    if ((asideVisible as any).value) {
                        // 当 asideVisible 为 true 时，显示 aside 显示隐藏完全由视窗宽度决定
                        if (width <= 500) {
                            try {
                                aside.value.style.display = "none";
                            } catch (e) {}
                        } else if (width > 500) {
                            try {
                                aside.value.style.display = "block";
                            } catch (e) {}
                        }
                    } else {
                        // 当 asideVisible 为 false 时，先将其置为 true。渲染后，显示隐藏由视窗决定。
                        (asideVisible as any).value = true;
                    }
                    // 重置 asideVisible 的值
                    (asideVisible as any).value = width > 500;
                };

            });
            return {asideVisible, aside};
        }
    };
</script>

<style lang="scss" scoped>
    $aside-background: #a24350;
    $ahover-color: #f0a732;

    .layout {
        .nav {
            background: linear-gradient(
                            90deg,
                            #a58ca6 0%,
                            #f2dad5 100%
            );
        }

        > .content {
            display: grid;      // 用于给main定位
            grid:60px auto / 210px auto;

            > aside {
                background: $aside-background;
                height: 100vh;
                padding: 16px 0;
                overscroll-behavior: contain;

                position: fixed;
                top: 0;     // fixed添加滚动条时必须设置
                bottom:0;   // fixed添加滚动条时必须设置
                padding-top: 80px;

                overflow-y:scroll;

                > h2 {
                    margin-bottom: 4px;
                    padding: 8px 20px;
                    font-weight: bold;
                }

                > ol {
                    > li {
                        > a {
                            display: block;
                            padding: 8px 28px;
                            border: none;

                            &:hover {
                                color: $ahover-color;
                            }
                        }

                        > .router-link-active {
                            background: white;
                            color: $aside-background;
                        }
                    }
                }
            }

            > main {
                grid-row: 2;
                grid-column: 2;
                padding: 16px 32px;
            }
        }

        @media (max-width: 500px) {
            > .content {
                display: grid;
                grid:60px / 1fr;

                > main {
                    grid-row: 2;
                    grid-column: 1 / 3;
                    padding: 16px 32px;
                }
            }
        }
    }
</style>