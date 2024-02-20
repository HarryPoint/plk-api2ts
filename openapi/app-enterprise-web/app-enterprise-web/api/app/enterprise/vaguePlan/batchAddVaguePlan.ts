// 生产订单批量模糊排产DTO
export interface IProductionOrderBatchFuzzySchedulingDTO {
    // 生产订单id集合
    ids: number[];
    // 计划开始时间, yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00
    beginTime: string;
    // 计划结束时间, yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00
    endTime: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: any;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}