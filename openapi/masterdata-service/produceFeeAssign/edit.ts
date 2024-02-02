// 生产费用分配编辑DTO
export interface I生产费用分配编辑DTO {
    // id
    id: number;
    // 单据编号
    code: string;
    // 单据日期
    billDate: string;
    // 当前期间id
    currentFiscalPeriodId: number;
    // 数量归集id
    produceQuantityCollectIds: number[];
    // 分配信息
    produceFeeAssignDetailList: 生产费用分配明细编辑DTO[];
    // 费用信息
    produceFeeCollectDetailList: 费用归集明细响应DTO_1[];
    // undefined
    isDeleted: string;
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
