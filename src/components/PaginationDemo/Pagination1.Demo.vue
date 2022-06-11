<demo>
    配置分页器参数
</demo>
<template>
    <Pagination @update:pageNo="updatePageNo" :pageInfo="state"/>
</template>
<script>
    import {reactive} from "vue";
    import Pagination from "../../lib/Pagination/index.vue";

    export default {
        components: {Pagination},

        setup() {
            const state = reactive({
                pageNo: 1,
                pageSize: 10,
                total: 100,
                continues: 5
            });

            const updatePageNo = (Num) => {
                state.pageNo = Num;
                // ...向服务器发请求
            };

            return {state, updatePageNo};
        },
    };
</script>
