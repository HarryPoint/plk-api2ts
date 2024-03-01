import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/QMS大屏相关/queryHandlingOfNonConformingLevelStatisticsUsingGET
*/
export default function fetchMethod(options: { params: { dateBegin?: string; dateEnd?: string } }, extraOptions?: any) {
    return http<IJSONResultLargeScreenDefectiveProductStatisticsAreReturnedByLevel>(
        {
            url: "/masterdata-service/qmsDashboard/queryHandlingOfNonConformingLevelStatistics",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«大屏不合格品统计按级别返回» */
export interface IJSONResultLargeScreenDefectiveProductStatisticsAreReturnedByLevel {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ILargeScreenNonconformingProductStatisticsAreReturnedByLevel;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 大屏不合格品统计按级别返回 */
export interface ILargeScreenNonconformingProductStatisticsAreReturnedByLevel {
    /** I的占比 */
    percentageOfCategoryOne?: number;
    /** III的占比 */
    percentageOfCategoryThree?: number;
    /** II的占比 */
    percentageOfCategoryTwo?: number;
    /** I的数量 */
    quantityOfCategoryOne?: number;
    /** III的数量 */
    quantityOfCategoryThree?: number;
    /** II的数量 */
    quantityOfCategoryTwo?: number;
}
