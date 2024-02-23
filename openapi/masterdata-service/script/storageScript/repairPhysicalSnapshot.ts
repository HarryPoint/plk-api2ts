import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/库存脚本相关接口/repairPhysicalSnapshotUsingGET
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/script/storageScript/repairPhysicalSnapshot",
            method: "get",
        },
        extraOptions,
    );
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
