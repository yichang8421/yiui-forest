<template>
    <div>
        <Topnav/>
        <div class="content">
            <aside>
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
            <main>主内容</main>
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
    aside {
        background: yellowgreen;
        width: 150px;
        height: 100vh;
        padding: 16px;
        top: 0;
        left: 0;
        position: fixed;
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
</style>