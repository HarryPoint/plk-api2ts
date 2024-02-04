// 可进出料批次查询dto
export interface I可进出料批次查询dto {
    // 生产任务id
    produceTaskId: number;
    // 批次号
    lotOrderCode: string;
}
// JSONResult«List«可进料批次响应dto»»
export interface IJSONResultList可进料批次响应dto {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I可进料批次响应dto[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 可进料批次响应dto
export interface I可进料批次响应dto {
    // 批次id
    id: number;
    // 批次号
    lotOrderCode: string;
    // 需进料数量
    needOptQuantity: number;
    // 可进料数量
    canOptQuantity: number;
    // 来料时间
    wmRpCreateTime: string;
}