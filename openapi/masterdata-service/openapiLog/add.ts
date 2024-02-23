import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/开放接口相关/addUsingPOST_2
export default function fetchMethod(params: { clientIp: string; enterpriseId: number; isSuccess: string; reqBody: string; reqType: string; uri: string; userId?: number }) {
    return http<IJSONResultobject>({
        url: "/masterdata-service/openapiLog/add",
        method: "post",
        params,
    });
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
