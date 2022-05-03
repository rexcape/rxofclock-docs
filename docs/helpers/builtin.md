---
sidebar_position: 1
---

# 内置助手

## if

可使用 `#if` 助手来根据条件渲染，如果其参数返回 `false`、`undefined`、`null`、`''`、`0` 或 `[]`，handlebars 将不会渲染该代码块

## unless

`unless` 助手与 if 相反，如果返回 false 将会渲染代码块

## each

`each` 助手代码用于遍历列表，在块内可以使用 this 来引用被迭代的元素

## with

`with` 助手代码用于更改块的上下文表达式

## lookup

`lookup` 助手代码允许使用 Handlebars 变量进行动态的参数解析，这对于解析数组索引的值非常有用

## log

`log` 助手代码允许在执行模板时记录上下文的状态
