import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/出货检验任务相关/cancelTaskUsingPOST_6
*/
export default function fetchMethod(options: { data: IVerifyTaskCancellationRequestDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/qmsShipmentInspectionTask/cancelTask",
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
