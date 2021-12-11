<template>
    <div class="topnav">
        <span class="toggleAside" @click="toggleAside"></span>
        <router-link to="/" class="logo">LOGO</router-link>
        <ul class="menu">
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
        position: fixed;
        width: 100vw;
        z-index: 10;
        top: 0;
        left: 0;

        > .logo {
            max-width: 6em;
            margin-right: auto;

            &:hover {
                border: none;
            }
        }

        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;

            > li {
                margin: 0 1px;
            }
        }

        > .toggleAside {
            display: none;
        }

        @media (max-width: 500px) {
            > .menu {
                display: none;
            }
            > .logo {
                margin: 0 auto;
            }
            > .toggleAside {
                display: inline-block;
                width: 24px;
                height: 24px;
                background: #94deca;
                position: absolute;
                left: 16px;
                top: 50%;
                transform: translateY(-50%);

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
</style>