import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/CRM-商机销售统计报表相关/querySalesStatisticsUsingPOST
export default function fetchMethod(data: number[], extraOptions?: any) {
    return http<IJSONResultListSalesStatisticsItemOutputVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/businessChance/salesStatistics/query",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// JSONResult«List«SalesStatisticsItemOutputVO»»
export interface IJSONResultListSalesStatisticsItemOutputVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ISalesStatisticsItemOutputVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// SalesStatisticsItemOutputVO
export interface ISalesStatisticsItemOutputVO {
    // 销售用户ID
    salesUserId: number;
    // 销售用户名
    salesUserName: string;
    // 需求确认数量
    confirmRequireQuantity: number;
    // 方案报价数量
    schemeQuotationQuantity: number;
    // 商务谈判数量
    businessNegotiationQuantity: number;
    // 合同签订数量
    contractSigningQuantity: number;
    // 回款数量
    paymentReturnQuantity: number;
    // 售后服务数量
    afterServiceQuantity: number;
    // 输单数量
    inputOrderQuantity: number;
    // 无效数量
    invalidQuantity: number;
    // 合计
    total: number;
}
