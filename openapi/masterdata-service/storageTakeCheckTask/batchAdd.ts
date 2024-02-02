// 仓库盘点任务批次编辑DTO
export interface I仓库盘点任务批次编辑DTO {
    // 任务列表
    taskList: 仓库盘点任务编辑DTO[];
    // 计划开始时间，yyyy-MM-dd HH:mm:ss
    planBeginTime: string;
    // 盘点范围
    scopeType: string;
    // 物料大类列表，盘点范围为物料类型时必填
    handleMaterialTypes: string[];
    // 指定仓库仓位id集，盘点范围为指定仓位时必填，只传最底层仓位
    warehouseList: 仓库盘点任务仓位编辑DTO[];
}
// JSONResult«string»
export interface IJSONResultstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
