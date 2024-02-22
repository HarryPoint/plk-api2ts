// EnterpriseMigrateRequestDTO
export interface IEnterpriseMigrateRequestDTO {
    // undefined
    id: number;
    // undefined
    code: string;
    // undefined
    name: string;
    // undefined
    defaultAccountCount: number;
    // undefined
    usedAccountQuantity: number;
    // undefined
    expireTime: string;
    // undefined
    isEnableBatchManagement: string;
    // undefined
    accessKey: string;
    // undefined
    accessSecret: string;
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
