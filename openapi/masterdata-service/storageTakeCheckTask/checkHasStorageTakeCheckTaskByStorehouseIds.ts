import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/仓库盘点任务相关/checkHasStorageTakeCheckTaskByStorehouseIdsUsingGET
export default function fetchMethod(params: { enterpriseId: number; storehouseIds: number[] }) {
    return get<IJSONResultobject>({
      url: "/masterdata-service/storageTakeCheckTask/checkHasStorageTakeCheckTaskByStorehouseIds",
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
