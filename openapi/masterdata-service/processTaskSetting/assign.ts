import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/工序任务设置相关/assignUsingPOST
*/
export default function fetchMethod(options: { data: IProcessTaskAssignmentDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/processTaskSetting/assign",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 工序任务分配DTO */
export interface IProcessTaskAssignmentDTO {
    /** 工序ids */
    processIds: string[];
    /** 是否分配  Y 分配 N 不分配 */
    isAssign: EProcessTaskAssignmentDTO_isAssign;
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

export enum EProcessTaskAssignmentDTO_isAssign {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
