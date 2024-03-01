import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/QMS大屏相关/queryHandlingOfNonConformingModelStatisticsUsingGET
*/
export default function fetchMethod(options: { params: { DateBegin?: string; DateEnd?: string } }, extraOptions?: any) {
    return http<IJSONResultListLargeScreenDefectiveProductStatisticsReturnByItem>(
        {
            url: "/masterdata-service/qmsDashboard/queryHandlingOfNonConformingModelStatistics",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«大屏不合格品统计按项目返回»» */
export interface IJSONResultListLargeScreenDefectiveProductStatisticsReturnByItem {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ILargeScreenNonconformingProductStatisticsAreReturnedByItem[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 大屏不合格品统计按项目返回 */
export interface ILargeScreenNonconformingProductStatisticsAreReturnedByItem {
    /** 型号 */
    model?: string;
    /** 数量 */
    quantity?: number;
}
