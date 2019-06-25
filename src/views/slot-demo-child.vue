<template>
    <div class="t10">
        <slot  name="main"></slot>
        <Card>
            iview
         <i-button>1231s</i-button>
        </Card>

        <a-card  >
            antd
        <a-button>123</a-button>
        </a-card>

        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer" :data="testObj"></slot>
        </footer>

        <a-card>

        <AButton type="primary" @click="testMethod($event)">
            测试设置$event
        </AButton>

            <a-Button type="primary" @click="testMethod1($event)" class="t10">
                测试set
            </a-Button>

            <a-Button type="primary" @click="testMethod2($event)" class="t10">
                测试components
            </a-Button>
        <!--计算属性 -->
        <li v-for="n in evenNumbers">{{ n }}</li>
        <!--使用 v-model.number可以使输入变为数值,但是不限制精度-->
            <a-input v-model.number="testObj.age" class="t10"></a-input>

            <i-input v-model.number="testObj.age" class="t10"></i-input>

        <a-button @click="$emit('enlarge-text',0.1)" class="t10">
            Enlarge text
        </a-button>
        <!--hello-text 在父类没有接收事件的方法,该事件丢失-->
        <i-button @click="$emit('hello-text',0.1)" class="t10">
            el1 text
        </i-button>
        </a-card>
    </div>
</template>

<script>
import Button from 'iview/src/components/button/button'
import Card from 'iview/src/components/card/card'
export default {
  components: { Card, Button },
  data () {
    return {
      age: 0,
      question: [],
      numbers: [1, 2, 3, 4, 5],
      items: [],
      testObj: { name: 'nlg', age: 'hello' }
    }
  },
  watch: {
    // 必须为字符串否则不识别 deep表示深度搜索深度 immediate表示立刻执行
    'testObj': {
      handler (a, b) {
        console.log(a)
        console.log(b)
      },
      deep: true,
      immediate: true
    },
    items () {
      console.log(this.items)
    }
  },
  computed: {
    evenNumbers () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  name: 'slot-demo',
  methods: {
    testMethod (a) {
      console.log(a)
    },
    testMethod1 () {
      this.$set(this.items, this.items.length, 'hello')
      this.$set(this.numbers, this.numbers.length, 12)
      this.testObj.age = 11
    },
    testMethod2 () {
      this.numbers.splice(this.numbers.length - 1, 1)
      this.items.splice(this.items.length - 1, 1)
    }

  }
}
</script>

<style scoped lang="less">
    .t10{
        margin-top: 10px;
        margin-left: 10px
    }

</style>
