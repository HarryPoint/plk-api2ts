import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产任务相关/getProcessRpFieldInfoUsingPOST
*/
export default function fetchMethod(options: { data: IProcedureAssociatedFieldQueryRequestObject, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<ITheJSONResultListOperationCorrespondsToTheFieldDetailsVO>(
        {
            url: "/masterdata-service/produceTask/getProcessRpFieldInfo",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工序关联字段查询请求对象 */
export interface IProcedureAssociatedFieldQueryRequestObject {
    /** 生产订单id */
    produceOrderId?: string;
    /** 工序ID */
    processId?: string;
    /** 销售订单id */
    salesOrderId?: string;
}
/** JSONResult«List«工序对应字段详情VO»» */
export interface ITheJSONResultListOperationCorrespondsToTheFieldDetailsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IOperationsCorrespondToFieldDetailsVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工序对应字段详情VO */
export interface IOperationsCorrespondToFieldDetailsVO {
    /** 关联字段code */
    fieldCode?: string;
    /** 关联字段名称 */
    fieldName?: string;
    /** 值 */
    value?: Record<string, any>;
}
