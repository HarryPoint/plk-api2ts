import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶即时库存查询相关/getMaterialCuratorSelectorUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; nameOrCode?: string } }, extraOptions?: any) {
    return http<IJSONResultListString>(
        {
            url: "/masterdata-service/baoJingWarehouseMaterial/getMaterialCuratorSelector",
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
