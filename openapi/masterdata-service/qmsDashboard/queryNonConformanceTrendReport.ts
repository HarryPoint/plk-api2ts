// JSONResult«不符合项目趋势报告»
export interface IJSONResultDoesNotMatchTheProjectTrendReport {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IDoesNotMatchTheProjectTrendReport;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 不符合项目趋势报告
export interface IDoesNotMatchTheProjectTrendReport {
    // 内审
    internalAudit: IQueryResponseOfNonMatchItems;
    // 外审
    externalAudit: IQueryResponseOfNonMatchItems;
    // 专审
    specialAudit: IQueryResponseOfNonMatchItems;
}
// 不符合项查询响应
export interface IQueryResponseOfNonMatchItems {
    // undefined
    clauseNoList: ITermsNumberQueryResponse[];
    // undefined
    lastYear;
    // undefined
    currentYear;
}
// 条款号查询响应
export interface ITermsNumberQueryResponse {
    // ID
    id: number;
    // 条款号
    clauseNo: string;
}
