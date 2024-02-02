// 批次扣留DTO
export interface I批次扣留DTO {
    // 批次id
    id: number;
    // 生产任务id
    produceTaskId: number;
    // 生产异常类型id
    produceAbnormalCategoryId: number;
    // 备注
    remark: string;
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
