import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/kaizen项目相关/queryProjectGanttUsingPOST
export default function fetchMethod(data: IProjectGanttChartQueryObject) {
    return post<IJSONResultListProjectGanttChartResponseObject>({
      url: "/masterdata-service/kaizenProject/queryProjectGantt",
      data,
    });
}
// 项目甘特图查询对象
export interface IProjectGanttChartQueryObject {
    // 项目名称
    projectName: string;
    // 项目任务名称
    projectTaskName: string;
    // 项目类型集合
    projectTypeList: string[];
    // 任务优先级集合
    priorityList: string[];
    // 项目状态集合
    projectStatusList: string[];
    // 任务状态
    projectTaskStatusList: string[];
    // 项目负责人id集合
    projectLeaderIdList: number[];
    // 任务执行人id集合
    projectTaskLeaderIdList: number[];
    // 项目查询开始日期
    projectStartDate: string;
    // 项目查询截止日期
    projectEndDate: string;
    // 项目任务查询开始日期
    projectTaskStartDate: string;
    // 项目任务查询截止日期
    projectTaskEndDate: string;
    // 项目id集合
    projectIdList: number[];
}
// JSONResult«List«项目甘特图响应对象»»
export interface IJSONResultListProjectGanttChartResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectGanttChartResponseObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目甘特图响应对象
export interface IProjectGanttChartResponseObject {
    // 项目id
    projectId: number;
    // 项目名称
    projectName: string;
    // 项目状态
    projectStatus: string;
    // 项目状态描述
    projectStatusDesc: string;
    // 项目负责人id
    projectLeaderId: number;
    // 项目负责人名称
    projectLeaderName: string;
    // 项目类型
    projectType: string;
    // 项目类型描述
    projectTypeDesc: string;
    // 开始日期
    projectStartDate: string;
    // 截止日期
    projectEndDate: string;
    // 项目任务列表
    projectTaskGanttList: IProjectTaskGanttChartResponseObject[];
}
// 项目任务甘特图响应对象
export interface IProjectTaskGanttChartResponseObject {
    // 项目任务id
    projectTaskId: number;
    // 上级任务id
    parentId: number;
    // 项目任务名称
    projectTaskName: string;
    // 项目任务优先级
    priority: string;
    // 项目任务优先级描述
    priorityDesc: string;
    // 项目任务状态
    projectTaskStatus: string;
    // 项目任务状态描述
    projectTaskStatusDesc: string;
    // 项目任务执行人id
    projectTaskLeaderUserId: number;
    // 项目任务执行人名称
    projectTaskLeaderUserName: string;
    // 项目任务开始日期
    beginTime: string;
    // 项目任务截止日期
    endTime: string;
}
