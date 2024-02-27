import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/首检检验任务相关/assignmentTaskUsingPOST
*/
export default function fetchMethod(options: { data: IVerifyTaskAssignmentRequestDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/qmsFirstInspectionTask/assignmentTask",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 检验任务分配请求DTO */
export interface IVerifyTaskAssignmentRequestDTO {
    /** 流程id */
    flowPathId?: string;
    /** 任务id */
    taskIds?: string[];
    /** 质量人员id */
    qualityPersonnelIds?: string[];
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
