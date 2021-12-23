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
  import {Button, Tabs, Switch, Dialog, Input, Layout} from "forest-ui";
  export default {
    components: {Button}
  }
</script>
```

现在开始啦：[Button 组件](#/doc/button)