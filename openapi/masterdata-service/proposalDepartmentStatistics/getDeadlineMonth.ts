import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/提案部门完成情况表-相关/getDeadlineMonthUsingGET
export function fetchMethod(params: { year: number }) {
    return get({
      url: "/masterdata-service/proposalDepartmentStatistics/getDeadlineMonth",
      params,
    });
}
// JSONResult«int»
export interface IJSONResultint {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
