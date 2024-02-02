// FiscalPeriodCheckRequestDTO
export interface IFiscalPeriodCheckRequestDTO {
    // 单据ID
    id: number;
    // 单据编码
    code: string;
    // 单据日期
    billDate: string;
}
// JSONResult«List«FiscalPeriodCheckResponseDTO»»
export interface IJSONResultListFiscalPeriodCheckResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: FiscalPeriodCheckResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
