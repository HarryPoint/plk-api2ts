import { http } from "@/api/http";

/**
* @author Mao Hai Ping
* @link http://47.108.135.148:16700/doc.html#/default/佣金与提成统计表（帝丰定制）/getSalesCommissionAggregateUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultCommissionAndCommissionStatisticsTableTeifungCustomizedTotalResponseObject>(
        {
            url: "/masterdata-service/diFengSalesCommissionReport/getSalesCommissionAggregate",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«佣金与提成统计表（帝丰定制）合计响应对象» */
export interface IJSONResultCommissionAndCommissionStatisticsTableTeifungCustomizedTotalResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ICommissionAndCommissionStatisticsTableDifengCustomizedTotalResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 佣金与提成统计表（帝丰定制）合计响应对象 */
export interface ICommissionAndCommissionStatisticsTableDifengCustomizedTotalResponseObject {
    /** 冲款金额 */
    chargebackQuantity?: string;
    /** 已收金额 */
    receivedQuantity?: string;
    /** 挂账金额 */
    registeredQuantity?: string;
    /** 销售金额 */
    saleQuantity?: string;
    /** 未付金额 */
    unpaidQuantity?: string;
}
