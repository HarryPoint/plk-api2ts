// JSONResult«不符合项目趋势报告»
export interface IJSONResult不符合项目趋势报告 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I不符合项目趋势报告;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 不符合项目趋势报告
export interface I不符合项目趋势报告 {
    // 内审
    internalAudit: I不符合项查询响应;
    // 外审
    externalAudit: I不符合项查询响应;
    // 专审
    specialAudit: I不符合项查询响应;
}
// 不符合项查询响应
export interface I不符合项查询响应 {
    // undefined
    clauseNoList: I条款号查询响应[];
    // undefined
    lastYear;
    // undefined
    currentYear;
}
// 条款号查询响应
export interface I条款号查询响应 {
    // ID
    id: number;
    // 条款号
    clauseNo: string;
}
