// JSONResult«List«近7天报废品数据VO»»
export interface IJSONResultListDiscardDataVOInTheLast7Days {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ILast7DaysReportedWasteDataVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 近7天报废品数据VO
export interface ILast7DaysReportedWasteDataVO {
    // 类型
    categoryName: string;
    // 数量
    quantity: number;
    // 比例
    rate: number;
}
