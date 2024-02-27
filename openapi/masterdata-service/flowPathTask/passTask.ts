import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/流程任务相关/passTaskUsingPOST
*/
export default function fetchMethod(options: { data: IProcessTaskSubmitDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/flowPathTask/passTask",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 流程任务提交DTO */
export interface IProcessTaskSubmitDTO {
    /** 任务ID */
    id?: string;
    /** 表单数据 */
    data?: Record<string, Record<string, any>>;
    /** 审批意见/执行情况 */
    notes?: string;
    /** 下个节点执行员工ID列表 */
    nextNodeExecutorEmployeeIdList?: string[];
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
