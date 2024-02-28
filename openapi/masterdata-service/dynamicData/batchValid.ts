import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/动态数据相关/batchValidUsingPOST_1
*/
export default function fetchMethod(options: { data: IDynamicFormEnabledRequestDTO, params: { flowPathId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/dynamicData/batchValid",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** DynamicFormEnabledRequestDTO */
export interface IDynamicFormEnabledRequestDTO {
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
