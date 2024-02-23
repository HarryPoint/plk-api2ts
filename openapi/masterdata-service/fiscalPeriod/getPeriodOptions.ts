import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/财务期间相关/getPeriodOptionsUsingGET
export default function fetchMethod() {
    return http<IJSONResultListstring>({
        url: "/masterdata-service/fiscalPeriod/getPeriodOptions",
        method: "get",
    });
}
// JSONResult«List«string»»
export interface IJSONResultListstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
