// 进出站信息DTO_1
export interface I进出站信息DTO_1 {
    // 进出站记录id - 如果是从进出站记录里面点进来的，则必传
    moveInOutRecordId: number;
    // 生产任务id
    produceTaskId: number;
    // 批次id
    lotOrderId: number;
    // wip状态记录id
    wipRpId: number;
    // 成品物料信息
    finishedMaterial: I成品物料填写DTO;
    // BOM物料信息列表
    bomMaterials: IBOM物料填写DTO[];
    // 关键参数信息填写
    keyParametersInfo: I进出站工艺卡填写;
}
// 成品物料填写DTO
export interface I成品物料填写DTO {
    // 实际数(质检数)
    actualQuantity: number;
    // 再次申请质检数
    applyQualityAgainQuantity: number;
}
// BOM物料填写DTO
export interface IBOM物料填写DTO {
    // 生产工艺路径步骤bom明细关联id
    id: number;
    // 对应物料id
    materialId: number;
    // 实际数
    actualQuantity: number;
}
// 进出站工艺卡填写
export interface I进出站工艺卡填写 {
    // 关键参数id
    id: number;
    // 录入集合 - 带录入信息
    keyParameterDetailList: I关键参数明细填写信息[];
}
// 关键参数明细填写信息
export interface I关键参数明细填写信息 {
    // 明细id
    id: number;
    // 录入值 - 明细录入类型不是图片时，有值
    inputValue: string;
    // 图片上传key集合 - 明细录入类型是图片时，有值
    imageKeys: string[];
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
