// JSONResult«导出信息«寄售损耗分析报表分页返回VO»»
export interface IJSONResultExportInformationConsignmentLossAnalysisReportPaginatedReturnVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IExportInformationConsignmentLossAnalysisReportPagingBackToVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«寄售损耗分析报表分页返回VO»
export interface IExportInformationConsignmentLossAnalysisReportPagingBackToVO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: IConsignmentLossAnalysisReportPagingReturnsVO[];
}
// 寄售损耗分析报表分页返回VO
export interface IConsignmentLossAnalysisReportPagingReturnsVO {
    // 客户ids json
    customerIdsJson: string;
    // 销售发货子表ids json
    salesDeliveryIdsJson: undefined[];
    // 客户ids
    customerIds: number[];
    // 客户id
    customerId: number;
    // 销售发货子表ids
    salesDeliveryIds: number[];
    // 客户
    customer: string;
    // 仓库
    warehouse: string;
    // 产品编码
    productNo: string;
    // 产品名称
    productName: string;
    // 规格型号
    productSpec: string;
    // 期初数量
    numOfBeginningPeriod: number;
    // 送货数量
    sendQty: number;
    // 入库数量
    inboundQty: number;
    // 损耗数量
    numOfLoss: number;
    // 退货数量
    returnQty: number;
    // 未结余量
    remainingQty: number;
    // 损耗率
    lossRatio: number;
}
