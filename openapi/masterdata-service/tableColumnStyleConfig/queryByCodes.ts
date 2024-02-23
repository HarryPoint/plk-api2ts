import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/列表列样式配置/queryByCodesUsingPOST
export default function fetchMethod(data: string[], extraOptions?: any) {
    return http<IJSONResultListJSONObject>(
        {
            url: "/masterdata-service/tableColumnStyleConfig/queryByCodes",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// JSONResult«List«JSONObject»»
export interface IJSONResultListJSONObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IJSONObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// JSONObject
export interface IJSONObject {
}
