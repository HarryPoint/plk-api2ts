// JSONResult«生产处理统计VO»
export interface IJSONResult生产处理统计VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产处理统计VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产处理统计VO
export interface I生产处理统计VO {
    // 返工数量
    backQuantity: number;
    // 暂扣数量
    holdPauseQuantity: number;
    // 报废数量
    scrapQuantity: number;
}
