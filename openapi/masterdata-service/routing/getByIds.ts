// JSONResult«List«基础VO»»_2
export interface IJSONResultList基础VO_2 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 基础VO_2[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
