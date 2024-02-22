import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/导出相关/getExportAuthAndUpdateByTicketUsingGET
export function fetchMethod(params: { ticket: string }) {
    return get({
      url: "/masterdata-service/exportAuth/getExportAuthAndUpdateByTicket",
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
