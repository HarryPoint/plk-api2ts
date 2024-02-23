import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/宝晶报表相关/getBaoJingReportRawStorageResultVOUsingPOST
export default function fetchMethod(params: { enterpriseId: number; filePathNo: number }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/baoJingReportCheck/importData",
            method: "post",
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
