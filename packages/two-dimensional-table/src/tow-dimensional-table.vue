<template>
    <div class="tow-dimensional-table">
        <table border="1" style="text-align: center">
            <tr style="height: 38px">
                <th style="width: 80px">颜色/尺码</th>
                <th v-for="(item,index) in retVal.yData" :key="index">{{retVal.sizeTitle[item]}}</th>
            </tr>
            <tr v-for="(item,index) in retVal.xData" :key="index">
                <td>{{retVal.colorTitle[item]}}</td>
                <td v-for="(subItem,subIndex) in retVal.yData" :key="subIndex" class="createNum" :colorsizeid="retVal.csId[item+'_'+subItem]"
                    :sizeid="subItem" :colorid="item" :tableid="renderIndex" :styleid="style_id">
                    <el-input size="small" :disabled="!(customer_id&&renderItem.style_id)||(!form_editStatus)||basicData.status===1" type="number" :value="renderItem.retVal.sData[item+'_'+subItem]"></el-input>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    name: 'tow-dimensional-table',
    prop: {
      data: {
        type: Array,
        default: '/'
      }
    }
  }
</script>

<style scoped>

</style>