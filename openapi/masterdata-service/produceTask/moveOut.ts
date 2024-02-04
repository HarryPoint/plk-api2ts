// 进出站信息DTO
export interface I进出站信息DTO {
    // 进出站记录id - 如果是从进出站记录里面点进来的，则必传
    moveInOutRecordId: number;
    // 生产任务id
    produceTaskId: number;
    // 成品物料填写信息列表
    finishedMaterialInputList: I成品物料填写请求DTO[];
    // BOM消耗列表
    bomMaterials: IBOM消耗请求DTO[];
    // 关键参数信息填写
    keyParametersInfo: I进出站工艺卡填写;
    // undefined
    handleOtherAsync: string;
}
// 成品物料填写请求DTO
export interface I成品物料填写请求DTO {
    // 批次id
    lotOrderId: number;
    // 实际数(质检数)
    actualQuantity: number;
    // 再次申请质检数
    applyQualityAgainQuantity: number;
    // 操作时间
    optTime: string;
}
// BOM消耗请求DTO
export interface IBOM消耗请求DTO {
    // 生产工艺路径步骤bom明细关联id
    id: number;
    // 对应物料id
    materialId: number;
    // 实际数
    actualQuantity: number;
    // 进料批次列表
    lotOrders: Ibom消耗批次订单请求对象[];
    // 进料外部码列表
    externalCodeList: string[];
}
// bom消耗批次订单请求对象
export interface Ibom消耗批次订单请求对象 {
    // 批次订单id
    id: number;
    // undefined
    lotNo: string;
    // 实际数
    actualQuantity: number;
    // 序列号ids
    serialNoIds: number[];
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
