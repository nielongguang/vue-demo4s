<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <h3>我是一个父组件</h3>
    <!--显示子组件，在child组件写入一个HTML模板，该模板会替换子组件的slot-->
    <slot-demo>
      <ATable></ATable>
      <div slot="main" >
        有位非常漂亮的女同事，有天起晚了没有时间化妆便急忙冲到公司。结果那天她被记旷工了……
      </div>
    </slot-demo>

    <slot-demo>
      <template v-slot:header="{}">
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template v-slot:footer="{ data }" >
        {{data.name}}
        <p>Here's some contact info</p>
      </template>
    </slot-demo>

  </div>
</template>

<script>
import SlotDemo from "./slot-demo-child";
export default {
 name: "Dashboard",
 components: { SlotDemo }
};
</script>

<style scoped>

</style>
