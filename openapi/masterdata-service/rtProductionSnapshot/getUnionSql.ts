import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产快照相关/getUnionSqlUsingPOST
export function fetchMethod(params: { beginTime: string; endTime: string; queryQuantityCount: number; timeType: string }) {
    return post({
      url: "/masterdata-service/rtProductionSnapshot/getUnionSql",
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
