import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/QMS大屏相关/queryQualifiedSupplierInspectionModelUsingPOST
*/
export default function fetchMethod(options: { data: IQualifiedSupplierInspectionModelQueryRequestDTO }, extraOptions?: any) {
    return http<IJSONResultListResponseToTheSupplierSQualifiedDeliveryRate>(
        {
            url: "/masterdata-service/qmsDashboard/queryQualifiedSupplierInspectionModel",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** QualifiedSupplierInspectionModelQueryRequestDTO */
export interface IQualifiedSupplierInspectionModelQueryRequestDTO {
    /** 查询日期的开始 */
    dateRangeBegin?: number;
    /** 查询日期的结束 */
    dateRangeEnd?: number;
}
/** JSONResult«List«供应商交检合格率-型号查询响应»» */
export interface IJSONResultListResponseToTheSupplierSQualifiedDeliveryRate {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ISupplierDeliveryQualifiedRateModelQueryResponse[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 供应商交检合格率-型号查询响应 */
export interface ISupplierDeliveryQualifiedRateModelQueryResponse {
    /** 型号 */
    modelName?: string;
    /** 合格数量 */
    qualifiedQuantity?: number;
    /** 不合格数量 */
    unqualifiedQuantity?: number;
}
