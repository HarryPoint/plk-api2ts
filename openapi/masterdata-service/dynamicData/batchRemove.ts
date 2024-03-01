import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/动态数据相关/batchRemoveUsingPOST_1
*/
export default function fetchMethod(options: { data: IDynamicFormDeletedRequestDTO, params: { FlowPathId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/dynamicData/batchRemove",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** DynamicFormDeletedRequestDTO */
export interface IDynamicFormDeletedRequestDTO {
    /** ID列表 */
    ids?: string[];
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
