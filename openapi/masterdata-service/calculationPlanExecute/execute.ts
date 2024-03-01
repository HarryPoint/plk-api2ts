import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/计算过方案执行相关/executeUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/calculationPlanExecute/execute",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
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
