// JSONResult«List«今日良品统计VO»»
export interface IJSONResultListToday'sGoodProductStatisticsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IToday'sGoodProductStatisticsVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
// 今日良品统计VO
export interface IToday'sGoodProductStatisticsVO {
    // 规格
    materialSpec: string;
    // 合格品数量
    passQuantity: number;
    // 良品率
    goodRate: number;
}

}
