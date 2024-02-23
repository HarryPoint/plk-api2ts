import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/盘点单数据迁移服务/allUsingGET_1
export default function fetchMethod(params: { enterpriseIds: number[] }) {
    return http<IJSONResultobject>({
        url: "/masterdata-service/script/storageTakeCheckTaskMigrateScript/all",
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
