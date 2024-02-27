import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/工具脚本相关/importEnterpriseDataUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; fileKey?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/toolScript/importEnterpriseData",
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
