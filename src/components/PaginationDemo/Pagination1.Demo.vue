<demo>
    配置分页器参数
</demo>
<template>
    <Pagination @update:pageNo="updatePageNo" :pageInfo="state"/>
</template>
<script>
    import {ref, reactive, watch, nextTick} from "vue";
    import Pagination from "../../lib/Pagination/index.vue";

    export default {
        components: {Pagination},

        setup() {
            // let pageNo = ref(1);
            // let pageSize = ref(10);
            // let total = ref(100);
            // let continues = ref(5);
            // let test = ref(1);

            const state = reactive({
                test: ref(1),
                pageNo: 1,
                pageSize: ref(10),
                total: ref(100),
                continues: ref(5)
            });

            const updatePageNo = (Num) => {
                state.pageNo = Num;
            };

            return {state, updatePageNo};
        },
    };
</script>
