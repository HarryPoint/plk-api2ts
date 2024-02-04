// JSONResult«List«最后工序合格产出返回VO»»
export interface IJSONResultListReturnTheFinalProcessQualifiedOutputToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IFinalProcessQualifiedOutputIsReturnedToVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 最后工序合格产出返回VO
export interface IFinalProcessQualifiedOutputIsReturnedToVO {
    // 数据时间（时间戳），根据当前选中的时间粒度去转换时间
    dataTime: string;
    // 最后工序合格产出数
    lastProduceQuantity: number;
}
