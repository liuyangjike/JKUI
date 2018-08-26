<template>
    <div class="two-table">
        <table cellspacing="0" cellpadding="0" border="0" class="j-table" >
            <tr>
                <th class="first-column" >{{xHeader}}/{{yHeader}}</th>
                <th v-for="(item,index) in retVal.xData" :key="index">{{retVal.xTitle[item]}}</th>
            </tr>
            <tr v-for="(item,index) in retVal.yData" :key="index">
                <td class="first-column">{{retVal.yTitle[item]}}</td>
                <td v-for="(subItem,subIndex) in retVal.xData" :key="subIndex">
                    {{retVal.sData[subItem+'_'+item]}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    name: 'two-table',
    props: {
      data: {
        type: Array,
        default: []
      },
      x: {
        type: String,
        default: ''
      },
      y: {
        type: String,
        default: ''
      },
      yHeader: {
        type: String,
        default: ''
      },
      xHeader: {
        type: String,
        default: ''
      },
      xyValue: {
        type: String,
        default: ''
      }
    },
    data () {
        return {
            retVal: {
            }
        }
    },
    methods: {
        resetData () {
            console.log(`${this.x}`)
            this.generateId()
            var xTitle = {}
            var xData = []
            var yTitle = {}
            var yData = []
            var sData = {}
            this.data.forEach(cell => {
                if (xData.indexOf(cell[`${this.x}id`]) === -1) {
                    xData.push(cell[`${this.x}id`])
                    xTitle[cell[`${this.x}id`]] = cell[this.x]
                }
                if (yData.indexOf(cell[`${this.y}id`]) === -1) {
                    yData.push(cell[`${this.y}id`])
                    yTitle[cell[`${this.y}id`]] = cell[this.y]
                }
                sData[cell[`${this.x}id`] + '_' + cell[`${this.y}id`]] = cell[this.xyValue]
            });
            this.retVal = {
                xData,
                xTitle,
                yData,
                yTitle,
                sData,
            }
            
        },
        // 生成xid, yid
        generateId () {
             this.data.forEach(cell => {
                cell[`${this.x}id`] = this.RndNum(10)
                cell[`${this.y}id`] = this.RndNum(10)
            })
            let xlist = []
            let ylist = []
            this.data.forEach(cell => {
                xlist.push(cell[this.x])
                ylist.push(cell[this.y])
            })
            xlist = this.filterArray(xlist)
            ylist = this.filterArray(ylist)
            ylist.forEach(outer => {
                let id = this.RndNum(10)
                this.data.forEach(cell => {
                    if (outer === cell[this.y]) {
                        cell[`${this.y}id`] = id                   
                    }
                })
            })
            xlist.forEach(outer => {
                let id = this.RndNum(10)
                this.data.forEach(cell => {
                    if (outer === cell[this.x]) {
                        cell[`${this.x}id`] = id                   
                    }
                })
            })
        },
        // 生成n位随机数字
        RndNum(n){
            var rnd="";
            for(var i=0;i<n;i++){
                rnd+=Math.floor(Math.random()*10);
            }
            return rnd;
        },
        // 数组去重
        filterArray (arr) {
            for (var i = 0; i < arr.length; i++) {
                if (arr.indexOf(arr[i]) != i) {
                    arr.splice(i,1) //删除数组元素后数组长度减1后面的元素前移
                    i--  //数组下标回退
                }
            }
            return arr;
        }
    },
    created () {
        console.log(this.xHeader)
        if (!this.xHeader) {
            this.xHeader = this.x
            this.yHeader = this.y
        }
        this.resetData()
    }
  }
</script>