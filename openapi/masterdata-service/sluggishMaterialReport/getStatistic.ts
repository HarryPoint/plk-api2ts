import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/呆滞物料分析报表相关/getStatisticUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultTotalResponseObjectForQueryingTheInactiveMaterialsReport>(
        {
            url: "/masterdata-service/sluggishMaterialReport/getStatistic",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«呆滞物料报表查询合计响应对象» */
export interface IJSONResultTotalResponseObjectForQueryingTheInactiveMaterialsReport {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITotalResponseObjectForQueryingTheInactiveMaterialReport;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 呆滞物料报表查询合计响应对象 */
export interface ITotalResponseObjectForQueryingTheInactiveMaterialReport {
    /** 总数量 */
    totalQuantity?: number;
}
