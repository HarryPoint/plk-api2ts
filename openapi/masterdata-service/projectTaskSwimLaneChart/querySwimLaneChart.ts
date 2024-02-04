// JSONResult«项目任务泳道图响应对象»
export interface IJSONResult项目任务泳道图响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目任务泳道图响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目任务泳道图响应对象
export interface I项目任务泳道图响应对象 {
    // 任务列表
    taskList: I项目任务泳道图任务响应对象[];
    // 角色列表
    roleList: I项目任务泳道图角色响应对象[];
    // 阶段列表
    stageList: I项目任务泳道图阶段响应对象[];
}
// 项目任务泳道图任务响应对象
export interface I项目任务泳道图任务响应对象 {
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
export interface I项目任务泳道图角色响应对象 {
    // 项目角色id
    projectRoleId: number;
    // 项目角色名称
    projectRoleName: string;
}
// 项目任务泳道图阶段响应对象
export interface I项目任务泳道图阶段响应对象 {
    // 阶段id
    projectStageId: number;
    // 阶段名称
    projectStageName: string;
    // 排序
    sort: number;
}
