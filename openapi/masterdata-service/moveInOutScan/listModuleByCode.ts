import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.139.107:16700/doc.html#/default/进出料扫码相关/listModuleByCodeUsingGET
*/
export default function fetchMethod(options: { params: { code?: string } }, extraOptions?: any) {
    return http<IJSONResultSetstring>(
        {
            url: "/masterdata-service/moveInOutScan/listModuleByCode",
            method: "GET",
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
