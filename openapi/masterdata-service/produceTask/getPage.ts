// 生产任务搜索VO
export interface I生产任务搜索VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 对应工序id
    processIds: number[];
    // 任务号
    taskNo: string;
    // 生产订单号
    produceOrderCode: string;
    // 销售订单号
    salesOrderCode: string;
    // 对应物料id
    materialIds: number[];
    // 任务类型描述
    typeDesc: string;
    // 任务下发方式
    issueType: string;
    // 任务下发方式描述
    issueTypeDesc: string;
    // 任务类型
    type: string;
    // 计划开始-结束时间 yyyy-MM-dd HH:mm:ss
    startEndTime: string;
    // 任务状态
    statusList: string[];
    // 任务优先级
    priorityLevel: number;
    // 创建开始时间 yyyy-MM-dd HH:mm:ss
    createBeginTime: string;
    // 计划开始-开始时间 yyyy-MM-dd HH:mm:ss
    startBeginTime: string;
    // 计划结束-开始时间 yyyy-MM-dd HH:mm:ss
    endBeginTime: string;
    // 计划结束-结束时间 yyyy-MM-dd HH:mm:ss
    endEndTime: string;
    // 创建结束时间 yyyy-MM-dd HH:mm:ss
    createEndTime: string;
    // 可操作项
    canOpItem: string;
    // 生产订单字段搜索
    produceOrderSearchList: 流程数据明细搜索VO[];
}
// JSONResult«分页信息«JSONObject»»
export interface IJSONResult分页信息JSONObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«JSONObject»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
