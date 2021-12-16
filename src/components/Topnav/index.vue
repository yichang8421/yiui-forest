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
            <li>
                <a href="https://github.com/yichang8421" target="_blank">
                    <svg>
                        <use xlink:href="#icon-GitHub"></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://yichang8421.github.io/" target="_blank">
                    <svg>
                        <use xlink:href="#icon-cnblogs"></use>
                    </svg>
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {inject, Ref} from "vue";

    export default {
        setup() {
            const asideVisible = inject<Ref<boolean>>("asideVisible");
            const selectBtnVisible = inject<Ref<boolean>>("selectBtnVisible");

            const toggleAside = () => {
                (asideVisible as any).value = !(asideVisible as any).value;
            };
            const switchBtnVisible = () => {
                if (selectBtnVisible) {
                    selectBtnVisible.value = false;
                }
            };
            return {toggleAside, selectBtnVisible, switchBtnVisible};
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
        background: linear-gradient(175deg, #e3fffd 0%, #b7e9e6 100%);

        > a {
            height: 100%;

            > .logo {
                width: 32px;
                height: 32px;
                max-width: 6em;
                margin-left: 12px;
                margin-right: auto;
                top: 0;
                display: block;
                transition: 200ms linear;

                &:hover {
                    opacity: 70%;
                }
            }

            &:hover {
                border-bottom: none;
            }
        }

        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;
            margin-right: 8px;

            > li {
                margin: 0 8px;

                > a {
                    display: block;
                    border-bottom: none;

                    > svg {
                        width: 32px;
                        height: 32px;
                        top: 0;
                        display: block;
                        transition: 200ms linear;
                        opacity: 50%;

                        &:hover {
                            opacity: 100%;
                        }
                    }
                }
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
                    transform: translate(-50%);
                }

                > .toggleAside {
                    > .select {
                        width: 22px;
                        height: 20px;
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