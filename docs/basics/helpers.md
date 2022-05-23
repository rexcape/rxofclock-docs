---
sidebar_position: 3
title: 助手的使用
---

:::info

本文章取自 [Handlebars 官方中文文档](https://handlebarsjs.com/zh/guide/expressions.html#%E5%8A%A9%E6%89%8B%E4%BB%A3%E7%A0%81)

:::

助手代码可以实现一些并非 Handlesbars 语言本身的功能。

在运行时可以用 HandleBars.registerHelper 可以注册助手代码。例如为了将字符串中的所有字符转换为大写。

```js
Handlebars.registerHelper("loud", function (aString) {
  return aString.toUpperCase();
});
```

Handlebars 助手代码的调用需要一个简单标识符，且可紧接一个或多个参数（以空格分割）。每一参数为一个 Handlebars 表达式，且 将会用于上方“基本用法”中相同的方法来计算。

```handlebars
{{firstname}} {{loud lastname}}
```

此例子中，`loud` 是助手代码的名称，而 `lastname` 为传递给助手代码的参数。此模板，将会将输入的 `uppercase` 属性正确地转换为大写：

输入

```javascript
{
  firstname: "Yehuda",
  lastname: "Katz",
}
```

输出

```text
Yehuda KATZ
```

## 避免助手代码的返回值被 HTML 转义

即使当使用 `{{` 而非 `{{{` 来调用助手代码时，当你的助手代码返回一个 `Handlebars.Safestring` 的实例，返回值也并不会被转义。你需要留心将所有参数正确地使用 `Handlebars.escapeExpression` 来转义。

```js
Handlebars.registerHelper("bold", function (text) {
  var result = "<b>" + Handlebars.escapeExpression(text) + "</b>";
  return new Handlebars.SafeString(result);
});
```

## 具有多个参数的助手代码

我们观察一下另一个具有两个参数的助手代码：

```handlebars
{{link "See Website" url}}
```

此例子中，Handlebars 将把两个参数传递给 link 助手代码：字符串与从下面提供的 people 输入对象中的 people.value。

```plain
{ url: "https://yehudakatz.com/" }
如同代码中所述，此助手代码 link 用于生成一个超链接。
```

```js
Handlebars.registerHelper("link", function (text, url) {
  var url = Handlebars.escapeExpression(url),
    text = Handlebars.escapeExpression(text);
  return new Handlebars.SafeString("<a href='" + url + "'>" + text + "</a>");
});
```

我们会从上面的输入获得如下输出：

```plain
<a href='https://yehudakatz.com/'>See Website</a>
在此例中，你可以使用同一助手代码，但使用基于 people.text 的值的动态文本：
```

```handlebars
{{link people.text people.url}}
```

```plain
{
  people: {
    firstname: "Yehuda",
    lastname: "Katz",
    url: "https://yehudakatz.com/",
    text: "See Website",
  },
}
```

## 字面量参数

帮助代码调用亦可含字面量，作为参数或 Hash 参数。支持的字面量有数字、字符串、true, false, null 及 undefined：

```handlebars
{{progress "Search" 10 false}}
{{progress "Upload" 90 true}}
{{progress "Finish" 100 false}}
```

## 含有 Hash 参数的助手代码

Handlebars 提供了额外的元数据，例如 Hash 参数来作为助手代码的最后一个参数。

```handlebars
{{link "See Website" href=person.url class="person"}}
```

在此模版中，最后一个参数 href=people.url class="people" 为传送至助手代码的 Hash 参数。

Hash 参数中的键必须为简单标识符，且值为 Handlebars 表达式。这意味着值可以为简单标识符，路径或字符串。

若将如下输入传入模版，其中 person.url 的值可以从 person 中获取。

```plain
{
  person: {
    firstname: "Yehuda",
    lastname: "Katz",
    url: "https://yehudakatz.com/",
  },
}
```

正如以下助手代码中的描述，Hash 参数可以从最后一个参数 options 获取，以用于助手代码内部的进一步处理。

```js
Handlebars.registerHelper("link", function (text, options) {
  var attributes = [];

  Object.keys(options.hash).forEach((key) => {
    var escapedKey = Handlebars.escapeExpression(key);
    var escapedValue = Handlebars.escapeExpression(options.hash[key]);
    attributes.push(escapedKey + '="' + escapedValue + '"');
  });
  var escapedText = Handlebars.escapeExpression(text);

  var escapedOutput = "<a " + attributes.join(" ") + ">" + escapedText + "</a>";
  return new Handlebars.SafeString(escapedOutput);
});
```

上述助手代码产生的输出如下：

```plain
<a class="person" href="https://yehudakatz.com/">See Website</a>
```

Handlebars 亦提供了使用一个模版块来调用助手代码的机制。块助手代码可用于执行任意次数（包括零次）的代码块并且使用它所选择 的任意上下文。

## 助手代码和属性查找时的消歧义

如果助手代码注册时的名称和一个输入的属性名重复，则助手代码的优先级更高。如果你想使用输入的属性，请在其名称前加 ./ 或 this.。（或是**已弃用**的 this/。）

```handlebars
helper: {{name}}
data: {{./name}} or {{this/name}} or {{this.name}}
input
{ name: "Yehuda" }
preparationScript
Handlebars.registerHelper('name', function () {
    return "Nils"
})
```
