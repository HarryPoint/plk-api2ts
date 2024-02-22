// http://47.108.139.107:16700/doc.html#/default/订单排产报表/exportExcelByProduceOrderUsingPOST
// 生产排产订单搜索VO
export interface IProductionSchedulingOrderSearchVO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 生产订单编号
    produceOrderCode: string;
    // 父级订单编号
    parentProduceOrderCode: string;
    // 销售订单编号
    salesOrderCode: string;
    // 物料id集合
    materialIds: number[];
    // 计划开始日期查询开始时间
    startTimeOfBeginTime: string;
    // 计划开始日期查询结束时间
    endTimeOfBeginTime: string;
    // 排产方式集合
    planTypeList: string[];
    // 计划结束日期查询结束时间
    endTimeOfEndTime: string;
    // 计划结束日期查询开始时间
    startTimeOfEndTime: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
