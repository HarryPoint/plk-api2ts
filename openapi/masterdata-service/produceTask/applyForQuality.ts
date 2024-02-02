// 质检申请DTO
export interface I质检申请DTO {
    // 生产任务id
    produceTaskId: number;
    // 批次id
    lotOrderId: number;
    // wip状态记录id
    wipRpId: number;
    // 成品物料信息
    finishedMaterial: I成品物料填写DTO;
}
// 成品物料填写DTO
export interface I成品物料填写DTO {
    // 实际数(质检数)
    actualQuantity: number;
    // 再次申请质检数
    applyQualityAgainQuantity: number;
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
