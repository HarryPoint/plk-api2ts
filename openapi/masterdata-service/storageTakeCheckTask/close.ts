import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/仓库盘点任务相关/closeUsingPOST_3
export default function fetchMethod(data: IIdInformation, params: { enterpriseId: number; userId: number }) {
    return http<IJSONResultobject>({
        url: "/masterdata-service/storageTakeCheckTask/close",
        method: "post",
        data,
        params,
    });
}
// id信息
export interface IIdInformation {
    // id
    id: number;
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
