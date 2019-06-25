<template>
    <Table :data.sync="serviceData" :columns="serviceColumns" style="margin-top: 10px">

        <template slot-scope="{ row ,index }" slot="tId"
                  class="tableCss"
        >
            <div style="text-align: center;margin-top: 10px;">
                <Row class="materialCss" style="padding-top: 10px;">
                    {{index+1}}
                </Row>
            </div>
        </template>

        <template slot-scope="{ row ,index }" slot="serviceName"
                  class="materialCss"
        >

            <Form
                    style="margin-top: 20px"
                    :data="row">
                <FormItem prop='selectSerice'>
                    <Cascader :data="casServiceData"
                              transfer
                              @on-change="setService"
                              @on-visible-change="()=>{
                                            selectSerice=index}"
                              filterable
                              :clearable=false
                              v-model="row.productName"
                    >
                    </Cascader>
                </FormItem>

            </Form>
        </template>

        <template  slot-scope="{ row}" slot="servicePrice">
            <Row class="materialCss">
                <i-input class="priceCss"
                         :min=0
                         @on-blur="updateView"
                         :precision=2
                         v-model="row.servicePrice">
                </i-input>
            </Row>

        </template>

        <template slot-scope="{ row }" slot="serviceCount">
            <Row class="materialCss">
                <InputNumber
                        :min=0 class="priceCss"
                        :precision=0
                        v-model="row.serviceCount">
                </InputNumber>
            </Row>

        </template>

        <template slot-scope="{ row }" slot="serviceDiscount">
            <Row class="materialCss">
                <InputNumber class="priceCss" :min=0
                             :max=100
                             :precision=0
                             v-model="row.discount">
                </InputNumber>
            </Row>

        </template>

        <template slot-scope="{ row  ,index}" slot="getTotalPrice">

                <Cascader :data="casServiceData"
                          transfer
                          @on-change="setService1($event,row,index)"
                          filterable
                          :clearable=false
                          v-model="row.productName"
                >
                </Cascader>

        </template>

        <template slot-scope="{ index,row  }" slot="action">
            <Row class="materialCss">
                <Button shape="circle" icon="md-close" @click="handleRemoveIndex(index,row)"></Button>
            </Row>

        </template>

    </Table>
</template>

<script>
import { serviceColumns } from "./common/services-columns"
import { casServiceData } from "./common/mockData"

export default {
 name: "iview-table-chage.vue",
 data () {
  return {
   serviceColumns: serviceColumns(),
   casServiceData: casServiceData(),
   serviceData: [{
    check: true,
    serviceCount: 1,
    servicePrice: 0.00,
    discount: 100,
    selectSerice: [],
    material: [{ discount: 100, soldPrice: 0, quantity: 1 }]
   }]
  }
 },
 methods: {
  setService (v1) {
   // this.serviceData[index].productName= v1
   //  js vue使用a.[index] 变更数据是不会触发视图更新，但是vue对被侦听数组的方法经行了转变mutation ，所以下列方法会触发数组视图更新
   // push()
   // pop()
   // shift()
   // unshift()
   // splice()
   // sort()
   // reverse()
   this.serviceData.push({})
   this.serviceData.splice(this.serviceData.length - 1, 1)
  },
  setService1 (a, b, c) {
   console.log(a)
   console.log(b)
   console.log(c)

   this.serviceData.push({})
   this.serviceData.splice(this.serviceData.length - 1, 1)
  },
  updateView () {
   this.serviceData.push({})
   this.serviceData.splice(this.serviceData.length - 1, 1)
  }
 }
}
</script>

<style scoped>

</style>
