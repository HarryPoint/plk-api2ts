// http://47.108.139.107:16700/doc.html#/default/列表列样式配置/editByCodeUsingPOST
// 列表列样式系统配置编辑DTO
export interface IListColumnStyleSystemConfigurationEditDTO {
    // 编码
    code: string;
    // 配置JSON
    config: Record<string, Record<string, any>>;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
