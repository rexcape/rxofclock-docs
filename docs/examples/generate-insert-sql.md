---
sidebar_position: 1
---

# 生成 SQL 插入语句

## 源工作簿

| fruit  | price |
| :----: | :---: |
| apple  |  10   |
| banana |  15   |

## 模板配置

```hbs
{{#each data}}
INSERT INTO FRUITS VALUES('{{fruit}}',{{price}})
{{/each}}
```

## 生成结果

```sql
INSERT INTO FRUITS VALUES('apple', 10);
INSERT INTO FRUITS VALUES('banana', 15);
```
