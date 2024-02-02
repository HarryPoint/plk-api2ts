// 可进出料批次扫描查询dto
export interface I可进出料批次扫描查询dto {
    // 生产任务id
    produceTaskId: number;
    // 编号
    code: string;
}
// JSONResult«可进料批次响应dto»
export interface IJSONResult可进料批次响应dto {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 可进料批次响应dto;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
