// 列表列样式系统配置编辑DTO
export interface I列表列样式系统配置编辑DTO {
    // 编码
    code: string;
    // 配置JSON
    config;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
