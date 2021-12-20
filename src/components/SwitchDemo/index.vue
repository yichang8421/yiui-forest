<template>
    <div>
        <h1>Switch 组件示例 </h1>
        <div class="demo">
            <h2>常规用法</h2>
            <div class="demo-component">
                <SwitchDemo1/>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre>{{SwitchDemo1["__sourceCode"]}}</pre>
            </div>
        </div>
        <div class="demo">
            <h2>支持 disabled </h2>
            <div class="demo-component">
                <SwitchDemo2/>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre>{{SwitchDemo2["__sourceCode"]}}</pre>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {ref} from "vue";

    import Switch from "../../lib/Switch/index.vue";
    import Button from "../../lib/Button/index.vue";
    import SwitchDemo1 from "../../components/SwitchDemo/Switch1.demo.vue";
    import SwitchDemo2 from "../../components/SwitchDemo/Switch2.demo.vue";

    // console.log(SwitchDemo1["__sourceCode"])

    export default {
        components: {Switch, Button, SwitchDemo1, SwitchDemo2},
        setup() {
            const bool = ref(false);
            return {bool,SwitchDemo1,SwitchDemo2};
        }
    };
</script>

<style lang="scss">
    $border-color: #d9d9d9;
    .demo {
        border: 1px solid $border-color;
        margin: 16px 0 32px;

        > h2 {
            font-size: 20px;
            padding: 8px 16px;
            border-bottom: 1px solid $border-color;
        }

        &-component {
            padding: 16px;

            > [disabled] {
                cursor: not-allowed;
            }
        }

        &-actions {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
        }

        &-code {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;

            > pre {
                line-height: 1.1;
                font-family: Consolas, 'Courier New', Courier, monospace;
                margin: 0;
            }
        }
    }
</style>