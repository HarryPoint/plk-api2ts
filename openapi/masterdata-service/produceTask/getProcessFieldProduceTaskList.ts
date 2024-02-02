// 任务汇总表(基于工序字段)搜索VO
export interface I任务汇总表基于工序字段搜索VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: I分页排序VO[];
    // 工序id
    processId: number;
    // 开始日期(计划生产日期) yyyy-MM-dd HH:mm:ss
    planStartDate: string;
    // 开始日期(计划生产日期) yyyy-MM-dd HH:mm:ss
    planEndDate: string;
    // 生产订单编号
    produceOrderCode: string;
    // 物料ids
    materialIds: number[];
    // 生产任务状态列表
    produceTaskStatusList: string[];
}
// 分页排序VO
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«List«任务汇总表(基于工序字段)明细信息VO»»
export interface IJSONResultList任务汇总表基于工序字段明细信息VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I任务汇总表基于工序字段明细信息VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 任务汇总表(基于工序字段)明细信息VO
export interface I任务汇总表基于工序字段明细信息VO {
    // 生产任务id
    produceTaskId: string;
    // 计划生产日期
    planTime: string;
    // 生产订单编号
    produceOrderCode: string;
    // 物料名称
    materialName: string;
    // 数量
    quantity: number;
    // 动态字段值列表
    fieldValueList: I工序字段值VO[];
    // 生产任务状态
    produceTaskStatus: string;
}
// 工序字段值VO
export interface I工序字段值VO {
    // 字段编号
    code: string;
    // 字段值
    value: string;
}
