import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/getBaoJingReportRawStorageResultVOUsingPOST
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; filePathNo?: number } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/baoJingReportCheck/importData",
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
