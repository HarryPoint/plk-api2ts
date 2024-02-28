import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/设备人员能力相关/cleanAppCacheUsingPOST
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/deviceEmployeeCapacity/cleanAppCache",
            method: "POST",
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
