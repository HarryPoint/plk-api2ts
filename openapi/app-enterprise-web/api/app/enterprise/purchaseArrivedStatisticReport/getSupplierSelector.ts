import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/宝晶采购到货统计报表相关/getSupplierSelectorUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListIdNameNumberVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/purchaseArrivedStatisticReport/getSupplierSelector",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«Id，名称，编号VO»» */
export interface IJSONResultListIdNameNumberVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IIdNameNumberVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: string;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}
