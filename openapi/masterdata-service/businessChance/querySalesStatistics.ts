import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/crm-商机销售统计相关/querySalesStatisticsUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultListSalesStatisticsItemOutputVO>(
        {
            url: "/masterdata-service/businessChance/querySalesStatistics",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«SalesStatisticsItemOutputVO»» */
export interface IJSONResultListSalesStatisticsItemOutputVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ISalesStatisticsItemOutputVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** SalesStatisticsItemOutputVO */
export interface ISalesStatisticsItemOutputVO {
    /** 售后服务数量 */
    afterServiceQuantity?: number;
    /** 商务谈判数量 */
    businessNegotiationQuantity?: number;
    /** 需求确认数量 */
    confirmRequireQuantity?: number;
    /** 合同签订数量 */
    contractSigningQuantity?: number;
    /** 输单数量 */
    inputOrderQuantity?: number;
    /** 无效数量 */
    invalidQuantity?: number;
    /** 回款数量 */
    paymentReturnQuantity?: number;
    /** 销售用户ID */
    salesUserId?: string;
    /** 销售用户名 */
    salesUserName?: string;
    /** 方案报价数量 */
    schemeQuotationQuantity?: number;
    /** 合计 */
    total?: number;
}
