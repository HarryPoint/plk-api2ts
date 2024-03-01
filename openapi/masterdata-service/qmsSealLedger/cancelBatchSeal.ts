import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/印章台账相关/cancelBatchSealUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultString1>(
        {
            url: "/masterdata-service/qmsSealLedger/cancelBatchSeal",
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
