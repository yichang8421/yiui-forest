# 森林 UI

* 官网预览：[森林 UI](https://yichang8421.gitee.io/forest-ui/index.html)

森林 UI 是一款基于 Vue 3 和 TypeScript 的小型 UI 组件库。

这款组件库是我在学习 Vue 3 和 TypeScript 期间的成果。全程手写，包括 UI 组件、测试 Demo 以及响应式官网。

考虑到这是我个人学习期间的作品，还未经过广泛的用户测试，因此目前不建议用于生产环境。

但是这个库还是值得一看的，它涵盖了 UI 组件库应该如何组织代码的基本细节。官方文档可查看示例代码，并支持 PC 和手机浏览。

深入研究 Vue3，使用了 setup、onMounted、watchEffect、ref、computed 等 Composition API

源代码放在了 [这里](https://github.com/yichang8421/yiui-forest)，提交历史信息非常规范，你可以按提交顺序逐个查看；也可以直接查看每个组件的源代码和示例。

## 当前支持的组件

- [x] Button 按钮
- [x] Input 输入框
- [x] Dialog 弹出框
- [x] Tabs 标签切换
- [x] Switch 开关
- [x] Layout 布局
- [ ] ...

# 安装

打开终端运行下列命令：

```npm i yiui-forest```

或者

```yarn add yiui-forest```

# 开始使用

请先[安装](#/doc/install)本组件库。

引入 UI 组件

```import {Button, Tabs, Switch, Dialog, Input, Layout} from "yiui-forest";```

## Vue 单文件组件

代码示例：

```
<template>
  <div><Button>按钮</Button></div>
</template>
<script>
  import {Button, Tabs, Switch, Dialog, Input, Layout} from "yiui-forest";
  export default {
    components: {Button}
  }
</script>
```