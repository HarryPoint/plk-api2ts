// JSONResult«List«Wip批次信息VO»»
export interface IJSONResultListWipBatchInformationVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Wip批次信息VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
