<style>
  .j__tag{
    margin-right: 10px;
  }
</style>

# Tag 标签
----
### 基础用法
由`type`属性来选择tag的类型，也可以通过`color`属性来自定义背景色。

<div class="demo-box">
  <div class="demo-block">
    <j-tag>标签一</j-tag>
    <j-tag color="success">标签二</j-tag>
    <j-tag color="info">标签三</j-tag>
    <j-tag color="warning">标签四</j-tag>
    <j-tag color="danger">标签五</j-tag>
  </div>

::: demo
```html
<div>
  <j-tag>标签一</j-tag>
  <j-tag color="success">标签二</j-tag>
  <j-tag color="info">标签三</j-tag>
  <j-tag color="warning">标签四</j-tag>
  <j-tag color="danger">标签五</j-tag>
</div>
```
:::
</div>


 ### 可移除标签 
 设置```closable```属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，它接受一个Boolean，true 为关闭。

<div class="demo-box">
  <div class="demo-block">
      <j-tag
      :key="index"
      v-for="(tag, index) in dynamicTags"
      closable
      :disable-transition="false"
      @close="handleClose(tag)" :color="tag.color">{{tag.name}}
    </j-tag>
    <script>
      export default {
        data() {
          return {
            dynamicTags: [
              {
                name: '标签一',
                color: 'primary'
              },
              {
                name: '标签二',
                color: 'success'
              },
              {
                name: '标签三',
                color: 'info'
              },
              {
                name: '标签四',
                color: 'danger'
              }
            ]
          }
        },
        methods: {
          handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
          }
        }
      }
    </script>
    </div>

  ::: demo
  ```html
<div>
    <j-tag
      :key="index" 
      v-for="(tag, index) in dynamicTags" 
      closable :disable-transition="false" 
      @close="handleClose(tag)" 
      :color="tag.color">{{tag.name}}
    </j-tag>
    <script>
      export default {
        data() {
          return {
            dynamicTags: [{
                name: '标签一',
                color: 'primary'
              },
              {
                name: '标签二',
                color: 'success'
              },
              {
                name: '标签三',
                color: 'info'
              },
              {
                name: '标签四',
                color: 'danger'
              }
            ]
          }
        },
        methods: {
          handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
          }
        }
      }
    </script>
</div>
```
:::

 </div>

## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 用于触发关闭事件时的回调 | Boolean | — | false |
| color | 类型 | String |  `primary`, `success`, `error`, `warning`, `info` | primary |
| closable | 是否可关闭 | Boolean | — | false |

## Tag 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| close | 点击关闭按钮时触发 | event |
