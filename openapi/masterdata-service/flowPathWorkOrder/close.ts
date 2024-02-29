import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/流程工单相关/closeUsingPOST
*/
export default function fetchMethod(options: { data: IWorkOrderCloseRequestDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/flowPathWorkOrder/close",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** WorkOrderCloseRequestDTO */
export interface IWorkOrderCloseRequestDTO {
    /** undefined */
    id: string;
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
