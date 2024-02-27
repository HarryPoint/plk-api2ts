import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/QMS大屏相关/queryQualifiedSupplierInspectionCategoryUsingPOST
*/
export default function fetchMethod(options: { data: IQualifiedSupplierInspectionCategoryQueryRequestDTO }, extraOptions?: any) {
    return http<IJSONResultListResponseToTheSupplierDeliveryQualificationRateCategoryQuery>(
        {
            url: "/masterdata-service/qmsDashboard/queryQualifiedSupplierInspectionCategory",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** QualifiedSupplierInspectionCategoryQueryRequestDTO */
export interface IQualifiedSupplierInspectionCategoryQueryRequestDTO {
    /** 查询日期的开始 */
    dateRangeBegin?: number;
    /** 查询日期的结束 */
    dateRangeEnd?: number;
}
/** JSONResult«List«供应商交检合格率-类别查询响应»» */
export interface IJSONResultListResponseToTheSupplierDeliveryQualificationRateCategoryQuery {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ISupplierDeliveryQualifiedRateCategoryQueryResponse[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 供应商交检合格率-类别查询响应 */
export interface ISupplierDeliveryQualifiedRateCategoryQueryResponse {
    /** 类别ID */
    categoryId?: string;
    /** 类别名称 */
    categoryName?: string;
    /** 合格数量 */
    qualifiedQuantity?: number;
    /** 不合格数量 */
    unqualifiedQuantity?: number;
}
