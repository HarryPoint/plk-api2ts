// JSONResult«List«生产排期VO»»
export interface IJSONResultList生产排期VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 生产排期VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
