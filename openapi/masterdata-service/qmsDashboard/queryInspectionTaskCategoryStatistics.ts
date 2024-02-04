// JSONResult«List«大屏检验计划执行类别统计返回»»
export interface IJSONResultList大屏检验计划执行类别统计返回 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I大屏检验计划执行类别统计返回[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 大屏检验计划执行类别统计返回
export interface I大屏检验计划执行类别统计返回 {
    // 类别
    category: string;
    // 进行中任务量
    handlingQuantity: number;
    // 已完成任务量
    completeQuantity: number;
    // 超期任务量
    overdueQuantity: number;
}
