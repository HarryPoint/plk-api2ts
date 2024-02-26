import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/销售日报表相关/getSalesDayReportStatisticsUsingPOST
*/
export default function fetchMethod(data: GetSalesDayReportStatistics, extraOptions?: any) {
    return http<IJSONResultIndicatesTheReturnedObjectOfDailySalesReportStatistics>(
        {
            url: "/app-mobile-web/api/app/mobile/salesDayReport/getSalesDayReportStatistics",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** JSONResult«销售日报表统计返回对象» */
export interface IJSONResultIndicatesTheReturnedObjectOfDailySalesReportStatistics {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IReturnedObjectOfDailySalesReportStatistics;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 销售日报表统计返回对象 */
export interface IReturnedObjectOfDailySalesReportStatistics {
    /** 销售数量 */
    salesQuantity: number;
    /** 销售金额 */
    salesAmount: number;
    /** 销售积分 */
    salesIntegral: number;
}
