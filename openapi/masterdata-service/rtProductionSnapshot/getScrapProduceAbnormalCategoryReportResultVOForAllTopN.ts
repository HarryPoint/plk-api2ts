// JSONResult«List«报废类型统计返回VO»»
export interface IJSONResultList报废类型统计返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I报废类型统计返回VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 报废类型统计返回VO
export interface I报废类型统计返回VO {
    // 异常分类id
    produceAbnormalCategoryId: number;
    // 报废数量
    scrapQuantity: number;
}
