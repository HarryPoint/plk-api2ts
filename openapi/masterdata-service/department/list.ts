// JSONResult«List«部门DTO»»
export interface IJSONResultList部门DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 部门DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
