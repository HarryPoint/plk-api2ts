// JSONResult«保养计划响应DTO»
export interface IJSONResult保养计划响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 保养计划响应DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
