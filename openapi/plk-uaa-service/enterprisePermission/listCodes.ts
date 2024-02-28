import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.139.107:18100/doc.html#/default/企业权限相关/listCodesUsingPOST
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultSetstring>(
        {
            url: "/plk-uaa-service/enterprisePermission/listCodes",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«Set«string»» */
export interface IJSONResultSetstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
