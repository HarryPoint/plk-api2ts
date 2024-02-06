// JSONResult«大屏不合格品统计内外场响应DTO»
export interface IJSONResultLargeScreenNonconformingProductStatisticsInternalAndExternalFieldResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ILargeScreenNonconformingProductStatisticsInternalAndExternalFieldResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 大屏不合格品统计内外场响应DTO
export interface ILargeScreenNonconformingProductStatisticsInternalAndExternalFieldResponseDTO {
    // 内场数量
    internalQuantity: number;
    // 内场占比
    internalRatio: number;
    // 外场数量
    externalQuantity: number;
    // 外场占比
    externalRatio: number;
}
