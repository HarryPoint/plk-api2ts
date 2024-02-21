// JSONResult«不合格报表合计返回DTO»
export interface IJSONResultTotalUnqualifiedReportsAreReturnedToTheDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITotalNonconformingReportsAreReturnedToTheDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 不合格报表合计返回DTO
export interface ITotalNonconformingReportsAreReturnedToTheDTO {
    // 不合格数量
    quantityOfNonConformance: number;
}
