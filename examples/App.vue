<template>
  <div id="app">
    <main-header></main-header>
    <j-row class="page-body">
      <div class="contianer">
        <side-nav class="nav"></side-nav>
        <router-view class="view"/>
      </div>
    </j-row>
    <j-row>
      <main-footer class="footer"></main-footer>
    </j-row>
  </div>
</template>

<script>
import Vue from 'vue'
import mainHeader from './components/header'
import sideNav from './components/side-nav'
import mainFooter from './components/footer'
export default {
  name: 'App',
  components: {
    mainHeader,
    sideNav,
    mainFooter
  },
  created() {
    console.log(this)
  }
}
</script>

<style>
@import "./assets/css/index";
  .page-body{
    min-height: 600px;
    box-shadow: rgba(223, 225, 230, 0.5) 0px 4px 30px 0px;
    width: 90%;
    margin: 48px auto;
  }
  .contianer {
    margin: 48px auto;
    width: 100%;
    display: block;
    background-color: rgb(182, 31, 31);
  }
  .footer {
    display: block;
  }
  .contianer .nav{
    float: left;
    width: 15%;
  }
  .contianer .view{
    float: left;
    width: 85%;
    padding: 32px 48px 48px;
    box-sizing: border-box
  }
  .container:after {
    content: "";
    clear: both;
    display: block;
  }
</style>
