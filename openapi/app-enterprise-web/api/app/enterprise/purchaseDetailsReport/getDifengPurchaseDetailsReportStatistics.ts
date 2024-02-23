import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/采购明细报表相关/getDifengPurchaseDetailsReportStatisticsUsingPOST
export default function fetchMethod(data: GetDifengPurchaseDetailsReportStatistics) {
    return post<IJSONResultPurchaseDetailsStatisticsReturnedObject['data']>({
      url: "/app-enterprise-web/api/app/enterprise/purchaseDetailsReport/getDifengPurchaseDetailsReportStatistics",
      data,
    });
}
// JSONResult«采购明细表统计返回对象»
export interface IJSONResultPurchaseDetailsStatisticsReturnedObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPurchaseDetailsStatisticsReturnedObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 采购明细表统计返回对象
export interface IPurchaseDetailsStatisticsReturnedObject {
    // 数量
    quantity: number;
    // 含税金额
    amountWithTax: number;
    // 采购金额
    amountWithDiscountedTax: number;
}
