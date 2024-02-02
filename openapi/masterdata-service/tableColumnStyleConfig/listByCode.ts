// JSONResult«List«列表列样式配置VO»»
export interface IJSONResultList列表列样式配置VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 列表列样式配置VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
