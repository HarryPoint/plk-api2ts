// JSONResult«List«生产计划手动排产VO»»
export interface IJSONResultList生产计划手动排产VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 生产计划手动排产VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
