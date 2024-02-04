// JSONResult«导出信息«宝晶收款汇总分析报表表格返回VO»»
export interface IJSONResult导出信息宝晶收款汇总分析报表表格返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I导出信息宝晶收款汇总分析报表表格返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«宝晶收款汇总分析报表表格返回VO»
export interface I导出信息宝晶收款汇总分析报表表格返回VO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: IBaojingCollectionSummaryAnalysisReportFormReturnedToVO[];
}
// 宝晶收款汇总分析报表表格返回VO
export interface IBaojingCollectionSummaryAnalysisReportFormReturnedToVO {
    // 客户id
    customerId: number;
    // 客户名称
    customerName: string;
    // 付款单位id(客户id)
    payCustomerIdsJson: string;
    // 付款单位id(客户id)
    payCustomerIds: number[];
    // 付款单位名称(客户名称)
    payCustomerName: string;
    // 收款组织id(部门id)
    collectionOrganizationIdsJson: string;
    // 收款组织id(部门id)
    collectionOrganizationIds: number[];
    // 收款组织(部门名称)
    collectionOrganization: string;
    // 业务员id
    businessUserId: number;
    // 业务员名称
    businessUserName: string;
    // 是否含税
    isTax: string;
    // 期初金额
    beginAmount: number;
    // 应收金额
    receivableAmount: number;
    // 已收金额
    receivedAmount: number;
    // 其他损益
    otherLoss: number;
    // 应收余额
    receivableBalance: number;
}
