// JSONResult«List«班次返回VO»»
export interface IJSONResultListShiftsBackToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 班次返回VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
