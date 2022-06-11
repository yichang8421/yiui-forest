<template>
    <div class="yiui-layout-demo">
        <h1>Layout 示例</h1>
        <p> Layout 用于常见页面的布局，方便快速搭建页面的基本结构。 </p>
        <pre style="display: inline-block" v-html="Prism.highlight('<Container>', Prism.languages.html, 'html')"/>
        外层容器。当子元素中包含
        <pre style="display: inline-block" v-html="Prism.highlight('<Header>', Prism.languages.html, 'html')"/>
        或
        <pre style="display: inline-block" v-html="Prism.highlight('<Footer>', Prism.languages.html, 'html')"/>
        时，全部子元素会垂直上下排列，否则会水平左右排列。
        <p>
        <pre style="display: inline-block" v-html="Prism.highlight('<Header>', Prism.languages.html, 'html')"/>
        导航栏容器。
        </p>
        <p>
        <pre style="display: inline-block" v-html="Prism.highlight('<Main>', Prism.languages.html, 'html')"/>
        主内容区。 </p>
        <p>
        <pre style="display: inline-block" v-html="Prism.highlight('<Aside>', Prism.languages.html, 'html')"/>
        侧边栏。 </p>
        <p>
        <pre style="display: inline-block" v-html="Prism.highlight('<Footer>', Prism.languages.html, 'html')"/>
        底栏容器。 </p>
        <Demo :component="LayoutDemo1"/>
        <Demo :component="LayoutDemo2"/>
        <Demo :component="LayoutDemo3"/>
        <Demo :component="LayoutDemo4"/>
        <Attributes :data="data"/>
        <Pagejump :lastPage="{ route: '/doc/switch', content: 'Switch 组件' }"
                  :nextPage="{ route: '/doc/pagination', content: 'Pagination 组件' }"/>
    </div>
</template>

<script lang="ts">
    import "prismjs";
    import "prismjs/themes/prism.css";
    import LayoutDemo1 from "/src/components/LayoutDemo/Layout1.demo.vue";
    import LayoutDemo2 from "/src/components/LayoutDemo/Layout2.demo.vue";
    import LayoutDemo3 from "/src/components/LayoutDemo/Layout3.demo.vue";
    import LayoutDemo4 from "/src/components/LayoutDemo/Layout4.demo.vue";
    import Demo from "/src/components/Demo/index.vue";
    import Attributes from "/src/components/Attributes/index.vue";
    import Pagejump from "/src/components/Pagejump/index.vue";

    const Prism = (window as any).Prism;

    export default {
        components: {Demo, Attributes, Pagejump},
        setup() {
            const data = [
                {
                    params: "direction",
                    desc: "Container 标签子元素的排列方向",
                    type: "String",
                    select: "horizontal | vertical",
                    default: "子元素中有 Header 标签或 Footer 标签时为 vertical; 其他情况为 horizontal",
                },
                {
                    params: "height",
                    desc: "Header 、Footer 或 Main 标签的高度",
                    type: "String",
                    select: "——",
                    default: "60px(Header/Footer) / 160px(Main)",
                },
                {
                    params: "width",
                    desc: "Aside 标签的宽度",
                    type: "String",
                    select: "——",
                    default: "300px",
                },
            ];
            return {Prism, LayoutDemo1, LayoutDemo2, LayoutDemo3, LayoutDemo4, data};
        }
    };
</script>

<style lang="scss">
    .yiui-layout-demo {
        p {
            margin: 16px 0;
        }
    }
</style>

