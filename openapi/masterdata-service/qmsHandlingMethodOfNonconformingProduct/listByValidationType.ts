// JSONResult«List«不合格品处理方式响应对象»»
export interface IJSONResultList不合格品处理方式响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 不合格品处理方式响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
