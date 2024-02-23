import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/导出相关/getConsignmentInboundAnalyzeReportExportInfoByTicketUsingGET
export default function fetchMethod(params: { ticket: string }) {
    return get<IJSONResultExportInformationConsignmentInboundAnalysisReportReturnsVO['data']>({
      url: "/masterdata-service/exportAuth/getConsignmentInboundAnalyzeReportExportInfoByTicket",
      params,
    });
}
// JSONResult«导出信息«寄售入库分析报表返回VO»»
export interface IJSONResultExportInformationConsignmentInboundAnalysisReportReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IExportInformationConsignmentWarehousingAnalysisReportReturnedToVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«寄售入库分析报表返回VO»
export interface IExportInformationConsignmentWarehousingAnalysisReportReturnedToVO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: IConsignmentInboundAnalysisReportReturnedToVO[];
}
// 寄售入库分析报表返回VO
export interface IConsignmentInboundAnalysisReportReturnedToVO {
    // 单据编号
    workOrderNo: string;
    // 销售订单编号
    salesOrderNo: string;
    // 客户
    customer: string;
    // 业务员
    businessMan: string;
    // 入库日期
    inboundDate: string;
    // 入库类型
    inboundType: string;
    // 入库单价
    inboundPrice: number;
    // 产品名称
    productName: string;
    // 规格型号
    productSpec: string;
    // 仓库
    warehouse: string;
    // 入库数量
    inboundQty: number;
    // 损耗数量
    numOfLoss: number;
    // 入库金额
    inboundAmount: number;
    // 产品编号
    productNo: string;
    // 备注
    remark: string;
}
