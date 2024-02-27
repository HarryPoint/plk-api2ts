import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/员工扫码报工工序相关/saveUserScanProcessUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; processId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/userScanProcess/saveUserScanProcess",
            method: "get",
            ...options,
        },
        extraOptions,
    );
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
