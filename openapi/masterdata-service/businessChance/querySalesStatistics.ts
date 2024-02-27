import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/crm-商机销售统计相关/querySalesStatisticsUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultListSalesStatisticsItemOutputVO>(
        {
            url: "/masterdata-service/businessChance/querySalesStatistics",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«SalesStatisticsItemOutputVO»» */
export interface IJSONResultListSalesStatisticsItemOutputVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ISalesStatisticsItemOutputVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** SalesStatisticsItemOutputVO */
export interface ISalesStatisticsItemOutputVO {
    /** 销售用户ID */
    salesUserId?: string;
    /** 销售用户名 */
    salesUserName?: string;
    /** 需求确认数量 */
    confirmRequireQuantity?: number;
    /** 方案报价数量 */
    schemeQuotationQuantity?: number;
    /** 商务谈判数量 */
    businessNegotiationQuantity?: number;
    /** 合同签订数量 */
    contractSigningQuantity?: number;
    /** 回款数量 */
    paymentReturnQuantity?: number;
    /** 售后服务数量 */
    afterServiceQuantity?: number;
    /** 输单数量 */
    inputOrderQuantity?: number;
    /** 无效数量 */
    invalidQuantity?: number;
    /** 合计 */
    total?: number;
}
