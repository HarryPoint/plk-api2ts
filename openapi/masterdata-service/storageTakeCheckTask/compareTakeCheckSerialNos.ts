// 盘点序列号比较请求DTO
export interface I盘点序列号比较请求DTO {
    // 仓位id
    warehouseId: number;
    // 物料id
    materialId: number;
    // 批次号
    lotNo: string;
    // 序列号集合
    serialNos: I盘点任务盘点明细序列号DTO_1[];
}
// 盘点任务盘点明细序列号DTO_1
export interface I盘点任务盘点明细序列号DTO_1 {
    // 序列号
    serialNo: string;
    // 备注
    serialRemark: string;
}
// JSONResult«盘点序列号比较结果DTO»
export interface IJSONResult盘点序列号比较结果DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I盘点序列号比较结果DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 盘点序列号比较结果DTO
export interface I盘点序列号比较结果DTO {
    // 仓位id
    warehouseId: number;
    // 物料id
    materialId: number;
    // 批次号
    lotNo: string;
    // 序列号集
    serialNos: I盘点任务盘点明细序列号DTO[];
    // 盘盈序列号集
    profitSerialNos: I盘点任务盘点明细序列号DTO[];
    // 盘亏序列号集
    lossSerialNos: I盘点任务盘点明细序列号DTO[];
    // 序列号集合
    pickSerialNos: I盘点任务盘点明细序列号DTO[];
}
// 盘点任务盘点明细序列号DTO
export interface I盘点任务盘点明细序列号DTO {
    // 序列号
    serialNo: string;
    // 备注
    serialRemark: string;
}
