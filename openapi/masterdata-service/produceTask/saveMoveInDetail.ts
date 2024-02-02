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
    finishedMaterial: 成品物料填写DTO;
    // BOM物料信息列表
    bomMaterials: BOM物料填写DTO[];
    // 关键参数信息填写
    keyParametersInfo: 进出站工艺卡填写;
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
