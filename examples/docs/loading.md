<style>
  .center{
    padding: 20px;
  }
  .center div{
    margin-right: 50px;
  }
</style>
# Loading 加载组件
----
### 概述
用于过渡效果, 增效用户体验

### 基础用法
由`size`属性来选择`hour`的大小, 默认是正常尺寸, 还可以设置成`small`小尺寸沙漏。

<div class="demo-box">
  <div class="demo-block">
    <div class="center">
        <j-hour ></j-hour>
        <j-hour size='small' ></j-hour>
    </div>

  </div>
</div>

:::demo
```html
<template>
  <j-hour ></j-hour>
  <j-hour size='small' ></j-hour>
</template>
```
:::

### 不同颜色
由`sand-color`属性来选择`沙子`的颜色, 默认为`#409EFF`;
由`back-color`属性来选择`背景`的颜色, 默认为`#D7CED0`;
由`board-color`属性来选择`上下板`的颜色, 默认为`grey`;


<div class="demo-box">
    <div class="demo-block">
      <div class="center">
          <j-hour sand-color='red' board-color='#d11277'></j-hour>
          <j-hour back-color='#888' board-color='#664488' ></j-hour>
          <j-hour board-color='#222' sand-color='orange'></j-hour>
          <j-hour sand-color='yellow' size='small'  ></j-hour>
          <j-hour back-color='#ddd' size='small' sand-color='purple' ></j-hour>
          <j-hour board-color='#222' sand-color='#008844' size='small' ></j-hour>
      </div>
    </div>
  </div>

  :::demo
```html
<template>
    <j-hour sand-color='red' board-color='#d11277'></j-hour>
    <j-hour back-color='#888' board-color='#664488' ></j-hour>
    <j-hour board-color='#222' sand-color='orange'></j-hour>
    <j-hour sand-color='yellow' size='small'  ></j-hour>
    <j-hour back-color='#ddd' size='small' sand-color='purple' ></j-hour>
    <j-hour board-color='#222' sand-color='#008844' size='small' ></j-hour>
</template>
```
:::


### Attributes

| 参数      | 说明        | 类型     | 默认      | 可选值                           | 是否必填  |
|---------- |--------------|--------- |---------- |--------------------------------  |-------- |
| size | 尺寸 | String | normal | normal,small | - |
| sand-color | 沙子颜色 | String | #409EFF | 颜色编码 | - |
| back-color | 背景颜色 | string | #D7CED0 | 颜色编码 |- |
| board-color | 上下板颜色 | string | grey | 颜色编码 |- |
