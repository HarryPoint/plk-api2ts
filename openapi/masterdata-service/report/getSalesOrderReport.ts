// 订单进度统计查询VO
export interface I订单进度统计查询VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: I分页排序VO[];
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
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«订单进度统计响应VO»»
export interface IJSONResult分页信息订单进度统计响应VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I分页信息订单进度统计响应VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«订单进度统计响应VO»
export interface I分页信息订单进度统计响应VO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I订单进度统计响应VO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 订单进度统计响应VO
export interface I订单进度统计响应VO {
    // 销售订单编号-（销售订单维度
    salesOrderCode: string;
    // 客户id-（销售订单维度
    customerId: number;
    // 客户名称-（销售订单维度
    customerName: string;
    // 销售订单状态-（销售订单维度
    salesOrderStatus: string;
    // 销售订单创建时间
    salesOrderCreateTime: string;
    // 物料id-（销售订单明细维度
    materialId: number;
    // 物料编码-（销售订单明细维度
    materialCode: string;
    // 物料名称-（销售订单明细维度
    materialName: string;
    // 物料规格型号-（销售订单明细维度
    spec: string;
    // 交付数量-（销售订单明细维度
    totalQuantity: number;
    // 交付日期-（销售订单明细维度
    deliveryDate: string;
    // 计划开始时间 yyyy-MM-dd HH:mm:ss-（销售订单明细维度
    minPlanBeginTime: string;
    // 计划结束时间 yyyy-MM-dd HH:mm:ss-（销售订单明细维度
    maxPlanEndTime: string;
    // 实际生产开始时间-（销售订单明细维度
    minActualBeginTime: string;
    // 实际生产完成时间-（销售订单明细维度
    maxActualEndTime: string;
    // 交付剩余天数-（销售订单明细维度
    deliveryRemainingDays: number;
    // 已转换数量-（销售订单明细维度
    totalConvertQuantity: number;
    // 总合格产出数量-（销售订单明细维度
    totalProduceQuantity: number;
    // 已排产生产订单数量-（销售订单明细维度
    totalPlanProduceOrderCount: number;
    // 生产订单数量-（销售订单明细维度
    totalProduceOrderCount: number;
    // 已排产数量-（销售订单明细维度
    totalPlanQuantity: number;
    // 转生产进度
    convertRatio: number;
    // 订单完成进度
    completeRatio: number;
    // 排产进度
    planRatio: number;
    // 生产订单编号-（生产订单维度
    produceOrderCode: string;
    // 生产物料id-（生产订单维度
    produceMaterialId: number;
    // 生产物料编码-（生产订单维度
    produceMaterialCode: string;
    // 生产物料名称-（生产订单维度
    produceMaterialName: string;
    // 生产物料规格型号-（生产订单维度
    produceMaterialSpec: string;
    // 生产数量-（生产订单维度
    convertQuantity: number;
    // 生产订单状态-（生产订单维度
    produceOrderStatus: string;
    // 排产状态-（生产订单维度
    produceOrderPlanStatus: string;
    // 计划生产开始时间-（生产订单维度
    planBeginTime: string;
    // 计划生产结束时间-（生产订单维度
    planEndTime: string;
    // 计划生产数量-（生产订单维度
    planQuantity: number;
    // 实际生产开始时间-（生产订单维度
    actualBeginTime: string;
    // 实际生产结束时间-（生产订单维度
    actualEndTime: string;
    // 合格产出数量-（生产订单维度
    produceQuantity: number;
    // 报废数量-（生产订单维度
    scrapQuantity: number;
    // 委外数量-（生产订单维度
    entrustQuantity: number;
    // 合格产出进度
    produceRatio: number;
}
