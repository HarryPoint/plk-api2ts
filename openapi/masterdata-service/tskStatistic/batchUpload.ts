import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/tsk数采数据相关/batchUploadUsingPOST
*/
export default function fetchMethod(options: { data: ITSKTestData[], params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/tskStatistic/batchUpload",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** TSK测试数据 */
export interface ITSKTestData {
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
