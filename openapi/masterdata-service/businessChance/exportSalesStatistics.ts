import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/crm-商机销售统计相关/exportSalesStatisticsUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/businessChance/exportSalesStatistics",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
