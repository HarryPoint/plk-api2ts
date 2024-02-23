import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/项目任务泳道图相关/querySwimLaneChartUsingGET
export default function fetchMethod(params: { projectId: number }) {
    return get<IJSONResultProjectTaskLaneMapResponseObject>({
      url: "/masterdata-service/projectTaskSwimLaneChart/querySwimLaneChart",
      params,
    });
}
// JSONResult«项目任务泳道图响应对象»
export interface IJSONResultProjectTaskLaneMapResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IItemTaskLaneMapResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目任务泳道图响应对象
export interface IItemTaskLaneMapResponseObject {
    // 任务列表
    taskList: IItemTaskLaneMapTaskResponseObject[];
    // 角色列表
    roleList: IProjectTaskLaneDiagramRoleResponseObject[];
    // 阶段列表
    stageList: IProjectTaskLaneDiagramPhaseResponseObject[];
}
// 项目任务泳道图任务响应对象
export interface IItemTaskLaneMapTaskResponseObject {
    // 任务id
    id: number;
    // 任务名称
    name: string;
    // 任务编号
    code: string;
    // 项目任务类型编号
    projectTaskTypeCode: string;
    // 项目任务类型名称
    projectTaskTypeName: string;
    // 应用类型
    appType: string;
    // 任务负责人角色ids
    leaderUserProjectRoleIds: number[];
    // 任务状态
    taskStatus: string;
    // 前置任务ids
    preTaskIds: number[];
    // 项目阶段id
    projectStageId: number;
    // 评审不通过，任务返回至
    returnTaskIds: number[];
}
// 项目任务泳道图角色响应对象
export interface IProjectTaskLaneDiagramRoleResponseObject {
    // 项目角色id
    projectRoleId: number;
    // 项目角色名称
    projectRoleName: string;
}
// 项目任务泳道图阶段响应对象
export interface IProjectTaskLaneDiagramPhaseResponseObject {
    // 阶段id
    projectStageId: number;
    // 阶段名称
    projectStageName: string;
    // 排序
    sort: number;
}
