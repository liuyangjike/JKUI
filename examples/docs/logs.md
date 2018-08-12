# Logs 更新日志
----
* 2018/8/3 ```v1.0.5``` 发布 新增 icon 组件已经说明
* 2018/8/2 ```v1.0.4``` 发布 测试npm
* 2018/8/2 ```v1.0.2``` 发布 修改README.md
* 2018/8/2 ```v1.0.1``` 发布 修改bug
* 2018/8/2 ```v1.0.0``` 发布 功能: Layout, Button

<script>
  var iconList = require('../icon.json');

  export default {
    data() {
      return {
        icons: iconList
      };
    },
    methods: {
      show () {
        console.log(this)
        this.$message({
          showClose: true,
          type: 'error',
          message: 'Hello'
        })
      }
    }
  }
</script>
<div class="demo-box">
  <div class="demo-block">
    <j-button @click="show">button</j-button>
  </div>
</div>
