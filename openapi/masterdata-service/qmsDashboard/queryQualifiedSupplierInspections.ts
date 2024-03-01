import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/QMS大屏相关/queryQualifiedSupplierInspectionsUsingPOST
*/
export default function fetchMethod(options: { data: IQmsLargeScreenTimeIntervalRequest }, extraOptions?: any) {
    return http<IJSONResultListResponseToTheSupplierDeliveryQualificationRateQuery>(
        {
            url: "/masterdata-service/qmsDashboard/queryQualifiedSupplierInspections",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** qms大屏时间区间请求 */
export interface IQmsLargeScreenTimeIntervalRequest {
    /** 查询日期的开始 */
    dateRangeBegin?: string;
    /** 查询日期的结束 */
    dateRangeEnd?: string;
    /** 查询日期区间类型 */
    dateRangeType?: EQmsLargeScreenTimeIntervalRequest_dateRangeType;
}
/** JSONResult«List«供应商交检合格率查询响应»» */
export interface IJSONResultListResponseToTheSupplierDeliveryQualificationRateQuery {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ISupplierDeliveryQualifiedRateQueryResponse[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 供应商交检合格率查询响应 */
export interface ISupplierDeliveryQualifiedRateQueryResponse {
    /** 横坐标 */
    abscissa?: string;
    /** 交检总数量 */
    inspectionQuantity?: number;
    /** 合格率 */
    passRate?: number;
    /** 合格数量 */
    qualifiedQuantity?: number;
}

export enum EQmsLargeScreenTimeIntervalRequest_dateRangeType {
    /** 年 */
    YEAR = "YEAR",
    /** 季度 */
    QUARTER = "QUARTER",
    /** 月 */
    MONTH = "MONTH"
}
