// http://47.108.139.107:16700/doc.html#/default/批次|序列号相关/batchUseLotSerialNoForStockUsingPOST
// JSONResult«批次号使用DTO»_1
export interface IJSONResultTheBatchNumberIsDTO1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheBatchNumberIsDTO1;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 批次号使用DTO_1
export interface ITheBatchNumberIsDTO1 {
    // 异常批次号
    lotSerialNoErrorList: ITheBatchNumberUsesAnAbnormalDTO[];
}
// 批次号使用异常DTO
export interface ITheBatchNumberUsesAnAbnormalDTO {
    // 批次号
    lotSerialNo: string;
    // 异常信息集合
    errorMsgList: string[];
}
