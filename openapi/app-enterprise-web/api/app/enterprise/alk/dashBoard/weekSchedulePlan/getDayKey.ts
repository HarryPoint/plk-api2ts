import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/安利康大屏相关/getWeekSchedulePlanDayKeyUsingGET
export default function fetchMethod() {
    return get<IJSONResultListstring['data']>({
      url: "/app-enterprise-web/api/app/enterprise/alk/dashBoard/weekSchedulePlan/getDayKey",
    });
}
// JSONResult«List«string»»
export interface IJSONResultListstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
