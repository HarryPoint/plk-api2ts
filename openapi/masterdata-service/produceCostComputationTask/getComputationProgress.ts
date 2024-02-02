// JSONResult«生产成本核算进度响应对象DTO»
export interface IJSONResult生产成本核算进度响应对象DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产成本核算进度响应对象DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产成本核算进度响应对象DTO
export interface I生产成本核算进度响应对象DTO {
    // 总数
    totalCount: number;
    // 成功数量
    successCount: number;
    // 失败数量
    failedCount: number;
    // 失败原因
    failedReason: string;
}
