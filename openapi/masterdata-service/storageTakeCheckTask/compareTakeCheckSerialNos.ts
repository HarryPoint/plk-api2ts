// 盘点序列号比较请求DTO
export interface I盘点序列号比较请求DTO {
    // 仓位id
    warehouseId: number;
    // 物料id
    materialId: number;
    // 批次号
    lotNo: string;
    // 序列号集合
    serialNos: 盘点任务盘点明细序列号DTO_1[];
}
// JSONResult«盘点序列号比较结果DTO»
export interface IJSONResult盘点序列号比较结果DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 盘点序列号比较结果DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
