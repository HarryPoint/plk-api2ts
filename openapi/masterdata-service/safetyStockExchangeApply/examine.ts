// 安全库存变更申请审核DTO
export interface I安全库存变更申请审核DTO {
    // id
    id: number;
    // 审核类型
    examineType: string;
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