// 任务下发搜索VO
export interface ITaskDeliverySearchesVO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 状态
    status: string;
    // 排产计划类型
    type: string;
    // 生产订单号
    produceOrderCode: string;
    // 创建开始时间 yyyy-MM-dd HH:mm:ss
    createBeginTime: string;
    // 销售订单号
    salesOrderCode: string;
    // 对应物料id
    materialId: number;
    // 计划开始时间 yyyy-MM-dd HH:mm:ss
    planBeginTime: string;
    // 计划结束时间 yyyy-MM-dd HH:mm:ss
    planEndTime: string;
    // 创建结束时间 yyyy-MM-dd HH:mm:ss
    createEndTime: string;
    // 任务下发开始时间 yyyy-MM-dd HH:mm:ss
    issueBeginTime: string;
    // 任务下发结束时间 yyyy-MM-dd HH:mm:ss
    issueEndTime: string;
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
