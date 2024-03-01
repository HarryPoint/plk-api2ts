import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/动态数据相关/getMasterDataByIdUsingGET
*/
export default function fetchMethod(options: { params: { EnterpriseCode?: string; FlowPathCode?: string; Id?: string } }, extraOptions?: any) {
    return http<IJSONResultJSONObject>(
        {
            url: "/masterdata-service/dynamicData/getMasterDataById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«JSONObject» */
export interface IJSONResultJSONObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, Record<string, any>>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
