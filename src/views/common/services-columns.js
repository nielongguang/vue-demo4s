export const serviceColumns = () =>
 [
  {
   width: 60,
   align: "center",
   title: "编号",
   slot: "tId"
  },
  {
   title: "服务名称",
   slot: "serviceName",
   width: 220,
   align: "left"
  },
  // {
  //     title: '材料',
  //     width:220,
  //     slot: 'addMaterial'
  //
  // },

  {
   width: 130,
   title: "单价(元)",
   slot: "servicePrice"
  }, {
   width: 130,
   title: "数量",
   slot: "serviceCount"

  }, {
   width: 130,
   title: "折扣(%)",
   slot: "serviceDiscount"
  },
  {

   slot: "getTotalPrice",
   title: "小计(元)"
  },
  {
   width: 80,
   title: "操作",
   slot: "action"
  }
 ]
