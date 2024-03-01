import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/不合格品处理方式相关/listByValidationTypeUsingGET
*/
export default function fetchMethod(options: { params: { useValidationTypes?: EuseValidationTypes } }, extraOptions?: any) {
    return http<IJSONResultListResponseObjectForHandlingNonconformingItems>(
        {
            url: "/masterdata-service/qmsHandlingMethodOfNonconformingProduct/listByValidationType",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«不合格品处理方式响应对象»» */
export interface IJSONResultListResponseObjectForHandlingNonconformingItems {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheNonconformingProductHandlingModeRespondsToTheObject[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 不合格品处理方式响应对象 */
export interface ITheNonconformingProductHandlingModeRespondsToTheObject {
    /** 编号 */
    code?: string;
    /** 处理方式 */
    handingMethod?: string;
    /** id */
    id?: string;
    /** 适用检验类型 */
    useValidationTypes?: ETheNonconformingProductHandlingModeRespondsToTheObject_useValidationTypes;
    /** 适用检验类型描述 */
    useValidationTypesDesc?: string;
}

export enum EuseValidationTypes {
    CUSTOMER_COMPLAIN = "CUSTOMER_COMPLAIN",
    INCOMING_INSPECTION = "INCOMING_INSPECTION",
    FIRST_INSPECTION = "FIRST_INSPECTION",
    PATROL_INSPECTION = "PATROL_INSPECTION",
    PROCESS_INSPECTION = "PROCESS_INSPECTION",
    PRODUCT_INSPECTION = "PRODUCT_INSPECTION",
    SHIPMENT_INSPECTION = "SHIPMENT_INSPECTION",
    EXPERIMENT = "EXPERIMENT",
    OTHER = "OTHER"
}

export enum ETheNonconformingProductHandlingModeRespondsToTheObject_useValidationTypes {
    /** 客户投诉 */
    CUSTOMER_COMPLAIN = "CUSTOMER_COMPLAIN",
    /** 来料检 */
    INCOMING_INSPECTION = "INCOMING_INSPECTION",
    /** 首检 */
    FIRST_INSPECTION = "FIRST_INSPECTION",
    /** 巡检 */
    PATROL_INSPECTION = "PATROL_INSPECTION",
    /** 工序检 */
    PROCESS_INSPECTION = "PROCESS_INSPECTION",
    /** 成品检 */
    PRODUCT_INSPECTION = "PRODUCT_INSPECTION",
    /** 出货检 */
    SHIPMENT_INSPECTION = "SHIPMENT_INSPECTION",
    /** 试验 */
    EXPERIMENT = "EXPERIMENT",
    /** 其它 */
    OTHER = "OTHER"
}
