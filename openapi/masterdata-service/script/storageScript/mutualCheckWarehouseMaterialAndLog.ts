import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/库存脚本相关接口/mutualCheckWarehouseMaterialAndLogUsingGET
export default function fetchMethod(params: { enterpriseId: number }) {
    return http<IJSONResultstring>({
        url: "/masterdata-service/script/storageScript/mutualCheckWarehouseMaterialAndLog",
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
