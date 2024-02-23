import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/销售明细报表相关/getSalesDetailsReportStatisticsUsingPOST
export default function fetchMethod(data: GetSalesDetailsReportStatistics, extraOptions?: any) {
    return http<IJSONResultSalesStatisticsReturnObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/salesDetailsReport/getSalesDetailsReportStatistics",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// JSONResult«销售明细表统计返回对象»
export interface IJSONResultSalesStatisticsReturnObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ISalesStatementStatisticsReturnObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 销售明细表统计返回对象
export interface ISalesStatementStatisticsReturnObject {
    // 数量
    quantity: number;
    // 含税金额
    amountWithTax: number;
    // 销售收入
    amountWithDiscounted: number;
    // 销售金额
    amountWithDiscountedTax: number;
    // 销售成本
    salesCost: number;
    // 销售毛利
    salesGrossProfit: number;
    // 佣金金额
    commissionAmount: number;
}
