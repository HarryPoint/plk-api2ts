import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/职位相关/getNameByIdUsingGET_3
export default function fetchMethod(params: { enterpriseId: number; id: number }) {
    return http<IJSONResultstring>({
        url: "/masterdata-service/position/getNameById",
        method: "get",
        params,
    });
}
// JSONResult«string»
export interface IJSONResultstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
