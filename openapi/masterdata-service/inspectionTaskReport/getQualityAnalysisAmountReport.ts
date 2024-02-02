// JSONResult«质量统计分析报表合计返回DTO»
export interface IJSONResult质量统计分析报表合计返回DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I质量统计分析报表合计返回DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 质量统计分析报表合计返回DTO
export interface I质量统计分析报表合计返回DTO {
    // 报检数量
    inspectionApplyQuantity: number;
    // 交检总数
    inspectionQuantity: number;
    // 交检合格数
    qualifiedQuantity: number;
    // 交检不合格数
    unQualifiedQuantity: number;
}
