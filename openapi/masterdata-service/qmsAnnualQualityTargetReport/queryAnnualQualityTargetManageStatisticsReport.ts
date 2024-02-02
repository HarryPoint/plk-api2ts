// JSONResult«List«年度质量目标管理统计返回DTO»»
export interface IJSONResultList年度质量目标管理统计返回DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 年度质量目标管理统计返回DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
