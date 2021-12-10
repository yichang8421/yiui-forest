<template>
    <div class="topnav">
        <div class="logo" @click="toggleAside">LOGO</div>
        <ul class="menu">
            <li>菜单</li>
            <li>菜单</li>
            <li>菜单</li>
            <li>菜单</li>
            <li>菜单</li>
            <li>菜单</li>
            <li>菜单</li>
            <li>菜单</li>
            <li>菜单</li>
            <li>菜单</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {inject, Ref} from "vue";

    export default {
        setup() {
            const asideVisible = inject<Ref<boolean>>("asideVisible");

            const toggleAside = () => {
                (asideVisible as any).value = !(asideVisible as any).value;
            };
            return {toggleAside};
        }
    };
</script>

<style lang="scss" scoped>
    .topnav {
        background: pink;
        display: flex;
        padding: 16px;
        position: relative;
        z-index: 10;

        > .logo {
            max-width: 6em;
            margin-right: auto;
        }

        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;

            > li {
                margin: 0 1px;
            }
        }
    }
</style>