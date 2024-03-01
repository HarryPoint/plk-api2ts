import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/进出料扫码相关/listModuleByCodeUsingGET
*/
export default function fetchMethod(options: { params: { Code?: string } }, extraOptions?: any) {
    return http<IJSONResultSetString>(
        {
            url: "/masterdata-service/moveInOutScan/listModuleByCode",
            method: "GET",
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
