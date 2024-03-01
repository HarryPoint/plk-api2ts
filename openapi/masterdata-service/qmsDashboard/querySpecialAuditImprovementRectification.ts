import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/QMS大屏相关/querySpecialAuditImprovementRectificationUsingPOST
*/
export default function fetchMethod(options: { data: IImprovementRecificationQueryRequestDTO }, extraOptions?: any) {
    return http<IJSONResultImprovesTheRectificationRate>(
        {
            url: "/masterdata-service/qmsDashboard/querySpecialAuditImprovementRectification",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** ImprovementRecificationQueryRequestDTO */
export interface IImprovementRecificationQueryRequestDTO {
    /** 查询日期的开始 */
    dateRangeBegin?: number;
    /** 查询日期的结束 */
    dateRangeEnd?: number;
}
/** JSONResult«改进整改率» */
export interface IJSONResultImprovesTheRectificationRate {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IImproveTheRectificationRate;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 改进整改率 */
export interface IImproveTheRectificationRate {
    /** 未整改总数 */
    notRectifiedQuantity?: number;
    /** 已整改总数 */
    rectifiedQuantity?: number;
    /** 不符合程度-单项值未整改数 */
    singleItemNotRectifiedTotalQuantityMap?: Record<string, number>;
    /** 不符合程度-单项值总数 */
    singleItemTotalQuantityMap?: Record<string, number>;
    /** 标题列表 */
    titleDefineList?: ITitleDefineQueryResponseDTO[];
    /** 总数 */
    totalQuantity?: number;
}
/** TitleDefineQueryResponseDTO */
export interface ITitleDefineQueryResponseDTO {
    /** key */
    key?: string;
    /** 名称 */
    name?: string;
}
