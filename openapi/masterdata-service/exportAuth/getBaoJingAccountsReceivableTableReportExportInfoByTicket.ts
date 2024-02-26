import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/导出相关/getBaoJingAccountsReceivableTableReportExportInfoByTicketUsingGET
*/
export default function fetchMethod(params: { ticket?: string }, extraOptions?: any) {
    return http<IJSONResultExportInformationBaojingAccountsReceivableAnalysisReportFormReturnedToVO>(
        {
            url: "/masterdata-service/exportAuth/getBaoJingAccountsReceivableTableReportExportInfoByTicket",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«导出信息«宝晶应收账款分析报表表格返回VO»» */
export interface IJSONResultExportInformationBaojingAccountsReceivableAnalysisReportFormReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IExportInformationBaojingAccountsReceivableAnalysisReportFormReturnToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 导出信息«宝晶应收账款分析报表表格返回VO» */
export interface IExportInformationBaojingAccountsReceivableAnalysisReportFormReturnToVO {
    /** 导出类型 */
    exportType?: string;
    /** 数据 */
    itemList?: IBaojingAccountsReceivableAnalysisReportFormReturnedToVO[];
}
/** 宝晶应收账款分析报表表格返回VO */
export interface IBaojingAccountsReceivableAnalysisReportFormReturnedToVO {
    /** 业务员id */
    businessUserId?: number;
    /** 业务员名称 */
    businessUserName?: string;
    /** 客户id */
    customerId?: number;
    /** 客户名称 */
    customerName?: string;
    /** 期初金额 */
    beginAmount?: number;
    /** 入库总额 */
    moveInAmount?: number;
    /** 已收金额 */
    receivedAmount?: number;
    /** 其他损益 */
    otherLossAmount?: number;
    /** 应收余额 */
    receivableBalance?: number;
    /** 日期 */
    dateTime?: string;
}
