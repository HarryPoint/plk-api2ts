import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/动态数据相关/batchInvalidUsingPOST
*/
export default function fetchMethod(options: { data: IDynamicFormDisabledRequestDTO, params: { flowPathId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/dynamicData/batchInvalid",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** DynamicFormDisabledRequestDTO */
export interface IDynamicFormDisabledRequestDTO {
    /** ID列表 */
    ids?: string[];
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
