import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/queryMaterialTypeUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListCodeName>(
        {
            url: "/masterdata-service/baoJingReport/queryMaterialType",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«CodeName»» */
export interface IJSONResultListCodeName {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ICodeName[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** CodeName */
export interface ICodeName {
    /** undefined */
    code?: string;
    /** undefined */
    name?: string;
}
