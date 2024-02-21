// JSONResult«List«今日良品统计VO»»
export interface IJSONResultListTodaysGoodProductStatisticsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITodaysGoodProductStatisticsVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 今日良品统计VO
export interface ITodaysGoodProductStatisticsVO {
    // 规格
    materialSpec: string;
    // 合格品数量
    passQuantity: number;
    // 良品率
    goodRate: number;
}
