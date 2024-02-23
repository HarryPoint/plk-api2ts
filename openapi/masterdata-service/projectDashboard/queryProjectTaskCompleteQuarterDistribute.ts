import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/项目大屏相关/queryProjectTaskCompleteQuarterDistributeUsingGET
export default function fetchMethod(params: { projectCategory?: string }) {
    return get<IJSONResultListQuarterlyDistributedResponseObjectForProjectTasks['data']>({
      url: "/masterdata-service/projectDashboard/queryProjectTaskCompleteQuarterDistribute",
      params,
    });
}
// JSONResult«List«项目任务季度分布响应对象»»
export interface IJSONResultListQuarterlyDistributedResponseObjectForProjectTasks {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IQuarterlyDistributedResponseObjectsForProjectTasks[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目任务季度分布响应对象
export interface IQuarterlyDistributedResponseObjectsForProjectTasks {
    // 季度开始日期
    beginTime: string;
    // 季度结束日期
    endTime: string;
    // 任务总数量
    totalQuantity: number;
    // 已完成数量
    completeQuantity: number;
    // 完成率
    completeRate: number;
}
