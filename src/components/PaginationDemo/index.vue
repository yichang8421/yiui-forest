<template>
    <h1>Pagination 示例</h1>
    <p style="margin: 16px 0;">分页器组件。</p>
    <Demo :component="PaginationDemo1"/>
    <Attributes :data="data"/>
    <Pagejump :last-page="{ route: '/doc/layout', content: 'Layout 组件' }"/>
</template>

<script lang="ts">
    import PaginationDemo1 from "../../components/PaginationDemo/Pagination1.Demo.vue";
    import Demo from "../../components/Demo/index.vue";
    import Attributes from "../../components/Attributes/index.vue";
    import Pagejump from "../../components/Pagejump/index.vue";

    export default {
        components: {PaginationDemo1, Demo, Attributes, Pagejump},
        setup() {
            const data = [
                {
                    params: "pageNo",
                    desc: "当前所处页面",
                    type: "Number",
                    select: "≧1 && ≦(total/pageSize)",
                    default: "1",
                },
                {
                    params: "pageSize",
                    desc: "每页展示数据条数",
                    type: "Number",
                    select: "≧1",
                    default: "10",
                },
                {
                    params: "total",
                    desc: "展示数据总数",
                    type: "Number",
                    select: "≧1",
                    default: "10",
                },
                {
                    params: "continues",
                    desc: "分页器中间连续页码的个数",
                    type: "Number",
                    select: "≧1",
                    default: "5",
                },
            ];

            return {data, PaginationDemo1, Demo, Attributes, Pagejump};
        }
    };
</script>

<style lang="scss" scoped>

</style>