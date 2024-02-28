import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/动态数据相关/batchRemoveWithoutStatusByFlowPathIdUsingPOST
*/
export default function fetchMethod(options: { data: IDynamicDataStatelessDeleteRequestObject, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/dynamicData/batchRemoveWithoutStatusByFlowPathId",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 动态数据无状态删除请求对象 */
export interface IDynamicDataStatelessDeleteRequestObject {
    /** 删除明细 */
    removeDetails?: IDynamicDataStatelessDeletionOfDetailedRequestObjects[];
}
/** 动态数据无状态删除明细请求对象 */
export interface IDynamicDataStatelessDeletionOfDetailedRequestObjects {
    /** 流程id */
    flowPathId?: string;
    /** 动态数据id集合 */
    formRecordIdList?: string[];
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
