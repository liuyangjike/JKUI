<template>
  <div class="side-nav">
    <div v-for="title in Object.keys(data)" class="group-container">
      <p class="side-nav-title">{{title}}</p>
      <div class="side-nav-items" v-for="nav in data[title]">
        <router-link :to="{name: nav.name}" v-if="nav.name" :class="$route.name===nav.name ? 'active' : ''">{{nav.desc}}</router-link>
        <p v-else class="side-nav-group">{{nav.desc}}</p>
        <div v-for="item in nav.items" >
          <router-link :to="{name: item.name}" :class="$route.name===item.name? 'active': ''" class="side-nav-component">{{item.desc}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import navConf from '../nav.config.json'
  export default {
    data () {
      return {
        data: navConf
      }
    },
    created() {
    }
  }
  
</script>

<style>
  .side-nav{
    display: inline-block;
    margin: 32px 0;
    padding: 0;
    color: 3F536E;
    height: 100%;
    background-color: #fff;
    z-index: 10;
  }
  .side-nav .group-container{
    margin-bottom: 32px;
  }
  .side-nav .group-container .side-nav-title{
    color: #8DABC4;
    padding: 0 24px 8px;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .side-nav .group-container .side-nav-items{
    font-size: 14px;
    font-weight: normal;
    line-height: 1.8;
  }
  .side-nav .group-container .side-nav-items a{
    display: block;
    color: #3F536E;
    padding: 8px 24px;
    position: relative;
    line-height: 1.5;
    cursor: pointer;
    font-weight: normal;
  }
  .side-nav .group-container .side-nav-items .side-nav-group{
    display: block;
    position: relative;
    padding: 6px 0px 6px 24px;
    color: #2C405A;
    font-size: 14px;
    font-weight: bold;
  }
  .side-nav .group-container .side-nav-items .side-nav-component{
    display: block;
    position: relative;
    padding: 6px 24px 6px 32px;
    color: #616367;
    font-size: 14px;
  }
  .side-nav .group-container .side-nav-items .side-nav-component:hover{
    color: #409eff;    
  }
  .side-nav .group-container .side-nav-items .active{
    color: #409eff;
  }
</style>
