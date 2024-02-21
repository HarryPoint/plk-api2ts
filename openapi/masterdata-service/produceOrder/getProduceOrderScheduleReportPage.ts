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
// JSONResult«分页信息«报表生产订单返回VO»»
export interface IJSONResultPagingInformationReportProductionOrderReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPageInformationReportProductionOrderReturnsVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«报表生产订单返回VO»
export interface IPageInformationReportProductionOrderReturnsVO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IReportProductionOrdersBackToVO[];
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
// 报表生产订单返回VO
export interface IReportProductionOrdersBackToVO {
    // id
    id: number;
    // 生产订单号
    code: string;
    // 父生产订单号
    parentProduceOrderCode: string;
    // 销售单id
    salesOrderId: number;
    // 销售订单号
    salesOrderCode: string;
    // 销售详情id
    salesOrderDetailId: number;
    // 销售详情物料名称
    salesOrderMaterialName: string;
    // 订单类型描述
    orderTypeDesc: string;
    // 对应物料id
    materialId: number;
    // 对应物料名称
    materialName: string;
    // 交付日期
    deliveryDate: string;
    // 交付数量
    totalCount: number;
    // 优先级
    priorityLevel: number;
    // 订单排产状态
    planStatus: string;
    // 订单排产状态描述
    planStatusDesc: string;
    // 订单排产方式
    planType: string;
    // 订单排产方式描述
    planTypeDesc: string;
    // 订单计划开始日期
    beginTime: string;
    // 订单计划结束时间
    endTime: string;
    // 对应标准工艺路径id
    routingId: number;
    // 生产工艺路径id
    produceTechnologyRoutingId: number;
    // 对应工艺路径名称
    routingName: string;
    // 对应工艺路径编号
    routingCode: string;
}
