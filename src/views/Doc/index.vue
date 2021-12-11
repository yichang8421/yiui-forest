<template>
    <div class="layout">
        <Topnav class="nav"/>
        <div class="content">
            <aside v-if="asideVisible">
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
    import Topnav from "../../components/Topnav/index.vue";
    import {inject, Ref} from "vue";

    export default {
        components: {Topnav},
        setup() {
            const asideVisible = inject<Ref<boolean>>("asideVisible");
            return {asideVisible};
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
            padding-top: 52px;
            padding-left: 150px;
            width: 100vw;
            @media (max-width: 500px) {
                padding-left: 0;
            }

            > aside {
                flex-shrink: 0;

                background: yellowgreen;
                width: 150px;
                height: 100vh;
                padding: 16px;

                position: fixed;
                top: 0;
                left: 0;
                padding-top: 70px;

                > h2 {
                    margin-bottom: 4px;
                }

                > ol {
                    > li {
                        padding: 4px;
                    }
                }
            }

            > main {
                flex: 1;
                padding: 16px;
                background: lightgreen;
                overflow: auto;
            }
        }
    }
</style>