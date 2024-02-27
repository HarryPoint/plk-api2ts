import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/员工相关/getIdsByRoleIdUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; roleId?: string } }, extraOptions?: any) {
    return http<IJSONResultListlong>(
        {
            url: "/masterdata-service/employee/getIdsByRoleId",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«long»» */
export interface IJSONResultListlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
