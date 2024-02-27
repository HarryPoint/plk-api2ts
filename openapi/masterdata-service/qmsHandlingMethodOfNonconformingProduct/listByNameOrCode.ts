import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/不合格品处理方式相关/listByNameOrCodeUsingPOST
*/
export default function fetchMethod(options: { data: INameNumberDTO }, extraOptions?: any) {
    return http<IJSONResultListResponseObjectForHandlingNonconformingItems>(
        {
            url: "/masterdata-service/qmsHandlingMethodOfNonconformingProduct/listByNameOrCode",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 名称、编号DTO */
export interface INameNumberDTO {
    /** 名称or编号 */
    nameOrCode?: string;
}
/** JSONResult«List«不合格品处理方式响应对象»» */
export interface IJSONResultListResponseObjectForHandlingNonconformingItems {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheNonconformingProductHandlingModeRespondsToTheObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 不合格品处理方式响应对象 */
export interface ITheNonconformingProductHandlingModeRespondsToTheObject {
    /** id */
    id?: string;
    /** 编号 */
    code?: string;
    /** 处理方式 */
    handingMethod?: string;
    /** 适用检验类型 */
    useValidationTypes?: ETheNonconformingProductHandlingModeRespondsToTheObject_useValidationTypes;
    /** 适用检验类型描述 */
    useValidationTypesDesc?: string;
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
