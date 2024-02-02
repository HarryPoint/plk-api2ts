// JSONResult«List«基础VO»»
export interface IJSONResultList基础VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 基础VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
