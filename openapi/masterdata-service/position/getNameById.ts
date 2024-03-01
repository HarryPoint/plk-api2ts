import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/职位相关/getNameByIdUsingGET_3
*/
export default function fetchMethod(options: { params: { EnterpriseId?: string; Id?: string } }, extraOptions?: any) {
    return http<IJSONResultString>(
        {
            url: "/masterdata-service/position/getNameById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«string» */
export interface IJSONResultString {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
