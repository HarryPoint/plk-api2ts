// 进料bom消耗扫描请求DTO
export interface IFeedBomConsumptionScanRequestDTO {
    // 生产任务id
    produceTaskId: number;
    // 编号
    code: string;
}
// JSONResult«进料bom消耗扫描响应DTO»
export interface IJSONResultIncomingBomConsumptionScanResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IIncomingBomConsumptionScansInResponseToDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 进料bom消耗扫描响应DTO
export interface IIncomingBomConsumptionScansInResponseToDTO {
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
    // 批次id
    lotOrderId: number;
    // 批次编号
    lotOrderCode: string;
    // 序列号id
    serialNoId: number;
    // 序列号编号
    serialNoCode: string;
    // 是否有重复
    hasRepeat: string;
}
