import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/动态数据相关/batchRemoveUsingPOST_1
*/
export default function fetchMethod(data: IDynamicFormDeletedRequestDTO, params: { flowPathId?: number }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/dynamicData/batchRemove",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** DynamicFormDeletedRequestDTO */
export interface IDynamicFormDeletedRequestDTO {
    /** ID列表 */
    ids?: number[];
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
    ts?: number;
}
