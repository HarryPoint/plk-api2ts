// JSONResult«List«保养计划变更记录响应DTO»»
export interface IJSONResultList保养计划变更记录响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I保养计划变更记录响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 保养计划变更记录响应DTO
export interface I保养计划变更记录响应DTO {
    // id
    id: number;
    // 备注
    remark: string;
    // 操作人
    createUser: string;
    // 创建时间
    createTime: string;
}
