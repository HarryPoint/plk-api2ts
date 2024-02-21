// JSONResult«导出信息«采购到货统计报表返回VO»»
export interface IJSONResultExportInformationPurchaseArrivalStatisticsReportReturnedToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IExportInformationPurchaseArrivalStatisticsReportReturnToVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«采购到货统计报表返回VO»
export interface IExportInformationPurchaseArrivalStatisticsReportReturnToVO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: IPurchaseArrivalStatisticsReportReturnedToVO[];
}
// 采购到货统计报表返回VO
export interface IPurchaseArrivalStatisticsReportReturnedToVO {
    // 采购订单编号
    purchaseOrderNo: string;
    // 供应商
    supplier: string;
    // 物料编号
    majorDataCode: string;
    // 物料名称
    majorDataName: string;
    // 规格型号
    spec: string;
    // 物料材质
    texture: string;
    // 要求到货日期
    requiredArriveDate: string;
    // 要求到货日期字符串
    requiredArriveDateStr: string;
    // 最新到货日期
    lastArrivedDate: string;
    // 最新到货日期字符串
    lastArrivedDateStr: string;
    // 订单数量
    orderNum: number;
    // 订单金额
    orderAmount: number;
    // 已到货数量
    arrivedQty: number;
    // 未到货数量
    waitQty: number;
    // 入库数量
    inboundQty: number;
    // 入库金额
    inboundAmount: number;
    // 未入库数量
    notInboundQty: number;
    // 未入库金额
    notInboundAmount: number;
    // 单据类型
    orderType: string;
    // 采购类型
    purchaseType: string;
}
