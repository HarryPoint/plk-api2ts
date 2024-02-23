import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/动态数据相关/getByIdUsingGET_2
export default function fetchMethod(params: { enterpriseId: number; flowPathId: number; formRecordId: number }, extraOptions?: any) {
    return http<IJSONResultJSONObject>(
        {
            url: "/masterdata-service/dynamicData/getById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// JSONResult«JSONObject»
export interface IJSONResultJSONObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, Record<string, any>>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
