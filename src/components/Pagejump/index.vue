<template>
    <div class="yiui-pagejump">
        <router-link :to="lastPage.route" v-if="lastPage"><span>{{lastPage.content}}</span>
        </router-link>
        <router-link :to="nextPage.route" v-if="nextPage"><span>{{nextPage.content}}</span></router-link>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            lastPage: {
                type: Object,
                default: null
            },
            nextPage: {
                type: Object,
                default: null
            }
        }
    };
</script>

<style lang="scss">
    .yiui-pagejump {
        display: flex;
        justify-content: space-between;
        padding-bottom: 16px;

        > a > span {
            color: #1890ff;

            &:hover {
                border-bottom: 3px double #1890ff;
            }
        }
    }
</style>