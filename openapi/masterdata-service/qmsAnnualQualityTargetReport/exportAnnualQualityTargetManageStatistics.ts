import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.139.107:16700/doc.html#/default/年度质量目标管理统计报表相关/exportAnnualQualityTargetManageStatisticsUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/qmsAnnualQualityTargetReport/exportAnnualQualityTargetManageStatistics",
            method: "POST",
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
