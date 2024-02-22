// http://47.108.139.107:16700/doc.html#/default/销售订单相关/getListForReportUsingPOST
// 订单进度统计查询VO
export interface IOrderProgressStatisticsQueryVO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 交付日期 - 开始 yyyy-MM-dd HH:mm:ss
    deliveryDateBegin: string;
    // 销售订单编号
    salesOrderCode: string;
    // 物料id集
    materialIds: number[];
    // 客户id集
    customerIds: number[];
    // 交付日期 - 结束 yyyy-MM-dd HH:mm:ss
    deliveryDateEnd: string;
    // 物料编码
    materialCode: string;
    // 销售订单状态
    salesOrderStatus: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«List«销售订单VO»»
export interface IJSONResultListSalesOrderVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ISalesOrderVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 销售订单VO
export interface ISalesOrderVO {
    // id
    id: number;
    // 创建时间
    createTime: string;
    // 所属企业id
    enterpriseId: number;
    // 销售订单名称
    name: string;
    // 销售订单号
    code: string;
    // 订单类型
    orderType: string;
    // 客户id
    customerId: number;
    // 合同号
    contractNo: string;
    // 备注
    remark: string;
    // 下单日期(销售日期)
    placeOrderTime: string;
    // 下单业务部门id
    placeOrderDepartmentId: number;
    // 业务员id
    businessUserId: number;
    // 收货地址
    receivingAddress: string;
    // 客户联系人名称
    customerContactsName: string;
    // 客户联系人手机
    customerContactsPhone: string;
    // 附件
    attachedFileKeys: string;
    // 是否完全转为生产订单
    isConvertProduceOrder: string;
    // 销售订单状态
    handleStatus: string;
    // 销售订单生产状态
    produceStatus: string;
    // 关闭人
    closeUserId: number;
    // 关闭时间
    closeTime: string;
    // 关闭原因
    closeRemark: string;
    // 发货数量
    deliveryQuantity: number;
    // 未发货数量
    notDeliveryQuantity: number;
    // 出库数量
    storageOutQuantity: number;
    // 未出库数量
    notStorageOutQuantity: number;
    // 退货数量
    returnQuantity: number;
    // 未退货数量
    notReturnQuantity: number;
    // 应收金额
    receivableAmount: number;
    // 已收金额
    receivedAmount: number;
    // 应退金额
    refundableAmount: number;
    // 已退金额
    returnedAmount: number;
    // 应收余额
    receivableBalance: number;
}
