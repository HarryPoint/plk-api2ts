import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/巡检检验任务相关/assignmentTaskUsingPOST_2
*/
export default function fetchMethod(options: { data: IVerifyTaskAssignmentRequestDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/qmsPatrolInspectionTask/assignmentTask",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 检验任务分配请求DTO */
export interface IVerifyTaskAssignmentRequestDTO {
    /** 流程id */
    flowPathId?: string;
    /** 质量人员id */
    qualityPersonnelIds?: string[];
    /** 任务id */
    taskIds?: string[];
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
