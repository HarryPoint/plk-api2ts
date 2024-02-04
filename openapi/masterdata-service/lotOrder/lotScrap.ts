// 批次报废DTO
export interface IBatchScrapDTO {
    // wipRpId
    wipRpId: number;
    // 生产异常类型id
    produceAbnormalCategoryId: number;
    // 报废数量
    scrapCount: number;
    // 备注
    remark: string;
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
