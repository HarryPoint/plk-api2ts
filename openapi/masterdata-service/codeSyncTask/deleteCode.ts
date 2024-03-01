import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/编码同步任务相关/deleteCodeUsingPOST
*/
export default function fetchMethod(options: { params: { code?: string } }, extraOptions?: any) {
    return http<IJSONResultString1>(
        {
            url: "/masterdata-service/codeSyncTask/deleteCode",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«string»_1 */
export interface IJSONResultString1 {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: EJSONResultString1_data;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultString1_data {
    Y = "Y",
    N = "N"
}
