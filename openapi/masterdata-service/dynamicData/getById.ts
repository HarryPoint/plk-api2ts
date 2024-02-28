import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/动态数据相关/getByIdUsingGET_2
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; flowPathId?: string; formRecordId?: string } }, extraOptions?: any) {
    return http<IJSONResultJSONObject>(
        {
            url: "/masterdata-service/dynamicData/getById",
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
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, Record<string, any>>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
