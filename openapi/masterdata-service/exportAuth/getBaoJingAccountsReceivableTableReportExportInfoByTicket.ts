// JSONResult«导出信息«宝晶应收账款分析报表表格返回VO»»
export interface IJSONResult导出信息宝晶应收账款分析报表表格返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I导出信息宝晶应收账款分析报表表格返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«宝晶应收账款分析报表表格返回VO»
export interface I导出信息宝晶应收账款分析报表表格返回VO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: IBaojingAccountsReceivableAnalysisReportFormReturnedToVO[];
}
// 宝晶应收账款分析报表表格返回VO
export interface IBaojingAccountsReceivableAnalysisReportFormReturnedToVO {
    // 业务员id
    businessUserId: number;
    // 业务员名称
    businessUserName: string;
    // 客户id
    customerId: number;
    // 客户名称
    customerName: string;
    // 期初金额
    beginAmount: number;
    // 入库总额
    moveInAmount: number;
    // 已收金额
    receivedAmount: number;
    // 其他损益
    otherLossAmount: number;
    // 应收余额
    receivableBalance: number;
    // 日期
    dateTime: string;
}
