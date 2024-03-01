import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/流程任务相关/commitTaskUsingPOST
*/
export default function fetchMethod(options: { data: IProcessTaskSubmitDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/flowPathTask/commitTask",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 流程任务提交DTO */
export interface IProcessTaskSubmitDTO {
    /** 表单数据 */
    data?: Record<string, Record<string, any>>;
    /** 任务ID */
    id?: string;
    /** 下个节点执行员工ID列表 */
    nextNodeExecutorEmployeeIdList?: string[];
    /** 审批意见/执行情况 */
    notes?: string;
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
