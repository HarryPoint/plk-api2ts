import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/工费相关/batchValidUsingPOST_3
export default function fetchMethod(data: IEnableOrDisableVOInBatches, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/laborCost/batchValid",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 批量启用or停用VO
export interface IEnableOrDisableVOInBatches {
    // id集合
    ids: number[];
    // 状态
    dataStatus: number;
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
