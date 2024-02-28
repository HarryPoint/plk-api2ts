import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/首检检验任务相关/cancelTaskUsingPOST_1
*/
export default function fetchMethod(options: { data: IVerifyTaskCancellationRequestDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/qmsFirstInspectionTask/cancelTask",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 检验任务取消请求DTO */
export interface IVerifyTaskCancellationRequestDTO {
    /** 流程id */
    flowPathId?: string;
    /** 任务id */
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
