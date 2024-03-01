import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/项目相关/queryInitStatusUsingGET
*/
export default function fetchMethod(options: { params: { Id?: string } }, extraOptions?: any) {
    return http<IJSONResultString2>(
        {
            url: "/masterdata-service/project/queryInitStatus",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«string»_2 */
export interface IJSONResultString2 {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: EJSONResultString2_data;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultString2_data {
    INITIALIZING = "INITIALIZING",
    COMPLETE = "COMPLETE",
    FAILED = "FAILED"
}
