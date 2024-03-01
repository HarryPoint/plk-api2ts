import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/角色相关/listPermissionCodeUsingPOST
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultSetString>(
        {
            url: "/plk-uaa-service/role/listPermissionCode",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«Set«string»» */
export interface IJSONResultSetString {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
