<template>
    <div class="pagination">
        <button :disabled="pageInfo.pageNo===1" @click="getNum(pageInfo.pageNo-1)">上一页</button>
        <button v-show="startNumAndEndNum.start>1" @click="getNum(1)" :class="{active:pageInfo.pageNo===1}">1</button>
        <button v-show="startNumAndEndNum.start>2">···</button>

        <button v-for="(page,index) in startNumAndEndNum.end" :key="index" v-show="page>=startNumAndEndNum.start"
                @click="getNum(page)" :class="{active:page=== pageInfo.pageNo}">
            {{page}}
        </button>

        <button v-show="startNumAndEndNum.end<totalPage-1">···</button>
        <button v-show="startNumAndEndNum.end<totalPage" @click="getNum(totalPage)"
                :class="{active: pageInfo.pageNo===totalPage}">
            {{totalPage}}
        </button>
        <button :disabled="pageInfo.pageNo===totalPage" @click="getNum(pageInfo.pageNo+1)">下一页</button>

        <button style="margin-left: 30px">第 {{pageInfo.pageNo}} 页</button>
        <button>共 {{pageInfo.total}} 条</button>
    </div>
</template>

<script lang="ts">
    import {reactive, computed} from "vue";

    export default {
        props: {
            pageNo: {
                type: Number,
                default: 1
            },
            pageSize: {
                type: Number,
                default: 10
            },
            total: {
                type: Number,
                default: 100
            },
            continues: {
                type: Number,
                default: 5
            },

            pageInfo: {
                type: Object
            }
        },


        setup(props, context) {
            let state = reactive(props);

            const {pageNo, pageSize, total, continues, pageInfo} = state;

            const totalPage = computed(
                () => {
                    return Math.ceil(pageInfo.total / pageInfo.pageSize);

                });

            const startNumAndEndNum = computed(() => {
                let start = 0;
                let end = 0;
                if (totalPage.value < pageInfo.continues) {
                    start = 1;
                    end = totalPage.value;
                } else {
                    let delta = parseInt((pageInfo.continues / 2).toString()) - 1;
                    start = pageInfo.pageNo - delta;
                    end = pageInfo.pageNo + delta;
                    if (start < 1) {
                        start = 1;
                        end = pageInfo.continues;
                    }

                    if (end > totalPage.value) {
                        start = totalPage.value - pageInfo.continues + 1;
                        end = totalPage.value;
                    }

                    if (pageInfo.pageNo < pageInfo.continues) {
                        start = 1;
                        end = pageInfo.continues;
                    }
                    if (pageInfo.pageNo > totalPage.value - pageInfo.continues + 1) {
                        start = totalPage.value - pageInfo.continues + 1;
                        end = totalPage.value;
                    }
                }

                return {start, end};
            });

            const getNum = (Num) => {
                context.emit("update:pageNo", Num);
            };

            return {pageNo, pageSize, total, continues, totalPage, startNumAndEndNum, getNum, pageInfo};
        },
    };


</script>

<style lang="scss" scoped>
    .pagination {
        text-align: center;

        button {
            margin: 0 5px;
            background-color: #f4f4f5;
            color: #606266;
            outline: none;
            border-radius: 2px;
            padding: 0 4px;
            vertical-align: top;
            display: inline-block;
            font-size: 13px;
            min-width: 35.5px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border: 0;

            &[disabled] {
                color: #c0c4cc;
                cursor: not-allowed;
            }

            &.active {
                cursor: not-allowed;
                background-color: #409eff;
                color: #fff;
            }
        }

        .active {
            background: skyblue;
        }
    }
</style>