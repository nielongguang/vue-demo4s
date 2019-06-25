<template>
  <div class="logo">
    <router-link :to="{name:'dashboard'}">
      <img v-if="sidebarOpened" src="/static/images/logo.png" alt="logo" class="sidebar-opened-logo">
      <img v-else src="/static/images/logo-min.png" alt="logo" class="logo-min">
    </router-link>
  </div>
</template>

<script>
import { mixin } from "@/utils/mixin.js"

export default {
 name: "Logo",
 mixins: [mixin],
 props: {
 }
}
</script>

<style lang="less" scoped>
  /*.sider .logo{*/
    /*height: 54px;*/
    /*line-height: 54px;*/
  /*}*/
  .sider .logo img.sidebar-opened-logo{
    height: 65%;
  }
</style>
