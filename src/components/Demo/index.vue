<template>
    <div class="demo">
        <h2>{{component.__sourceCodeTitle}}</h2>
        <div class="demo-component">
            <component :is="component"/>
        </div>
        <div @click="toggleCodeVisible" class="demo-actions">
            {{codeVisible?"隐藏代码":"显示代码"}}
        </div>
        <div class="demo-code">
            <pre class="language-html" v-html="html" v-if="codeVisible"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {computed, ref} from "vue";
    import "prismjs";
    import "prismjs/themes/prism.css";
    import Button from "../../lib/Button/index.vue";

    const Prism = (window as any).Prism;

    export default {
        props: {
            component: Object
        },
        components: {Button},
        setup(props) {
            const codeVisible = ref(false);

            const html = computed(() => {
                return Prism.highlight(props.component.__sourceCode, Prism.languages.html, "html");
            });

            const toggleCodeVisible = () => {
                codeVisible.value = !codeVisible.value;
            };
            return {Prism, html, codeVisible, toggleCodeVisible};
        }
    };
</script>

<style lang="scss">
    $border-color: #d9d9d9;
    $action-color: #f5b764;
    .demo {
        border: 1px solid $border-color;
        margin: 16px 0 32px;

        > h2 {
            font-size: 20px;
            padding: 8px 24px;
            border-bottom: 1px solid $border-color;
        }

        &-component {
            padding: 16px 24px;

            > [disabled] {
                cursor: not-allowed;
            }
        }

        &-actions {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
            display: flex;
            justify-content: center;

            &:hover {
                background: $action-color;
                color: #a24350;
            }
        }

        &-code {
            padding: 16px 24px;
            border-top: 1px dashed $border-color;

            > pre {
                line-height: 1.1;
                font-family: Consolas, 'Courier New', Courier, monospace;
                margin: 0;
            }
        }
    }
</style>