// 名称、编号DTO
export interface I名称编号DTO {
    // 名称or编号
    nameOrCode: string;
}
// JSONResult«List«名称编码响应 DTO»»
export interface IJSONResultList名称编码响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 名称编码响应 DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
