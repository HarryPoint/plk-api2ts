import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产质检管理/checkTodoTaskByUserUsingGET_1
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultBool>(
        {
            url: "/masterdata-service/qualityProduceTask/checkTodoTaskByUser",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«boolean» */
export interface IJSONResultBool {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: boolean;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
