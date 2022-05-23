---
sidebar_position: 2
---

# 生成 SQL 建表语句

## 源工作簿

| column |  type   | length |  comment   |
| :----: | :-----: | :----: | :--------: |
|  name  | varchar |   10   | fruitname  |
| price  | decimal |   8    | fruitprice |

## 模板配置

```hbs
CREATE TABLE FRUIT(
{{#each data}}
  `{{column}}` {{type}}({{length}}) COMMENT '{{comment}}',
{{/each}}
) COMMENT 'Fruit table';
```

## 生成结果

结果可能需要手动修改小部分，但是相信我——本程序会在有 20 条以上字段时变得非常有用

```sql
CREATE TABLE FRUIT(
  `name` varchar(10) COMMENT 'fruitname',
  `price` decimal(8) COMMENT 'fruitprice',
) COMMENT 'Fruit table';
```
