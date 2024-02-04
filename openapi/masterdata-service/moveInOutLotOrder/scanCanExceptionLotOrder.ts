// 可进出料批次扫描查询dto
export interface I可进出料批次扫描查询dto {
    // 生产任务id
    produceTaskId: number;
    // 编号
    code: string;
}
// JSONResult«可异常处理批次响应dto»
export interface IJSONResult可异常处理批次响应dto {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IBatchResponseDtosCanBeHandledAbnormally;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 可异常处理批次响应dto
export interface IBatchResponseDtosCanBeHandledAbnormally {
    // 批次id
    id: number;
    // 批次号
    lotOrderCode: string;
    // 可异常处理数量
    canOptQuantity: number;
}
