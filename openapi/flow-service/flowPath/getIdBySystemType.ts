import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/流程相关/getIdBySystemTypeUsingPOST
export default function fetchMethod(params: { enterpriseId: number; systemType: string }) {
    return http<IJSONResultlong>({
        url: "/flow-service/flowPath/getIdBySystemType",
        method: "post",
        params,
    });
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
