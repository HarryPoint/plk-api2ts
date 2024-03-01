import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/流程任务相关/transferTaskUsingPOST
*/
export default function fetchMethod(options: { data: IProcessTasksAreTransferredToTheDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/flowPathTask/transferTask",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 流程任务转交DTO */
export interface IProcessTasksAreTransferredToTheDTO {
    /** 表单数据 */
    data?: Record<string, Record<string, any>>;
    /** 任务ID */
    id?: string;
    /** 审批意见/执行情况 */
    notes?: string;
    /** 转交人id */
    userId?: string;
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
