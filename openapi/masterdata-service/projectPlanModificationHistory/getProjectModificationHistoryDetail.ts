import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/项目计划变更版本记录相关/getProjectModificationHistoryDetailUsingGET_2
export function fetchMethod(params: { projectPlanModificationId: string }) {
    return get({
      url: "/masterdata-service/projectPlanModificationHistory/getProjectModificationHistoryDetail",
      params,
    });
}
// JSONResult«项目计划变更信息版本记录»
export interface IJSONResultProjectPlanChangeInformationVersionRecord {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectPlanChangeInformationVersionRecord;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目计划变更信息版本记录
export interface IProjectPlanChangeInformationVersionRecord {
    // undefined
    appId: number;
    // undefined
    modificationId: number;
    // undefined
    dataSnapshot: Record<string, any>[];
}
