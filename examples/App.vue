<template>
  <div id="app">
    <mainh-header></mainh-header>
    <div class="contianer">
      <side-nav class="nav"></side-nav>
      <router-view class="view"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import mainhHeader from './components/header'
import sideNav from './components/side-nav'
export default {
  name: 'App',
  components: {
    mainhHeader,
    sideNav
  }
}
</script>

<style>
@import "./assets/css/index";
  .contianer {
    margin: 48px auto;
    width: 90%;
    background-color: rgb(182, 31, 31);
    box-shadow: rgba(229, 250, 223, 0.5) 0px 4px 30px 0px;
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
</style>
