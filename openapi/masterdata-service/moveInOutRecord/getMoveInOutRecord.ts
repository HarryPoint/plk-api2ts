// 进出站记录搜索VO
export interface I进出站记录搜索VO {
    // 任务id
    produceTaskId: number;
    // 进出站记录状态
    statusList: string[];
}
// JSONResult«List«进出站记录返回VO»»
export interface IJSONResultList进出站记录返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 进出站记录返回VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
