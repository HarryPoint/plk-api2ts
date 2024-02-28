import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/动态数据相关/getDataIdAndCodeListUsingPOST
*/
export default function fetchMethod(options: { data: string[], params: { enterpriseCode?: string; enterpriseId?: string; flowPathCode?: string } }, extraOptions?: any) {
    return http<IJSONResultListJSONObject>(
        {
            url: "/masterdata-service/dynamicData/getDataIdAndCodeList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«JSONObject»» */
export interface IJSONResultListJSONObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IJSONObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** JSONObject */
export interface IJSONObject {
}
