// JSONResult«List«基础VO»»_1
export interface IJSONResultList基础VO_1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 基础VO_1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
