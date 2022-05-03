---
sidebar_position: 1
title: Handlebars 基础
---

:::info

本文章取自 [Handlebars 官方中文文档](https://handlebarsjs.com/zh/guide/)

:::

## 什么是 Handlebars

Handlebars 是一个简单的模板语言，它使用模板来生成 HTML 或其他文本。
一个 Handlebars 模板如下所示

```handlebars
{{firstname}} {{lastname}}
```

一个 handlebars 表达式由 `{{` 开始，跟随一些内容，并以 `}}` 结束。
当模板被执行后，这些表达式会被一个输入对象所代替

## 语言特性

### 简单表达式

下面的模板对应两个 Handlebars 表达式

```handlebars
{{firstname}} {{lastname}}
```

如果传入的对象是

```js
{
  firstname: "forte",
  lastname: "escape"
}
```

这个模板就会被嵌入对应属性，输出结果如下

```plain
forte escape
```

### 嵌套对象

如果传入的对象包含了其他对象或数组，例如

```js
{
  person: {
    firstname: "forte",
    lastname: "escape"
  }
}
```

可以使用 `.` 来访问嵌套属性

```handlebars
{{person.firstname}} {{person.lastname}}
```

一些内置助手可以改变嵌套对象的上下文，这种情况下可以直接访问对象的属性

### 上下文

内置的块助手代码 each 和 with 允许更改当前代码块的上下文

with 块内的代码可以直接访问对象的属性

```handlebars
{{#with person}}
{{firstname}} {{lastname}}
{{/with}}
```

```js
{
  person: {
    firstname: "forte",
    lastname: "escape"
  }
}
```

each 可以遍历一个数组，你可以在循环中访问每个遍历对象的值

```handlebars
{{#each fruits}}
{{this}}
{{/each}}
```

```js
{
  fruits: [
    "apple",
    "banana",
    "orange"
  ]
}
```
