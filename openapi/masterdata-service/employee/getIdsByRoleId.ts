import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/员工相关/getIdsByRoleIdUsingGET
*/
export default function fetchMethod(options: { params: { EnterpriseId?: string; RoleId?: string } }, extraOptions?: any) {
    return http<IJSONResultListLong>(
        {
            url: "/masterdata-service/employee/getIdsByRoleId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«long»» */
export interface IJSONResultListLong {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
