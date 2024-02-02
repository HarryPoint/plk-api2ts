// JSONResult«List«年度质量目标管理统计返回DTO»»
export interface IJSONResultList年度质量目标管理统计返回DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I年度质量目标管理统计返回DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 年度质量目标管理统计返回DTO
export interface I年度质量目标管理统计返回DTO {
    // 年
    year: string;
    // 季度
    quarters: string;
    // 项明细
    items: I年度质量目标管理统计项返回DTO[];
}
// 年度质量目标管理统计项返回DTO
export interface I年度质量目标管理统计项返回DTO {
    // 目标项id
    qmsTargetItemId: number;
    // 目标项
    qmsTargetItemName: string;
    // 分类
    category: string;
    // 当期结果值
    resultValue: string;
    // 数据类型
    dataType: string;
    // 明细
    details: I年度质量目标管理统计项明细返回DTO[];
}
// 年度质量目标管理统计项明细返回DTO
export interface I年度质量目标管理统计项明细返回DTO {
}
