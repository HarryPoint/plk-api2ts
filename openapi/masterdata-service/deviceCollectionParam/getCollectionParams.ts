// JSONResult«List«设备数采选择VO»»
export interface IJSONResultList设备数采选择VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 设备数采选择VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
