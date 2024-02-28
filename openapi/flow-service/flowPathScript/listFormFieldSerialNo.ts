import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16500/doc.html#/default/应用引擎脚本相关/listFormFieldSerialNoUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultMapstringstring>(
        {
            url: "/flow-service/flowPathScript/listFormFieldSerialNo",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«Map«string,string»» */
export interface IJSONResultMapstringstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, string>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
