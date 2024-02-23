import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/QMS大屏相关/queryAllAnnualProblemSituationUsingGET
export default function fetchMethod() {
    return get<IJSONResultAnnualProblemQuery>({
      url: "/masterdata-service/qmsDashboard/queryAllAnnualProblemSituation",
    });
}
// JSONResult«年度问题查询情况»
export interface IJSONResultAnnualProblemQuery {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IAnnualQuestionQuery;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 年度问题查询情况
export interface IAnnualQuestionQuery {
}
