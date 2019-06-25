<template>
    <!--子类在传递事件时 $emit事件只有两个参数,
     第一个为事件名 第二个为 ...args[] 是一个数组
     可以通过$event获取属性,在复杂表单修改时尤为有用。-->
    <slot-demo @enlarge-text="dealMethod($event)">

    </slot-demo >
</template>

<script>
import SlotDemo from "./slot-demo-child";
export default {
 methods: {
  dealMethod (a) {
   console.log(a);
  }
 },
 name: "slot-demo-parent",
 components: { SlotDemo },
 data () {
  return { num: 0 };
 },
 watch: {
  "num": {
   handler (a, b) {
    console.log(a);
    console.log(b);
   },
   deep: true,
   immediate: true
  }
 }
};
</script>

<style scoped>

</style>
