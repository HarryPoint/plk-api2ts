import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/项目简报相关/checkWeeklyReportUsingGET
export function fetchMethod(params: { projectId: number }) {
    return get({
      url: "/masterdata-service/projectBriefReport/checkWeeklyReport",
      params,
    });
}
// JSONResult«string»_1
export interface IJSONResultstring1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
