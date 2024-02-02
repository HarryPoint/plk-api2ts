// 进料信息DTO
export interface I进料信息DTO {
    // 进出站记录id - 如果是从进出站记录里面点进来的，则必传
    moveInOutRecordId: number;
    // 生产任务id
    produceTaskId: number;
    // 成品物料填写信息列表
    finishedMaterialInputList: 成品物料填写请求DTO[];
    // 进料生产工艺设备ids
    moveInProduceTechnologyDeviceIds: number[];
    // 生产工艺模具ids
    moveInProduceTechnologyMoldIds: number[];
    // BOM消耗列表
    bomMaterials: BOM消耗请求DTO[];
    // 关键参数信息填写
    keyParametersInfo: 进出站工艺卡填写;
    // 拆分批次相关
    splitLots: 进料批次拆分请求DTO[];
    // undefined
    handleOtherAsync: string;
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
