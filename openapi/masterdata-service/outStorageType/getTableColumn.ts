// JSONResult«List«流程表格列VO»»
export interface IJSONResultList流程表格列VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 流程表格列VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
