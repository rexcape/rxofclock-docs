---
sidebar_position: 1
title: "自定义助手"
---

:::caution 使用须知

在浏览器中将字符串转换为 JavaScript 代码有安全隐患，如果您不放心请勿使用该特性

该项目使用纯前端实现，系统不会上传代码以及文件到任何服务器。如用此系统对您的项目造成损失，本项目概不负责

:::

## 概述

如果内置助手不能满足您，可以尝试使用自定义助手。使用自定义助手需要勾选页面下方的 CUSTOM HELPERS 前的选择框

## 使用方法

内置助手的使用非常简单，直接将您的自定义助手赋值给 helpers 对象

```javascript
helpers["sayHello"] = () => "Hello world!";
```

在模板编辑中直接调用该助手

```hbs
{{sayHello}}
```

会得到以下输出

```text
Hello world!
```

有关助手的定义请参考 [助手的使用](/basics/helpers)，更详细的说明请参考 [Handlebars 文档](https://handlebarsjs.com/guide/)
