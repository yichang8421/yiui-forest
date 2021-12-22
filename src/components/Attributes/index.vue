<template>
    <div class="yiui-attr">
        <h2>Attributes</h2>
        <table class="yiui-attr-table">
            <thead>
            <tr>
                <th :key="item.dataIndex" class="yiui-attr-table-title" v-for="item in columns">
                    {{item.title}}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr :key="obj" v-for="obj in data">
                <td :key="item.params" class="yiui-attr-table-item" v-for="item in obj">
                    {{item}}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import {columns} from "../../lib/AttrColumn.ts";

    export default {
        props: {
            data: {
                type: Object
            }
        },
        setup() {
            return {columns};
        }
    };
</script>

<style lang="scss">
    $border-color: #d9d9d9;
    $teble-line-height: 40px;
    $font-color: #808080;

    .yiui-attr {
        > h2 {
            font-size: 24px;
            font-weight: bold;
            padding: 8px 0;
            border-bottom: 2px solid $border-color;
        }

        &-table {
            border-collapse: collapse;
            line-height: $teble-line-height;
            width: 100%;
            margin-bottom: 32px;

            &-title {
                /*border: 1px solid red;*/
                text-align: left;
                padding-left: 6px;
                border-bottom: 2px solid $border-color;
            }

            &-item {
                /*border: 1px solid blue;*/
                text-align: left;
                padding-left: 8px;
                border-bottom: 2px solid $border-color;
                color: $font-color;
            }
        }
    }
</style>