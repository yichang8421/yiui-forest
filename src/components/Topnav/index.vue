<template>
    <div class="topnav">
        <span @click="toggleAside" class="toggleAside" v-if="selectBtnVisible">
            <svg class="select">
                <use xlink:href="#icon-xuanxiang"></use>
            </svg>
        </span>
        <router-link @click="switchBtnVisible" to="/">
            <svg class="logo">
                <use xlink:href="#icon-food-pizza"></use>
            </svg>
        </router-link>
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
            const selectBtnVisible = inject<Ref<boolean>>("selectBtnVisible");
            console.log(selectBtnVisible?.value);

            const toggleAside = () => {
                (asideVisible as any).value = !(asideVisible as any).value;
            };
            const switchBtnVisible = () => {
                if (selectBtnVisible) {
                    selectBtnVisible.value = false;
                }
            };
            return {toggleAside, selectBtnVisible,switchBtnVisible};
        }
    };
</script>

<style lang="scss" scoped>
    .topnav {
        display: flex;
        padding: 16px;
        position: fixed;
        width: 100vw;
        z-index: 10;
        top: 0;
        left: 0;
        justify-content: space-between;
        border: 1px solid red;

        > a {
            > .logo {
                width: 28px;
                height: 28px;
                max-width: 6em;
                margin-right: auto;
                top: 0;
            }

            &:hover {
                border-bottom: none;
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
            & {
                > .menu {
                    display: none;
                }

                > a {
                    margin-left: 50%;
                }

                > .toggleAside {
                    > .select {
                        width: 24px;
                        height: 24px;
                    }

                    display: inline-block;
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
    }
</style>