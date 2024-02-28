import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/流程任务相关/saveDynamicFormDataUsingPOST
*/
export default function fetchMethod(options: { data: IFlowPathTaskProcessRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring1>(
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
    /** 任务ID */
    id?: string;
    /** 表单数据 */
    data?: Record<string, Record<string, any>>;
}
/** JSONResult«string»_1 */
export interface IJSONResultstring1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring1_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultstring1_data {
    Y = "Y",
    N = "N"
}
