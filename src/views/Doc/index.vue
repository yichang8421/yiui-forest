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
                        <router-link to="/doc/switch">Switch组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view/>
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
    .layout {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow-x: hidden;

        > .nav {
            flex-shrink: 0;
        }

        > .content {
            /*background: gold;*/
            display: flex;
            flex: 1;
            padding-top: 70px;
            padding-left: 150px;
            width: 100vw;
            @media (max-width: 500px) {
                padding-left: 0;
            }

            > aside {
                flex-shrink: 0;
                z-index: 2;

                background: #43b784;
                width: 150px;
                height: 100vh;
                padding: 16px 0;

                position: fixed;
                top: 0;
                left: 0;
                padding-top: 120px;

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
                                color: #f0a732;
                            }
                        }

                        > .router-link-active {
                            background: white;
                            color: #41b883;
                        }
                    }
                }
            }

            > main {
                flex: 1;
                padding: 16px 32px;
                background: white;
                overflow: auto;
            }
        }
    }
</style>