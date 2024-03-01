import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/流程任务相关/saveDynamicFormDataUsingPOST
*/
export default function fetchMethod(options: { data: IFlowPathTaskProcessRequestDTO }, extraOptions?: any) {
    return http<IJSONResultString1>(
        {
            url: "/masterdata-service/flowPathTask/saveDynamicFormData",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** FlowPathTaskProcessRequestDTO */
export interface IFlowPathTaskProcessRequestDTO {
    /** 表单数据 */
    data?: Record<string, Record<string, any>>;
    /** 任务ID */
    id?: string;
}
/** JSONResult«string»_1 */
export interface IJSONResultString1 {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: EJSONResultString1_data;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultString1_data {
    Y = "Y",
    N = "N"
}
