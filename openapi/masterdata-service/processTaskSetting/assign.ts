import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工序任务设置相关/assignUsingPOST
*/
export default function fetchMethod(options: { data: IProcessTaskAssignmentDTO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/processTaskSetting/assign",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工序任务分配DTO */
export interface IProcessTaskAssignmentDTO {
    /** 是否分配  Y 分配 N 不分配 */
    isAssign: EProcessTaskAssignmentDTO_isAssign;
    /** 工序ids */
    processIds: string[];
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

export enum EProcessTaskAssignmentDTO_isAssign {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
