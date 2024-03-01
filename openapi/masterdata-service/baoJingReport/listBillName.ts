import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/listBillNameUsingGET
*/
export default function fetchMethod(options: { params: { BillName?: string } }, extraOptions?: any) {
    return http<IJSONResultListString>(
        {
            url: "/masterdata-service/baoJingReport/listBillName",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«string»» */
export interface IJSONResultListString {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
