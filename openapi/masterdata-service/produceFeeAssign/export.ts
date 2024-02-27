import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/费用分配相关/exportUsingPOST_16
*/
export default function fetchMethod(options: { data: Export }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/produceFeeAssign/export",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
