import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/标准工艺脚本相关/runSignalMigrateBusinessDataUsingGET
export default function fetchMethod(params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/script/standardTechnology/signalBusiness",
            method: "get",
            params,
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
