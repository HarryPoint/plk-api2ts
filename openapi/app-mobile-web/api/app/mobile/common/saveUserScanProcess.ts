import { http } from '@/api/http';

// http://47.108.139.107:17400/doc.html#/default/公共相关/saveUserScanProcessUsingGET
export default function fetchMethod(params: { processId: number }) {
    return http<IJSONResultobject>({
        url: "/app-mobile-web/api/app/mobile/common/saveUserScanProcess",
        method: "get",
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
