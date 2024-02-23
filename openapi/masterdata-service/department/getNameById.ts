import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/部门相关/getNameByIdUsingGET_1
export default function fetchMethod(params: { enterpriseId: number; id: number }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/masterdata-service/department/getNameById",
            method: "get",
            params,
        },
        extraOptions,
    );
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
