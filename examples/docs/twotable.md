
# Twotable 二维表格
----
### 基础用法
由`data`属性来绑定数据，x属性设置列名, y属性设置行名。


<div class="demo-box">
  <div class="demo-block">
<two-table :data="tableData" x="size" y="color" xy-value="quantity" x-header="颜色" y-header="尺码" style="width:500px;"></two-table>
  </div>
</div>
<script>
 export default{
   data () {
     return {
       tableData: [
          {color: 'red', size: 'S', quantity: 100},
          { color: 'red', size: 'M', quantity: 60 },
          { color: 'red', size: 'L', quantity: 30 },
          { color: 'blue', size: 'M', quantity: 90 },
          { color: 'blue', size: 'L', quantity: 20 },
          { color: 'blue', size: 'S', quantity: 80 }
       ]
     }
   }
 }
</script>

:::demo
```html

<template>
  <two-table :data="tableData" x="size" y="color" xy-value="quantity" x-header="颜色" y-header="尺码" style="width:500px;"></two-table>
</template>
<script>
 export default{
   data () {
     return {
       tableData: [
          {color: 'red', size: 'S', quantity: 100},
          { color: 'red', size: 'M', quantity: 60 },
          { color: 'red', size: 'L', quantity: 30 },
          { color: 'blue', size: 'M', quantity: 90 },
          { color: 'blue', size: 'L', quantity: 20 },
          { color: 'blue', size: 'S', quantity: 80 }
       ]
     }
   }
 }
</script>
```
:::



### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data | 显示数据 | array | — | 必填 |
| x | 列名 | string | — | 必填 |
| y | 行名 | string | — | 必填 |
| xy-value | 表格单元要显示的数据名 | string | — | 必填 |
| x-header | x向表头名 | string | — | 选填 |
| y-header | y向表头名 | string | — | 选填 |
