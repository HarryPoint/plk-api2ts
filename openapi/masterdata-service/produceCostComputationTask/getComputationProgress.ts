// JSONResult«生产成本核算进度响应对象DTO»
export interface IJSONResultProductionCostAccountingProgressResponseObjectDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProductionCostAccountingProgressResponseObjectDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产成本核算进度响应对象DTO
export interface IProductionCostAccountingProgressResponseObjectDTO {
    // 总数
    totalCount: number;
    // 成功数量
    successCount: number;
    // 失败数量
    failedCount: number;
    // 失败原因
    failedReason: string;
}
