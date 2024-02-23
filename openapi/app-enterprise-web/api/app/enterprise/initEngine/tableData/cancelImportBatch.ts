import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 表数据相关/cancelImportBatchUsingPOST
export default function fetchMethod(data: IBatchCancelImportRequestDTO) {
    return http<IJSONResultstring>({
        url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/cancelImportBatch",
        method: "post",
        data,
    });
}
// BatchCancelImportRequestDTO
export interface IBatchCancelImportRequestDTO {
    // 行ID列表
    rowIdList: number[];
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
