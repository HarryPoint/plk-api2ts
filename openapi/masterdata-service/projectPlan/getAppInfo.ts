import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/项目计划相关/getAppInfoUsingGET
export function fetchMethod(params: { projectId: string }) {
    return get({
      url: "/masterdata-service/projectPlan/getAppInfo",
      params,
    });
}
// JSONResult«项目计划应用响应对象»
export interface ITheJSONResultProjectPlansToApplyTheResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheProjectPlanAppliesTheResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目计划应用响应对象
export interface ITheProjectPlanAppliesTheResponseObject {
    // 应用id
    appId: number;
    // 应用code
    appCode: string;
    // 项目计划id
    id: number;
    // 项目计划编号
    code: string;
    // 任务流程状态
    flowStatus: string;
    // 数据状态
    dataStatus: string;
}
