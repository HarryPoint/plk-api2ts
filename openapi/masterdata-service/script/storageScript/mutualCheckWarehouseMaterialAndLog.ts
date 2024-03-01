import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/库存脚本相关接口/mutualCheckWarehouseMaterialAndLogUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultString>(
        {
            url: "/masterdata-service/script/storageScript/mutualCheckWarehouseMaterialAndLog",
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
