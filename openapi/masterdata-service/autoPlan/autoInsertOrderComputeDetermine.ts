// 生产订单自动插单计算结果确定DTO
export interface I生产订单自动插单计算结果确定DTO {
    // 排产计划单名称
    planName: string;
    // 排产方式
    autoPlanType: string;
    // 是否考虑自动提前（要传计算时的值）
    isAutoMoveUp: string;
    // 生产订单计划时间集
    produceOrderPlanTimes: I生产订单自动排产计划时间DTO[];
    // 顺延订单计划时间集
    produceOrderPostponeTimes: I生产订单自动排产计划时间DTO[];
}
// 生产订单自动排产计划时间DTO
export interface I生产订单自动排产计划时间DTO {
    // 订单id
    id: number;
    // 订单号
    code: string;
    // 计划开始时间 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 计划结束时间 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 步骤计划集
    steps: I生产订单自动排产计划步骤时间DTO[];
}
// 生产订单自动排产计划步骤时间DTO
export interface I生产订单自动排产计划步骤时间DTO {
    // 步骤id
    id: number;
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编号
    processCode: string;
    // 工序计划开始时间 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 工序计划结束时间 yyyy-MM-dd HH:mm:ss
    endTime: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
