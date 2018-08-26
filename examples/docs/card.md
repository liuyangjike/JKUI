<style scoped>
  .text {
    font-size: 14px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .item {
    margin-bottom: 18px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }
  .box-card {
    width: 480px;
  }
</style>
## Card 卡片
将信息聚合在卡片容器中展示

### 基础用法

包括标题,内容和操作<br>
Card 组件包括`header`和`body`部分，`header`部分需要有显式具名 slot 分发，同时也是可选的。

<div class="demo-box">
  <div class="demo-block">
    <j-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span> 
        <j-button style="float: right; padding: 3px 0px" type="text">操作按钮</j-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o}}
      </div>
    </j-card>
  </div>
</div>

:::demo
```html
<j-card class="box-card">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
    <j-button style="float: right; padding: 3px 0px" type="text">操作按钮</j-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o}}
  </div>
</j-card>
```
:::

 ### 带图片 
 
 可配置定义更丰富的内容展示,
 配置`body-style`属性来自定义`body`部分的`style`，我们还使用了布局组件。
<div class="demo-box">
  <div class="demo-block">
    <j-row>
      <j-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2: 0">
        <j-card :body-style="{padding: '0px'}">
            <img src="../assets/img/pic.png" alt="" class="image">
            <div style="padding: 14px;">
              <span>外滩风景</span>
              <div class="bottom clearfix">
                <time class="time">{{currentDate}}</time>
                <j-button type="text" class="button">按钮</j-button>
              </div>
            </div>
        </j-card>
      </j-col>
    </j-row>
  </div>
</div>


<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>

:::demo
```html
<j-row>
  <j-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2: 0">
    <j-card :body-style="{padding: '0px'}">
      <img src="../assets/img/pic.png" alt="" class="image">
      <div style="padding: 14px;">
        <span>外滩风景</span>
        <div class="bottom clearfix">
          <time class="time">{{currentDate}}</time>
          <j-button type="text" class="button">按钮</j-button>
        </div>
      </div>
    </j-card>
  </j-col>
</j-row>
<script>
  export default {
    data() {
      return {
        currentDate: new Date()
      };
    }
  }
</script>
```
:::

### 卡片阴影 
可对阴影的显示进行配置,通过`shadow`属性设置卡片阴影出现的时机：`always`、`hover`或`never`。

<div class="demo-box">
  <div class="demo-block">
    <j-row :gutter="12">
      <j-col :span="8">
        <j-card shadow="always">
          总是显示
        </j-card>
      </j-col>
      <j-col :span="8">
        <j-card shadow="hover">
          鼠标悬浮时显示
        </j-card>
      </j-col>
      <j-col :span="8">
        <j-card shadow="never">
          从不显示
        </j-card>
      </j-col>
    </j-row>
  </div>
</div>


:::demo
```html
<j-row :gutter="12">
  <j-col :span="8">
    <j-card shadow="always">
      总是显示
    </j-card>
  </j-col>
  <j-col :span="8">
    <j-card shadow="hover">
      鼠标悬浮时显示
    </j-card>
  </j-col>
  <j-col :span="8">
    <j-card shadow="never">
      从不显示
    </j-card>
  </j-col>
</j-row>
```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| header | 设置 header，也可以通过 `slot#header` 传入 DOM | string| — | — |
| body-style | 设置 body 的样式| object| — | { padding: '20px' } |
| shadow | 设置阴影显示时机 | string | always / hover / never | always |
